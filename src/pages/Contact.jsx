import { useState } from 'react'
import WorkTile from '../components/WorkTile.jsx'
import { projects } from '../data/projects.js'
import { site } from '../data/site.js'

export default function Contact() {
  const [status, setStatus] = useState('')
  const featured = projects.filter((p) => p.featured)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setStatus('Email copied')
    } catch {
      setStatus('Could not copy. Select the address instead.')
    }
  }

  return (
    <div className="pt-8">
      <title>{`Contact, ${site.name}`}</title>
      <div className="px-4 sm:px-6">
        <h1 className="text-6xl font-extrabold leading-[0.9] tracking-tight text-rose-ink sm:text-7xl lg:text-8xl">Say hello</h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink/80">
          Have a design or illustration project in mind? Email me and tell me a little about it.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 block break-words text-3xl font-extrabold underline decoration-rose decoration-4 underline-offset-8 hover:text-rose-ink sm:text-5xl"
        >
          {site.email}
        </a>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button type="button" onClick={copyEmail} className="min-h-11 rounded-full bg-rose px-6 font-bold text-ink hover:bg-ink hover:text-paper">
            Copy email
          </button>
          <p role="status" className="text-ink/70">
            {status}
          </p>
        </div>
      </div>

      <ul aria-label="Some of my work" className="mt-20 grid grid-cols-2 gap-1 lg:grid-cols-4">
        {featured.map((project) => (
          <li key={project.slug}>
            <WorkTile project={project} />
          </li>
        ))}
      </ul>
    </div>
  )
}
