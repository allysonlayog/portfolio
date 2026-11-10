import sizes from '../data/imageSizes.json'

// Shows an image at its natural shape. Knowing the size up front stops the
// page jumping around while images load.
export default function Picture({ src, alt, className = '', eager = false }) {
  const size = sizes[src]
  return (
    <img
      src={src}
      alt={alt}
      width={size?.width}
      height={size?.height}
      loading={eager ? 'eager' : 'lazy'}
      className={`h-auto w-full ${className}`}
    />
  )
}
