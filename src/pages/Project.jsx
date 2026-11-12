import { Link, useParams, useSearchParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox.jsx'
import Picture from '../components/Picture.jsx'
import WorkTile from '../components/WorkTile.jsx'
import { categoryPath } from '../data/categories.js'
import { projects } from '../data/projects.js'
import { site } from '../data/site.js'
import NotFound from './NotFound.jsx'

// Up to four other projects, ones that share a type first.
function moreWork(project) {
  const others = projects.filter((p) => p !== project)
  const related = others.filter((p) => p.categories.some((c) => project.categories.includes(c)))
  return [...related, ...others.filter((p) => !related.includes(p))].slice(0, 4)
}

export default function Project() {
  const { slug } = useParams()
  // The picture open in the large viewer is kept in the address (?view=2),
  // so a picture chosen from a category on the home page opens straight away.
  const [params, setParams] = useSearchParams()
  const view = params.get('view')
  const setOpenIndex = (i) => setParams(i === null ? {} : { view: String(i) }, { replace: true })

  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />

  const project = projects[index]
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const [first, ...rest] = project.images
  const openIndex = view !== null && project.images[Number(view)] ? Number(view) : null

  // The first image may fill the width but never goes taller than the screen.
  // No image is shown bigger than its real size.
  const renderImage = (image, position, sizes) => (
    <figure key={image.src}>
      <button
        type="button"
        onClick={() => setOpenIndex(position)}
        aria-label={`View larger: ${image.alt}`}
        className="group block w-full cursor-zoom-in"
      >
        <Picture
          src={image.src}
          small={image.small}
          sizes={sizes}
          alt=""
          eager={position === 0}
          fit
          maxHeight={position === 0 ? '85vh' : undefined}
          className={`bg-ink/5 transition duration-500 group-hover:scale-[1.02] ${position === 0 ? '' : 'mx-auto'}`}
        />
      </button>
      {image.link && (
        <a href={image.link} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-bold text-rose-ink hover:underline">
          Watch: {image.alt}
        </a>
      )}
    </figure>
  )

  return (
    <article>
      <title>{`${project.title}, ${site.name}`}</title>

      <div className="grid gap-8 px-4 pt-8 sm:px-6 lg:grid-cols-[minmax(18rem,24rem)_1fr] lg:gap-12">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Link to="/" className="text-sm font-bold uppercase tracking-widest text-ink/60 hover:text-rose-ink">
            All work
          </Link>
          <ul aria-label="Type of work" className="mt-6 flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <li key={category}>
                <Link
                  to={categoryPath(category)}
                  className="inline-block rounded-full bg-rose px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink hover:bg-ink hover:text-paper"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <h1 className="mt-4 text-4xl font-extrabold leading-[0.95] tracking-tight text-rose-ink sm:text-5xl xl:text-6xl">
            {project.title}
          </h1>
          {project.summary && <p className="mt-5 text-lg leading-relaxed text-ink/80">{project.summary}</p>}
          {project.credits && (
            <p className="mt-4 text-sm text-ink/60">
              Event photos:{' '}
              {project.credits.map((credit, i) => (
                <span key={credit.href}>
                  {i > 0 && ', '}
                  <a href={credit.href} target="_blank" rel="noreferrer" className="underline hover:text-rose-ink">
                    {credit.label}
                  </a>
                </span>
              ))}
            </p>
          )}
          <p className="mt-6 text-sm text-ink/60">
            {project.images.length} {project.images.length === 1 ? 'image' : 'images'}. Open any image to see it larger.
          </p>
        </div>

        <div className="space-y-4">
          {renderImage(first, 0, '(min-width: 1024px) 70vw, 100vw')}
          {rest.length > 0 && (
            <div className="gap-4 sm:columns-2 [&>figure]:mb-4 [&>figure]:break-inside-avoid">
              {rest.map((image, i) => renderImage(image, i + 1, '(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw'))}
            </div>
          )}
        </div>
      </div>

      <nav aria-label="Other projects" className="mt-16 grid grid-cols-2 border-y border-ink/15">
        <Link to={`/work/${previous.slug}`} className="group border-r border-ink/15 px-4 py-6 sm:px-6">
          <span className="block text-xs font-bold uppercase tracking-widest text-ink/60">Previous</span>
          <span className="mt-1 block text-xl font-extrabold group-hover:text-rose-ink sm:text-3xl">{previous.title}</span>
        </Link>
        <Link to={`/work/${next.slug}`} className="group px-4 py-6 text-right sm:px-6">
          <span className="block text-xs font-bold uppercase tracking-widest text-ink/60">Next</span>
          <span className="mt-1 block text-xl font-extrabold group-hover:text-rose-ink sm:text-3xl">{next.title}</span>
        </Link>
      </nav>

      <section aria-labelledby="more-work" className="mt-12">
        <h2 id="more-work" className="px-4 text-sm font-bold uppercase tracking-widest text-ink/60 sm:px-6">
          More work
        </h2>
        <ul className="mt-4 grid grid-cols-2 gap-1 lg:grid-cols-4">
          {moreWork(project).map((other) => (
            <li key={other.slug}>
              <WorkTile project={other} />
            </li>
          ))}
        </ul>
      </section>

      <Lightbox images={project.images} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </article>
  )
}
