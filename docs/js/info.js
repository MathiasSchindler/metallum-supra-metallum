let pinnedPanel = null;

function formatSceneInfo(num) {
    // sceneData is loaded from scene_data.js
    const data = (typeof sceneData !== 'undefined') ? sceneData[num] : null;
    if (!data) {
        return `<h2>Panel ${String(num).padStart(2, '0')}</h2><p>Keine Erklärung verfügbar.</p>`;
    }
    
    let html = `<h2>Szene ${data.num}: ${data.title}</h2>`;
    
    if (data.date) {
        html += `<p class="info-meta"><strong>Datum:</strong> ${escapeHtml(data.date)}</p>`;
    }
    if (data.court) {
        html += `<p class="info-meta"><strong>Gericht:</strong> ${escapeHtml(data.court)}</p>`;
    }
    if (data.case_no) {
        html += `<p class="info-meta"><strong>Aktenzeichen:</strong> ${escapeHtml(data.case_no)}</p>`;
    }
    if (data.inscription) {
        html += `<p class="info-meta"><strong>Inschrift:</strong> ${escapeHtml(data.inscription)}</p>`;
    }
    if (data.trans_de) {
        html += `<p class="info-meta"><strong>Übersetzung (DE):</strong> ${escapeHtml(data.trans_de)}</p>`;
    }
    if (data.trans_en) {
        html += `<p class="info-meta"><strong>Translation (EN):</strong> ${escapeHtml(data.trans_en)}</p>`;
    }
    
    html += `<div class="info-section"><h3>Deutsch</h3><p>${escapeHtml(data.de)}</p></div>`;
    html += `<div class="info-section"><h3>English</h3><p>${escapeHtml(data.en)}</p></div>`;
    
    if (data.link) {
        html += `<p class="info-link"><a href="${data.link}" target="_blank" rel="noopener">Weitere Informationen</a></p>`;
    }
    
    return html;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function initInfoPanel() {
    const infoPanel = document.getElementById('infoPanel');
    const infoContent = document.getElementById('infoPanelContent');
    const closeBtn = document.getElementById('infoPanelClose');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            pinnedPanel = null;
            if (infoPanel) {
                infoPanel.classList.remove('pinned');
            }
        });
    }
    
    // Add event listeners to panels
    const panels = document.querySelectorAll('.tapestry-panel');
    panels.forEach(panel => {
        const num = parseInt(panel.getAttribute('data-panel'));
        if (isNaN(num)) return;
        
        panel.addEventListener('mouseenter', () => {
            if (pinnedPanel === null && infoContent) {
                infoContent.innerHTML = formatSceneInfo(num);
            }
        });
        
        panel.addEventListener('click', (e) => {
            e.stopPropagation();
            pinnedPanel = num;
            if (infoContent) {
                infoContent.innerHTML = formatSceneInfo(num);
            }
            if (infoPanel) {
                infoPanel.classList.add('pinned');
            }
        });
    });
    
    // Click outside to unpin
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.info-panel') && !e.target.closest('.tapestry-panel')) {
            pinnedPanel = null;
            if (infoPanel) {
                infoPanel.classList.remove('pinned');
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInfoPanel);
} else {
    initInfoPanel();
}
