#!/bin/sh
# Records every image's width and height in src/data/imageSizes.json.
# Requires ImageMagick.
cd "$(dirname "$0")/.." || exit 1
{
  echo '{'
  find public/images -name '*.webp' | sort | while read -r file; do
    size=$(magick identify -format '%w %h' "$file")
    echo "  \"${file#public}\": { \"width\": ${size% *}, \"height\": ${size#* } },"
  done | sed '$ s/,$//'
  echo '}'
} > src/data/imageSizes.json
