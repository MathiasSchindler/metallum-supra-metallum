# Metall auf Metall Tapestry

A horizontally scrolling website displaying the "Metall auf Metall" tapestry in the style of the Bayeux Tapestry.

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
- AVIF and WebP formats for optimal web performance
