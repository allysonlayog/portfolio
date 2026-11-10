import { useEffect, useRef } from 'react'

const buttonClass = 'min-h-11 min-w-11 px-3 font-semibold text-white hover:text-rose'

// Full-screen image viewer. <dialog> gives us Esc to close, keeps keyboard
// focus inside, and returns focus to the image that was clicked.
export default function Lightbox({ images, index, onChange, onClose }) {
  const dialog = useRef(null)
  const touchStart = useRef(null)
  const isOpen = index !== null

  useEffect(() => {
    const element = dialog.current
    if (isOpen && !element.open) element.showModal()
    if (!isOpen && element.open) element.close()
  }, [isOpen])

  const step = (amount) => onChange((index + amount + images.length) % images.length)

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') step(-1)
    if (event.key === 'ArrowRight') step(1)
  }

  const handleTouchEnd = (event) => {
    const distance = event.changedTouches[0].clientX - touchStart.current
    if (Math.abs(distance) > 50) step(distance > 0 ? -1 : 1)
  }

  const image = isOpen ? images[index] : null

  return (
    <dialog
      ref={dialog}
      aria-label="Image viewer"
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0].clientX
      }}
      onTouchEnd={handleTouchEnd}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink text-white"
    >
      {image && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-2 pt-2">
            <p className="px-3 text-white/70" aria-live="polite">
              {index + 1} of {images.length}
            </p>
            <button type="button" onClick={onClose} className={buttonClass}>
              Close
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center px-4">
            <img src={image.src} alt={image.alt} className="h-auto max-h-full w-auto max-w-full object-contain" />
          </div>
          <div className="flex items-center justify-between gap-4 px-2 pb-2">
            <button type="button" onClick={() => step(-1)} className={buttonClass}>
              Previous
            </button>
            <p className="min-w-0 text-center text-white/70">{image.alt}</p>
            <button type="button" onClick={() => step(1)} className={buttonClass}>
              Next
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}
