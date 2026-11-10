#!/bin/sh
# Makes web-sized copies of the original artwork listed in scripts/assets.txt.
# Each image gets two files in public/images/work/:
#   <name>.webp        up to 2000px on the long side, for the large viewer
#   <name>-small.webp  up to 800px on the long side, for grids
# Then it refreshes src/data/imageSizes.json. Requires ImageMagick.
cd "$(dirname "$0")/.." || exit 1

source_dir=originals/portfolio-pics
out_dir=public/images/work

grep -v '^#' scripts/assets.txt | grep '|' | while IFS='|' read -r file name; do
  file=$(echo "$file" | sed 's/^ *//; s/ *$//')
  name=$(echo "$name" | sed 's/^ *//; s/ *$//')
  # Names with a folder, like video-stills/calazin.png, are read from originals/.
  case "$file" in
    */*) source="originals/$file" ;;
    *) source="$source_dir/$file" ;;
  esac
  if [ ! -f "$source" ]; then
    echo "Missing: $source"
    continue
  fi
  mkdir -p "$(dirname "$out_dir/$name")"
  magick "$source" -auto-orient -strip -resize '2000x2000>' -quality 80 "$out_dir/$name.webp" < /dev/null
  magick "$source" -auto-orient -strip -resize '800x800>' -quality 78 "$out_dir/$name-small.webp" < /dev/null
  echo "Made $name"
done

sh scripts/image-sizes.sh
