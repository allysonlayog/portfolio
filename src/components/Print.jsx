import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { useCanDrag } from '../useCanDrag.js'

// Whichever print was touched last sits on top of the pile.
let topLayer = 1

const spring = { type: 'spring', stiffness: 220, damping: 20 }

// A white-framed print that can be picked up and moved. A click or the Enter
// key opens it, but moving it never does.
export default function Print({
  label,
  caption,
  onOpen,
  rotate = 0,
  table,
  snapBack = false,
  className = '',
  style,
  children,
  footer,
}) {
  const canDrag = useCanDrag()
  const pressedAt = useRef({ x: 0, y: 0 })
  const [layer, setLayer] = useState(1)

  const handlePress = (event) => {
    pressedAt.current = { x: event.pageX, y: event.pageY }
    topLayer += 1
    setLayer(topLayer)
  }

  const handleClick = (event) => {
    const fromKeyboard = event.detail === 0
    const moved = Math.hypot(event.pageX - pressedAt.current.x, event.pageY - pressedAt.current.y)
    if (fromKeyboard || moved < 6) onOpen()
  }

  return (
    <motion.div
      drag={canDrag}
      dragConstraints={table}
      dragElastic={0.1}
      dragMomentum={false}
      dragSnapToOrigin={snapBack}
      onPointerDown={handlePress}
      initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      whileHover={canDrag ? { scale: 1.03, rotate: 0 } : undefined}
      whileDrag={{ scale: 1.07, rotate: 0 }}
      transition={spring}
      style={{ ...style, zIndex: layer }}
      className={`relative bg-white p-2 text-black shadow-print ${canDrag ? 'cursor-grab active:cursor-grabbing' : ''} ${className}`}
    >
      <button type="button" aria-label={label} onClick={handleClick} className="block w-full text-left [cursor:inherit]">
        {children}
        {caption && <span className="block pt-2 text-sm font-bold">{caption}</span>}
      </button>
      {footer}
    </motion.div>
  )
}
