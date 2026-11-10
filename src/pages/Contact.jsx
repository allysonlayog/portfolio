import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import Picture from '../components/Picture.jsx'
import { site } from '../data/site.js'
import { useCanDrag } from '../useCanDrag.js'

export default function Contact() {
  const table = useRef(null)
  const canDrag = useCanDrag()
  const [status, setStatus] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setStatus('Email copied')
    } catch {
      setStatus('Could not copy. Select the address instead.')
    }
  }

  return (
    <div ref={table} className="px-4 pb-10 sm:px-8">
      <title>{`Contact, ${site.name}`}</title>
      <h1 className="text-[17vw] font-extrabold leading-[0.85] tracking-tighter md:text-[12vw]">Contact</h1>

      <motion.div
        drag={canDrag}
        dragConstraints={table}
        dragMomentum={false}
        style={{ rotate: -2 }}
        className={`mx-auto mt-10 grid max-w-4xl gap-6 bg-white p-6 text-black shadow-print md:grid-cols-[1fr_12rem] md:p-10 ${canDrag ? 'cursor-grab active:cursor-grabbing' : ''}`}
      >
        <div>
          <p className="text-3xl font-extrabold leading-tight md:text-4xl">Have a design or illustration project in mind? Email me.</p>
          <a href={`mailto:${site.email}`} className="mt-6 block break-words text-2xl font-bold underline underline-offset-4 md:text-3xl">
            {site.email}
          </a>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="button" onClick={copyEmail} className="bg-black px-5 py-3 font-bold text-white hover:bg-rose hover:text-black">
              Copy email
            </button>
            <p role="status" className="font-medium">
              {status}
            </p>
          </div>
        </div>
        <div style={{ rotate: '4deg' }} className="order-first w-32 justify-self-end border-4 border-dotted border-black p-1 md:order-none md:w-44">
          <Picture src="/images/merchandise/cat-mousepad.webp" alt="" className="pointer-events-none" />
        </div>
      </motion.div>
    </div>
  )
}
