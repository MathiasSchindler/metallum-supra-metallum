#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR/source"
DOCS_DIR="$SCRIPT_DIR/docs"
IMAGES_DIR="$DOCS_DIR/images"

echo "🎨 Updating Metall auf Metall Tapestry"

mkdir -p "$IMAGES_DIR"

echo "📸 Converting panels..."
for png in "$SOURCE_DIR"/panel*.png; do
  [ -e "$png" ] || continue
  base=$(basename "$png" .png)
  webp="$IMAGES_DIR/${base}.webp"
  avif="$IMAGES_DIR/${base}.avif"
  if [ ! -f "$webp" ] || [ "$png" -nt "$webp" ]; then
    echo "  Converting $base.png to WebP..."
    cwebp -q 80 "$png" -o "$webp" >/dev/null 2>&1
  fi
  if [ ! -f "$avif" ] || [ "$png" -nt "$avif" ]; then
    echo "  Converting $base.png to AVIF..."
    avifenc --min 20 --max 30 "$png" "$avif" >/dev/null 2>&1
  fi
done
echo "✓ Conversion complete"

echo "📝 Regenerating HTML..."
python3 << PY
import os

docs_dir = "$DOCS_DIR"
images_dir = os.path.join(docs_dir, 'images')
panels = []
for fname in os.listdir(images_dir):
    if fname.startswith('panel') and fname.endswith('.avif'):
        num = fname[5:7]
        panels.append(num)
panels.sort()

panel_html = []
for num in panels:
    panel_html.append(f'''            <div class="tapestry-panel" data-panel="{num}">
                <picture>
                    <source srcset="images/panel{num}.avif" type="image/avif">
                    <source srcset="images/panel{num}.webp" type="image/webp">
                    <img src="images/panel{num}.webp" alt="Panel {num} - Metall auf Metall Tapestry" loading="lazy">
                </picture>
            </div>''')

content = f'''<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metall auf Metall - Der Teppich</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lora:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="site-header">
        <h1>Metall auf Metall</h1>
        <p class="subtitle">Der Teppich von „Metall auf Metall“ – Ein Wandteppich im Stil des Bayeux-Teppichs über den Rechtsstreit Kraftwerk ./. Pelham</p>
        <p class="nav-hint">← → Pfeiltasten • Leertaste • Mausrad zum Zoomen • Ziehen zum Verschieben • P für Autoscroll</p>
    </header>

    <main class="tapestry-container" id="tapestryContainer">
        <div class="tapestry-viewport" id="tapestryViewport">
            <div class="tapestry-strip" id="tapestryStrip">
{chr(10).join(panel_html)}
            </div>
        </div>
    </main>

    <div class="controls">
        <button id="btnPlayPause" title="Autoscroll starten/stoppen">⏯️ Play</button>
        <button id="btnZoomIn" title="Vergrößern">🔍+</button>
        <button id="btnZoomOut" title="Verkleinern">🔍−</button>
        <button id="btnReset" title="Ansicht zurücksetzen">↺ Reset</button>
        <button id="btnFit" title="Gesamten Teppich einpassen">↔️ Fit</button>
    </div>

    <div class="minimap" id="minimap">
        <div class="minimap-strip" id="minimapStrip"></div>
        <div class="minimap-viewport" id="minimapViewport"></div>
    </div>

    <footer class="site-footer">
        <p>„Metall auf Metall“ · 1977–2026 · {len(panels)} Panel(s)</p>
    </footer>

    <script src="js/app.js"></script>
</body>
</html>'''
with open(os.path.join(docs_dir, 'index.html'), 'w') as f:
    f.write(content)
PY
echo "✓ Done! Now have $DOCS_DIR/index.html with all panels"
