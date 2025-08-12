#!/bin/bash
# Helper script: downloads suggested Wikimedia Commons images for crags into public/images
# NOTE: This script downloads the image FILE PAGES (HTML) — open each URL in a browser to save the exact high-res image.
# If you have 'wget' and want direct image downloads, replace the page URLs with the direct image file URLs.

mkdir -p public/images
echo "This script provides Wikimedia Commons image pages; please open each URL and 'Download' the original image into public/images/ with the filenames indicated."
echo
echo "Grande Grotta -> public/images/grande-grotta.jpg"
echo "Page: https://commons.wikimedia.org/wiki/File:Masouri,_Grande_Grotta_-_panoramio.jpg"
echo
echo "Sikati Cave -> public/images/sikati-cave.jpg"
echo "Page: https://commons.wikimedia.org/wiki/File:Climbing_at_Kalymnos_Island_-_21.jpg"
echo
echo "Odyssey -> public/images/odyssey.jpg"
echo "Page: https://commons.wikimedia.org/wiki/File:Kalymnos_Sector_Odyssey.jpg"
echo
echo "Arginonta -> public/images/arginonta-valley.jpg"
echo "Page: https://commons.wikimedia.org/wiki/File:Sektor_Arginota,_Kalymnos.jpg"
echo
echo "Panorama -> public/images/panorama.jpg"
echo "Page: https://commons.wikimedia.org/wiki/File:Climbing_Odysseia_field_in_Kalymnos.jpeg"
echo
echo "Other crags: use general Kalymnos images at https://commons.wikimedia.org/wiki/Kalymnos to find suitable photos."
echo
echo "After downloading, ensure file names match the 'public/images/<name>.jpg' used by the app."
