# Metall auf Metall Tapestry

A horizontally scrolling website displaying the "Metall auf Metall" tapestry in the style of the Bayeux Tapestry.

## About

This tapestry documents the "Metall auf Metall" series of court decisions (Kraftwerk v. Moses Pelham, 1977–2026) in 25 scenes, presented as a continuous horizontal strip in the medieval Bayeux Tapestry style.

## Structure

- `source/` - Original PNG panel files and the scene prompts markdown file. Leave as-is as new panels are added.
- `docs/` - The website with converted images, CSS, and JavaScript (served by GitHub Pages)
- `update_tapestry.sh` - Script to convert new panels and regenerate the website

## Usage

1. Add new PNG panels to `source/` (named `panelNN.png`)
2. Run the update script: `./update_tapestry.sh`
3. Open `docs/index.html` in a browser or visit the GitHub Pages site

## Features

- Long horizontal scrolling tapestry (25 panels)
- Smooth zoom with mouse wheel
- Click and drag to pan with momentum/inertia
- Autoscroll (Play/Pause)
- Minimap showing current position
- Keyboard navigation (arrows, space, home/end, +/-/0, P)
- Click panels or hover for detailed scene explanations (German/English)
- AVIF and WebP formats for optimal web performance

## Credits

- **Images**: Generated using "Imagen" from OpenAI/ChatGPT
- **Inscriptions & Image Prompts**: Generated using Claude Opus 5.5
- **Website (HTML, CSS, JavaScript)**: Created with an LLM
