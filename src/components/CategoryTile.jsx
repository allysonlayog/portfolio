import { Link } from 'react-router-dom'
import { asset } from '../asset.js'
import sizes from '../data/imageSizes.json'
import { categoryPath } from '../data/categories.js'

// A square tile for one category on the front page. The name is always
// showing, since the tiles are how people find their way around.
export default function CategoryTile({ category, big = false }) {
  const { cover } = category
  // Big tiles let the browser choose the large copy on wide screens.
  const hasBoth = big && cover.small !== cover.src && sizes[cover.small] && sizes[cover.src]
  const srcSet = hasBoth ? `${asset(cover.small)} ${sizes[cover.small].width}w, ${asset(cover.src)} ${sizes[cover.src].width}w` : undefined

  return (
    <Link to={categoryPath(category.name)} className="group relative block aspect-square overflow-hidden bg-ink/5">
      <img
        src={asset(cover.small)}
        srcSet={srcSet}
        sizes={srcSet ? '(min-width: 640px) 50vw, 100vw' : undefined}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-3 sm:p-4">
        <p className={`font-extrabold leading-tight text-white group-hover:text-rose ${big ? 'text-2xl sm:text-4xl' : 'text-lg sm:text-xl'}`}>
          {category.name}
        </p>
        <p className="text-xs font-bold uppercase tracking-widest text-white/75">
          {category.images.length} {category.images.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>
    </Link>
  )
}
