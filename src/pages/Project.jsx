import { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import JustifiedRow from '../components/JustifiedRow.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Picture from '../components/Picture.jsx'
import { toRows } from '../data/layout.js'
import { projects } from '../data/projects.js'
import { site } from '../data/site.js'
import NotFound from './NotFound.jsx'
import Print from '../components/Print.jsx'

const tilts = [-2, 1.5, -1, 2.5, -2.5, 1, 2, -1.5]

export default function Project() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const table = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="px-4 sm:px-8">
      <title>{`${project.title}, ${site.name}`}</title>
      <Link to="/work" className="font-bold underline underline-offset-4">
        All work
      </Link>
      <h1 className="mt-4 max-w-6xl text-[15vw] font-extrabold leading-[0.88] tracking-tighter md:text-[9vw]">
        {project.title}
      </h1>
      <p className="mt-5 max-w-2xl text-2xl font-semibold leading-tight">{project.summary}</p>
      <p className="mt-2 font-medium">Move the prints around, or click one to see it larger.</p>

      <div ref={table} className="mt-12 space-y-10">
        {toRows(project.images, project.rows).map((row, rowIndex) => (
          <JustifiedRow
            key={row[0].src}
            items={row}
            minRatio={rowIndex === 0 ? 1.8 : 1.4}
            getSrc={(image) => image.src}
            renderItem={(image) => {
              const position = project.images.indexOf(image)
              return (
                <Print
                  label={`View larger: ${image.alt}`}
                  rotate={tilts[position % tilts.length]}
                  table={table}
                  onOpen={() => setOpenIndex(position)}
                  footer={
                    image.link && (
                      <a href={image.link} target="_blank" rel="noreferrer" className="mt-2 block text-sm font-bold underline">
                        Watch: {image.alt}
                      </a>
                    )
                  }
                >
                  <Picture src={image.src} alt="" className="pointer-events-none" />
                </Print>
              )
            }}
          />
        ))}
      </div>

      {project.credits && (
        <p className="mt-10 font-medium">
          Photo credits:{' '}
          {project.credits.map((credit, i) => (
            <span key={credit.href}>
              {i > 0 && ', '}
              <a href={credit.href} target="_blank" rel="noreferrer" className="underline">
                {credit.label}
              </a>
            </span>
          ))}
        </p>
      )}

      <section className="mt-24 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-bold">Next project</p>
          <Link
            to={`/work/${next.slug}`}
            className="block max-w-3xl text-[13vw] font-extrabold leading-[0.9] tracking-tighter hover:underline md:text-[7vw]"
          >
            {next.title}
          </Link>
        </div>
        <Print
          label={`Open ${next.title}`}
          rotate={3}
          snapBack
          onOpen={() => navigate(`/work/${next.slug}`)}
          className="w-full max-w-xs shrink-0"
        >
          <Picture src={next.cover.src} alt="" className="pointer-events-none" />
        </Print>
      </section>

      <Lightbox images={project.images} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </article>
  )
}
