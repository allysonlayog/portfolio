import { Link, useParams, useSearchParams } from 'react-router-dom'
import CategoryTile from '../components/CategoryTile.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Picture from '../components/Picture.jsx'
import { categoryPages, categoryPath } from '../data/categories.js'
import { site } from '../data/site.js'
import NotFound from './NotFound.jsx'

// Up to four other categories: ones that share a project with this one first,
// then the ones that follow it in the list.
function moreWork(index) {
  const category = categoryPages[index]
  const projects = new Set(category.images.map((image) => image.project))
  const others = [...categoryPages.slice(index + 1), ...categoryPages.slice(0, index)]
  const related = others.filter((c) => c.images.some((image) => projects.has(image.project)))
  return [...related, ...others.filter((c) => !related.includes(c))].slice(0, 4)
}

// One category: its title, description and every image tagged with it.
// Images open large right here, and the viewer steps through this category.
export default function Category() {
  const { slug } = useParams()
  // The open image is kept in the address (?view=2), so it can be shared.
  const [params, setParams] = useSearchParams()

  const index = categoryPages.findIndex((c) => c.slug === slug)
  if (index === -1) return <NotFound />

  const category = categoryPages[index]
  const previous = categoryPages[(index - 1 + categoryPages.length) % categoryPages.length]
  const next = categoryPages[(index + 1) % categoryPages.length]
  const { images } = category

  const view = params.get('view')
  const openIndex = view !== null && images[Number(view)] ? Number(view) : null
  const setOpenIndex = (i) => setParams(i === null ? {} : { view: String(i) }, { replace: true })

  return (
    <article>
      <title>{`${category.name}, ${site.name}`}</title>

      <header className="px-4 pt-8 sm:px-6">
        <Link to="/" className="text-sm font-bold uppercase tracking-widest text-ink/60 hover:text-rose-ink">
          All work
        </Link>
        <h1 className="mt-4 text-4xl font-extrabold leading-[0.95] tracking-tight text-rose-ink sm:text-6xl">{category.name}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">{category.summary}</p>
        <p className="mt-4 text-sm text-ink/60">
          {images.length} {images.length === 1 ? 'piece' : 'pieces'}. Open any image to see it larger.
        </p>
      </header>

      <div className="mt-8 gap-4 px-4 sm:columns-2 sm:px-6 lg:columns-3 [&>figure]:mb-6 [&>figure]:break-inside-avoid">
        {images.map((image, position) => (
          <figure key={image.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(position)}
              aria-label={`View larger: ${image.alt}`}
              className="group block w-full cursor-zoom-in overflow-hidden"
            >
              <Picture
                src={image.src}
                small={image.small}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                alt=""
                eager={position < 3}
                fit
                className="mx-auto bg-ink/5 transition duration-500 group-hover:scale-[1.02]"
              />
            </button>
            <figcaption className="mt-2 text-sm text-ink/60">
              {image.link ? (
                <a href={image.link} target="_blank" rel="noreferrer" className="font-bold text-rose-ink hover:underline">
                  Watch: {image.alt}
                </a>
              ) : image.project.images.length > 1 ? (
                <Link to={`/work/${image.project.slug}`} className="hover:text-rose-ink hover:underline">
                  From <span className="font-bold">{image.project.title}</span>
                </Link>
              ) : (
                <span className="font-bold">{image.project.title}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      <nav aria-label="Other categories" className="mt-16 grid grid-cols-2 border-y border-ink/15">
        <Link to={categoryPath(previous.name)} className="group border-r border-ink/15 px-4 py-6 sm:px-6">
          <span className="block text-xs font-bold uppercase tracking-widest text-ink/60">Previous</span>
          <span className="mt-1 block text-xl font-extrabold group-hover:text-rose-ink sm:text-3xl">{previous.name}</span>
        </Link>
        <Link to={categoryPath(next.name)} className="group px-4 py-6 text-right sm:px-6">
          <span className="block text-xs font-bold uppercase tracking-widest text-ink/60">Next</span>
          <span className="mt-1 block text-xl font-extrabold group-hover:text-rose-ink sm:text-3xl">{next.name}</span>
        </Link>
      </nav>

      <section aria-labelledby="more-work" className="mt-12">
        <h2 id="more-work" className="px-4 text-sm font-bold uppercase tracking-widest text-ink/60 sm:px-6">
          More work
        </h2>
        <ul className="mt-4 grid grid-cols-2 gap-1 lg:grid-cols-4">
          {moreWork(index).map((other) => (
            <li key={other.slug}>
              <CategoryTile category={other} />
            </li>
          ))}
        </ul>
      </section>

      <Lightbox images={images} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </article>
  )
}
