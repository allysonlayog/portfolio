import sizes from './imageSizes.json'

export function imageRatio(src) {
  const size = sizes[src]
  return size ? size.width / size.height : 1
}

// Splits a list into rows: toRows([a, b, c], [2, 1]) gives [[a, b], [c]].
// The pattern repeats if there are more items than it covers.
export function toRows(items, pattern) {
  const rows = []
  let start = 0
  let step = 0
  while (start < items.length) {
    const size = pattern[step % pattern.length]
    rows.push(items.slice(start, start + size))
    start += size
    step += 1
  }
  return rows
}
