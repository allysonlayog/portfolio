import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { site } from '../data/site.js'
import Print from '../components/Print.jsx'

// left, top and width are percentages of the table. rotate is in degrees.
const prints = [
  { src: 'bayani/hero', to: 'bayani', title: 'Bayani', left: 3, top: 6, width: 27, rotate: -4 },
  { src: 'characters/fifth-dimension', to: 'character-design', title: 'Character design', left: 32, top: 1, width: 21, rotate: 3 },
  { src: 'illustration/flame-witch', to: 'digital-illustration', title: 'Digital illustration', left: 56, top: 5, width: 19, rotate: -2 },
  { src: 'packaging/yema-pouch', to: 'packaging', title: 'Packaging', left: 76, top: 16, width: 22, rotate: 5 },
  { src: 'events/grand-baby-fair', to: 'event-booths', title: 'Event booths', left: 7, top: 47, width: 23, rotate: 3 },
  { src: 'illustration/many-eyes', to: 'digital-illustration', title: 'Digital illustration', left: 31, top: 41, width: 18, rotate: -5 },
  { src: 'merchandise/planet-pillow', to: 'merchandise', title: 'Merchandise', left: 51, top: 49, width: 19, rotate: 4 },
  { src: 'merchandise/cat-mousepad', to: 'merchandise', title: 'Merchandise', left: 73, top: 55, width: 22, rotate: -3 },
  { src: 'logos/little-rotti', to: 'logos-and-branding', title: 'Logos', left: 16, top: 76, width: 26, rotate: -2 },
  { src: 'environments/rainbow-sea', to: 'environments-and-props', title: 'Environments', left: 46, top: 76, width: 28, rotate: 2 },
]

const url = (src) => `/images/${src}.webp`
const projectPath = (slug) => `/work/${slug}`

export default function Home() {
  const table = useRef(null)
  const navigate = useNavigate()

  return (
    <>
      <title>{`${site.name}, creative designer and illustrator`}</title>
      <h1 className="px-4 text-[17vw] font-extrabold leading-[0.82] tracking-tighter sm:px-8">
        Allyson
        <br />
        Layog
      </h1>
      <p className="mt-6 max-w-2xl px-4 text-2xl font-semibold leading-tight sm:px-8">
        {site.intro} Move the prints around my table, or click one to see the project.
      </p>

      <div ref={table} className="relative mt-8 hidden h-[84vw] md:block">
        {prints.map((print) => (
          <Print
            key={print.src}
            label={`Open ${print.title}`}
            caption={print.title}
            rotate={print.rotate}
            table={table}
            onOpen={() => navigate(projectPath(print.to))}
            className="!absolute"
            style={{ left: `${print.left}%`, top: `${print.top}%`, width: `${print.width}%` }}
          >
            <img src={url(print.src)} alt="" draggable="false" className="pointer-events-none w-full" />
          </Print>
        ))}
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 px-4 md:hidden">
        {prints.map((print, i) => (
          <li key={print.src} style={{ rotate: `${print.rotate}deg` }} className={i % 3 === 0 ? 'col-span-2' : ''}>
            <Link to={projectPath(print.to)} className="block bg-white p-2 shadow-tag">
              <img src={url(print.src)} alt="" className="w-full" />
              <span className="block pt-1 text-sm font-bold">{print.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
