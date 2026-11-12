import { Navigate, useSearchParams } from 'react-router-dom'
import CategoryNav from '../components/CategoryNav.jsx'
import CategoryTile from '../components/CategoryTile.jsx'
import { categoryPages, categoryPath } from '../data/categories.js'
import { site } from '../data/site.js'

export default function Home() {
  const [params] = useSearchParams()

  // Old links like /?filter=Branding go to that category's page.
  const filter = params.get('filter')
  if (filter && categoryPages.some((c) => c.name === filter)) {
    return <Navigate to={categoryPath(filter)} replace />
  }

  return (
    <>
      <title>{`${site.name}, ${site.tagline.toLowerCase()}`}</title>
      <h1 className="sr-only">{site.name}, work</h1>

      <div className="flex flex-col gap-5 px-4 pb-6 pt-8 sm:px-6">
        <p className="max-w-2xl text-lg leading-snug text-ink/80 sm:text-xl">{site.intro}</p>
        <CategoryNav />
      </div>

      <ul className="grid grid-flow-dense grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {categoryPages.map((category) => (
          <li key={category.slug} className={category.featured ? 'col-span-2 row-span-2' : ''}>
            <CategoryTile category={category} big={category.featured} />
          </li>
        ))}
      </ul>
    </>
  )
}
