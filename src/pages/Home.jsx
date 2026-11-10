import { AnimatePresence, motion } from 'motion/react'
import { useSearchParams } from 'react-router-dom'
import WorkTile from '../components/WorkTile.jsx'
import { categories, projects } from '../data/projects.js'
import { site } from '../data/site.js'

export default function Home() {
  const [params, setParams] = useSearchParams()
  const active = categories.includes(params.get('filter')) ? params.get('filter') : null
  const visible = active ? projects.filter((p) => p.categories.includes(active)) : projects

  return (
    <>
      <title>{`${site.name}, ${site.tagline.toLowerCase()}`}</title>
      <h1 className="sr-only">{site.name}, work</h1>

      <div className="flex flex-col gap-5 px-4 pb-6 pt-8 sm:px-6">
        <p className="max-w-2xl text-lg leading-snug text-ink/80 sm:text-xl">{site.intro}</p>
        <div role="group" aria-label="Show work by type" className="flex flex-wrap gap-2">
          {[null, ...categories].map((category) => (
            <button
              key={category ?? 'all'}
              type="button"
              aria-pressed={active === category}
              onClick={() => setParams(category ? { filter: category } : {}, { replace: true })}
              className={`min-h-10 rounded-full border px-4 text-sm font-bold transition-colors ${
                active === category ? 'border-rose bg-rose text-ink' : 'border-ink/25 text-ink hover:border-rose-ink hover:text-rose-ink'
              }`}
            >
              {category ?? 'All'}
            </button>
          ))}
        </div>
      </div>

      <ul className="grid grid-flow-dense grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => {
            const big = project.featured && !active
            return (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={big ? 'col-span-2 row-span-2' : ''}
              >
                <WorkTile project={project} big={big} />
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>
    </>
  )
}
