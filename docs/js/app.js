let isAutoScrolling = false;
let autoScrollInterval = null;
let currentZoom = 1.0;
let isDragging = false;
let startX, scrollLeft;
let velocity = 0;
let momentumID = null;
let lastX, lastTime;

const scrollSpeed = 2;
const zoomStep = 0.05;
const minZoom = 0.25;
const maxZoom = 4.0;
const friction = 0.95;

function getScaledScrollWidth() {
    const viewport = document.getElementById('tapestryViewport');
    const strip = document.getElementById('tapestryStrip');
    if (!viewport || !strip) return viewport ? viewport.scrollWidth : 0;
    return strip.scrollWidth * currentZoom;
}

function init() {
    const viewport = document.getElementById('tapestryViewport');
    const minimap = document.getElementById('minimap');
    
    buildMinimap();
    
    if (viewport) {
        viewport.addEventListener('mousedown', (e) => {
            isDragging = true;
            viewport.style.cursor = 'grabbing';
            viewport.style.userSelect = 'none';
            document.body.style.userSelect = 'none';
            if (momentumID) {
                cancelAnimationFrame(momentumID);
                momentumID = null;
            }
            startX = e.pageX - viewport.offsetLeft;
            scrollLeft = viewport.scrollLeft;
            lastX = e.pageX;
            lastTime = Date.now();
            velocity = 0;
            e.preventDefault();
        });
        
        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            const viewportEl = document.getElementById('tapestryViewport');
            if (viewportEl) viewportEl.style.cursor = 'grab';
            viewport.style.userSelect = '';
            document.body.style.userSelect = '';
            if (Math.abs(velocity) > 0.5) {
                momentum();
            }
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const viewportEl = document.getElementById('tapestryViewport');
            if (!viewportEl) return;
            e.preventDefault();
            const now = Date.now();
            const x = e.pageX - viewportEl.offsetLeft;
            const walkX = (x - startX) * 1.2;
            viewportEl.scrollLeft = scrollLeft - walkX;
            const deltaX = e.pageX - lastX;
            const deltaTime = now - lastTime;
            if (deltaTime > 0) {
                velocity = deltaX / deltaTime * 16;
            }
            lastX = e.pageX;
            lastTime = now;
            updateMinimap();
        });
        
        viewport.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -zoomStep : zoomStep;
            const oldZoom = currentZoom;
            currentZoom = Math.max(minZoom, Math.min(maxZoom, currentZoom + delta));
            applyZoom();
            // Adjust scroll position to keep center
            const ratio = viewport.scrollLeft / (viewport.scrollWidth - viewport.clientWidth);
            setTimeout(() => {
                const newMax = viewport.scrollWidth - viewport.clientWidth;
                viewport.scrollLeft = ratio * newMax;
                updateMinimap();
            }, 0);
        }, { passive: false });
        
        viewport.addEventListener('scroll', updateMinimap);
    }
    
    document.getElementById('btnPlayPause')?.addEventListener('click', toggleAutoScroll);
    document.getElementById('btnZoomIn')?.addEventListener('click', () => {
        currentZoom = Math.min(maxZoom, currentZoom + zoomStep * 2);
        applyZoom();
        updateMinimap();
    });
    document.getElementById('btnZoomOut')?.addEventListener('click', () => {
        currentZoom = Math.max(minZoom, currentZoom - zoomStep * 2);
        applyZoom();
        updateMinimap();
    });
    document.getElementById('btnReset')?.addEventListener('click', resetView);
    document.getElementById('btnFit')?.addEventListener('click', fitToView);
    
    if (minimap) {
        minimap.addEventListener('click', (e) => {
            const rect = minimap.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const ratio = clickX / rect.width;
            const viewportEl = document.getElementById('tapestryViewport');
            if (viewportEl) {
                viewportEl.scrollLeft = ratio * (viewportEl.scrollWidth - viewportEl.clientWidth);
            }
        });
    }
    
    document.addEventListener('keydown', (e) => {
        const viewportEl = document.getElementById('tapestryViewport');
        if (!viewportEl) return;
        const scrollAmount = viewportEl.clientWidth * 0.8;
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            viewportEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            viewportEl.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (e.key === 'Home') {
            e.preventDefault();
            viewportEl.scrollTo({ left: 0, behavior: 'smooth' });
        } else if (e.key === 'End') {
            e.preventDefault();
            viewportEl.scrollTo({ left: viewportEl.scrollWidth, behavior: 'smooth' });
        } else if (e.key === '+' || e.key === '=') {
            e.preventDefault();
            currentZoom = Math.min(maxZoom, currentZoom + zoomStep * 2);
            applyZoom();
            updateMinimap();
        } else if (e.key === '-') {
            e.preventDefault();
            currentZoom = Math.max(minZoom, currentZoom - zoomStep * 2);
            applyZoom();
            updateMinimap();
        } else if (e.key === '0') {
            e.preventDefault();
            resetView();
        } else if (e.key === 'p' || e.key === 'P') {
            e.preventDefault();
            toggleAutoScroll();
        }
    });
    
    setTimeout(updateMinimap, 100);
    window.addEventListener('resize', updateMinimap);
}

function momentum() {
    const viewport = document.getElementById('tapestryViewport');
    if (!viewport) return;
    velocity *= friction;
    if (Math.abs(velocity) > 0.1) {
        viewport.scrollLeft -= velocity;
        updateMinimap();
        momentumID = requestAnimationFrame(momentum);
    } else {
        velocity = 0;
        momentumID = null;
    }
}

function buildMinimap() {
    const minimapStrip = document.getElementById('minimapStrip');
    const panels = document.querySelectorAll('.tapestry-panel');
    if (!minimapStrip || panels.length === 0) return;
    minimapStrip.innerHTML = '';
    const panelCount = panels.length;
    const panelWidth = Math.max(2, 220 / panelCount);
    panels.forEach(() => {
        const miniPanel = document.createElement('div');
        miniPanel.className = 'minimap-panel';
        miniPanel.style.width = panelWidth + 'px';
        minimapStrip.appendChild(miniPanel);
    });
}

function updateMinimap() {
    const viewport = document.getElementById('tapestryViewport');
    const minimapViewport = document.getElementById('minimapViewport');
    if (!viewport || !minimapViewport) return;
    const totalScroll = viewport.scrollWidth - viewport.clientWidth;
    if (totalScroll <= 0) {
        minimapViewport.style.left = '0';
        minimapViewport.style.width = '100%';
        return;
    }
    const ratio = viewport.scrollLeft / totalScroll;
    const viewRatio = viewport.clientWidth / viewport.scrollWidth;
    minimapViewport.style.left = ratio * (220 * (1 - viewRatio)) + 'px';
    minimapViewport.style.width = Math.max(4, 220 * viewRatio) + 'px';
}

function toggleAutoScroll() {
    const btn = document.getElementById('btnPlayPause');
    const viewport = document.getElementById('tapestryViewport');
    if (!viewport) return;
    if (isAutoScrolling) {
        clearInterval(autoScrollInterval);
        isAutoScrolling = false;
        if (btn) btn.textContent = '⏯️ Play';
    } else {
        isAutoScrolling = true;
        if (btn) btn.textContent = '⏸️ Pause';
        autoScrollInterval = setInterval(() => {
            const maxScroll = viewport.scrollWidth - viewport.clientWidth;
            if (viewport.scrollLeft >= maxScroll - 1) {
                viewport.scrollLeft = 0;
            } else {
                viewport.scrollLeft += scrollSpeed;
            }
            updateMinimap();
        }, 16);
    }
}

function zoomIn() {
    currentZoom = Math.min(maxZoom, currentZoom + zoomStep * 2);
    applyZoom();
    updateMinimap();
}

function zoomOut() {
    currentZoom = Math.max(minZoom, currentZoom - zoomStep * 2);
    applyZoom();
    updateMinimap();
}

function resetView() {
    currentZoom = 1.0;
    applyZoom();
    const viewport = document.getElementById('tapestryViewport');
    if (viewport) viewport.scrollTo({ left: 0, behavior: 'smooth' });
}

function fitToView() {
    const viewport = document.getElementById('tapestryViewport');
    const strip = document.getElementById('tapestryStrip');
    if (!viewport || !strip) return;
    const viewportWidth = viewport.clientWidth - 120;
    // Calculate based on strip's actual width
    const stripWidth = strip.scrollWidth;
    if (stripWidth > 0) {
        currentZoom = Math.max(minZoom, Math.min(maxZoom, viewportWidth / stripWidth));
        applyZoom();
        updateMinimap();
    }
}

function applyZoom() {
    const strip = document.getElementById('tapestryStrip');
    if (strip) {
        strip.style.zoom = currentZoom; strip.style.transform = "";
        
        strip.style.transition = 'transform 0.15s ease-out';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
