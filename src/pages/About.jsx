import { useRef } from 'react'
import { motion } from 'motion/react'
import Picture from '../components/Picture.jsx'
import { about, site } from '../data/site.js'
import { useCanDrag } from '../useCanDrag.js'

const tilts = [-6, 4, -3, 7, -5, 3]

function Sticker({ label, rotate, table }) {
  const canDrag = useCanDrag()

  return (
    <motion.li
      drag={canDrag}
      dragConstraints={table}
      dragMomentum={false}
      whileDrag={{ scale: 1.15, rotate: 0 }}
      style={{ rotate }}
      className={`rounded-full bg-black px-5 py-2 text-lg font-bold text-white ${canDrag ? 'cursor-grab active:cursor-grabbing' : ''}`}
    >
      {label}
    </motion.li>
  )
}

function History({ title, items }) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
      <ol className="mt-3">
        {items.map((item) => (
          <li key={item.title} className="grid gap-x-4 border-t-2 border-black py-3 md:grid-cols-[8rem_1fr]">
            <p className="font-bold">{item.period}</p>
            <div>
              <p className="text-xl font-bold leading-snug">{item.title}</p>
              <p>{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default function About() {
  const table = useRef(null)
  const experience = about.experience.map((job) => ({
    title: job.role,
    detail: job.company,
    period: job.period,
  }))
  const education = about.education.map((item) => ({
    title: item.course,
    detail: item.school,
    period: item.period,
  }))

  return (
    <div ref={table} className="px-4 sm:px-8">
      <title>{`About, ${site.name}`}</title>
      <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-start">
        <div style={{ rotate: '-3deg' }} className="bg-white p-3 shadow-print">
          <Picture src="/images/about/portrait.webp" alt="Portrait of me in a pink jacket, chin resting on both hands" eager />
        </div>
        <div>
          <h1 className="text-[17vw] font-extrabold leading-[0.85] tracking-tighter md:text-[10vw]">About</h1>
          {about.bio.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-2xl font-semibold leading-tight">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <ul aria-label="Tools I use" className="my-14 flex flex-wrap justify-center gap-4">
        {about.tools.map((tool, i) => (
          <Sticker key={tool} label={tool} rotate={tilts[i % tilts.length]} table={table} />
        ))}
      </ul>

      <div style={{ rotate: '0.6deg' }} className="mx-auto max-w-4xl bg-white p-6 text-black shadow-print md:p-10">
        <History title="Experience" items={experience} />
        <History title="Education" items={education} />
        <section className="mt-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Recognition</h2>
          <ul className="mt-3 border-t-2 border-black pt-3 text-lg font-medium">
            {about.recognition.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
