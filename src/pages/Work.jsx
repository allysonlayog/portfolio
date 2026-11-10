import { AnimatePresence, motion } from 'motion/react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Picture from '../components/Picture.jsx'
import { categories, projects } from '../data/projects.js'
import { site } from '../data/site.js'
import Print from '../components/Print.jsx'

const tilts = [-3, 2, -1.5, 3, -2, 1.5, -3.5, 2.5]

export default function Work() {
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const active = params.get('filter')
  const visible = active ? projects.filter((p) => p.categories.includes(active)) : projects

  return (
    <div className="px-4 sm:px-8">
      <title>{`Work, ${site.name}`}</title>
      <h1 className="text-[17vw] font-extrabold leading-[0.85] tracking-tighter md:text-[12vw]">Work</h1>
      <p className="mt-4 max-w-xl text-xl font-semibold leading-tight">
        Pick up any print to look closer. Click one to open the project.
      </p>

      <div role="group" aria-label="Filter projects" className="mb-12 mt-6 flex flex-wrap gap-3">
        {[null, ...categories].map((category, i) => (
          <button
            key={category ?? 'all'}
            type="button"
            aria-pressed={active === category}
            onClick={() => setParams(category ? { filter: category } : {})}
            style={{ rotate: `${i % 2 === 0 ? -2 : 2}deg` }}
            className={`min-h-11 px-3 font-bold shadow-tag ${
              active === category ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {category ?? 'All'}
          </button>
        ))}
      </div>

      <ul className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.li
              key={project.slug}
              layout
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            >
              <Print
                label={`Open ${project.title}`}
                caption={project.title}
                rotate={tilts[i % tilts.length]}
                snapBack
                onOpen={() => navigate(`/work/${project.slug}`)}
              >
                <Picture {...project.cover} alt="" className="pointer-events-none" />
              </Print>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}
