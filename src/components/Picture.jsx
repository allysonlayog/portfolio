import sizes from '../data/imageSizes.json'

// Shows an image at its natural shape. Knowing the size up front stops the
// page jumping around while images load. When a small copy exists, the
// browser picks whichever size fits the screen.
// fit: show the image at its real size at most, instead of stretching it to
// fill the space, so small images don't turn blurry. maxHeight (a CSS length,
// e.g. '85vh') also keeps tall images within that height.
export default function Picture({ src, small, alt, sizes: sizesHint = '100vw', className = '', eager = false, fit = false, maxHeight }) {
  const size = sizes[src]
  const smallSize = small && small !== src ? sizes[small] : null
  const srcSet = smallSize && size ? `${small} ${smallSize.width}w, ${src} ${size.width}w` : undefined

  // A fixed width keeps the image's space reserved while it loads.
  let style
  if (fit && size) {
    const limit = maxHeight ? `calc(${maxHeight} * ${(size.width / size.height).toFixed(4)})` : '100%'
    style = { width: `min(${size.width}px, ${limit})`, maxWidth: '100%' }
  }

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizesHint : undefined}
      alt={alt}
      width={size?.width}
      height={size?.height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={style}
      className={`h-auto ${fit ? '' : 'w-full'} ${className}`}
    />
  )
}
