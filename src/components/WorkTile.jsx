import { Link } from 'react-router-dom'
import { asset } from '../asset.js'
import { coverOf } from '../data/projects.js'
import sizes from '../data/imageSizes.json'

// A square tile for one project. The title shows on hover, and always on
// touch screens where there is no hover.
export default function WorkTile({ project, big = false }) {
  const cover = coverOf(project)
  // Big tiles let the browser choose the large copy on wide screens.
  const hasBoth = big && cover.small !== cover.src && sizes[cover.small] && sizes[cover.src]
  const srcSet = hasBoth ? `${asset(cover.small)} ${sizes[cover.small].width}w, ${asset(cover.src)} ${sizes[cover.src].width}w` : undefined

  return (
    <Link to={`/work/${project.slug}`} className="group relative block aspect-square overflow-hidden bg-ink/5">
      <img
        src={asset(cover.small)}
        srcSet={srcSet}
        sizes={srcSet ? '(min-width: 640px) 50vw, 100vw' : undefined}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-3 transition duration-300 sm:p-4 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:opacity-100">
        <p className="text-xs font-bold uppercase tracking-widest text-rose">{project.categories[0]}</p>
        <p className={`font-extrabold leading-tight text-white ${big ? 'text-2xl sm:text-4xl' : 'text-lg sm:text-xl'}`}>
          {project.title}
        </p>
      </div>
    </Link>
  )
}
