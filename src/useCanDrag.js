import { useEffect, useState } from 'react'

const query = '(min-width: 768px) and (pointer: fine)'

// Dragging needs a mouse and some room. On phones it would block scrolling.
export function useCanDrag() {
  const [canDrag, setCanDrag] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setCanDrag(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return canDrag
}
