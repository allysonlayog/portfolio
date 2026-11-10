import { imageRatio } from '../data/layout.js'

// Lines images up side by side at the same height without cropping them: each
// one takes up width in proportion to its shape. On phones they stack instead.
// A row of few or narrow images gets empty space so nothing is blown up too far.
export default function JustifiedRow({ items, getSrc, renderItem, minRatio = 2 }) {
  const ratios = items.map((item) => imageRatio(getSrc(item)))
  const total = ratios.reduce((sum, ratio) => sum + ratio, 0)

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      {items.map((item, i) => (
        <div
          key={getSrc(item)}
          style={{ '--ratio': ratios[i] }}
          className="min-w-0 md:[flex:var(--ratio)_1_0%]"
        >
          {renderItem(item)}
        </div>
      ))}
      {total < minRatio && (
        <div
          aria-hidden="true"
          style={{ '--ratio': minRatio - total }}
          className="hidden md:block md:[flex:var(--ratio)_1_0%]"
        />
      )}
    </div>
  )
}
