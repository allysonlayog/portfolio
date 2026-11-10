import Picture from '../components/Picture.jsx'
import { about, site } from '../data/site.js'

function Section({ title, children }) {
  return (
    <section>
      <h2 className="inline-block rounded-full bg-rose px-4 py-1 text-sm font-extrabold uppercase tracking-widest text-ink">{title}</h2>
      {children}
    </section>
  )
}

function History({ items }) {
  return (
    <ol className="mt-4">
      {items.map((item) => (
        <li key={item.title} className="border-t border-ink/15 py-4">
          <p className="text-sm font-bold text-rose-ink">{item.period}</p>
          <p className="mt-1 text-lg font-bold leading-snug">{item.title}</p>
          <p className="text-ink/70">{item.detail}</p>
        </li>
      ))}
    </ol>
  )
}

export default function About() {
  const experience = about.experience.map((job) => ({ title: job.role, detail: job.company, period: job.period }))
  const education = about.education.map((item) => ({ title: item.course, detail: item.school, period: item.period }))

  return (
    <div className="px-4 pt-8 sm:px-6">
      <title>{`About, ${site.name}`}</title>

      <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-start lg:gap-16">
        <div className="mx-auto w-full max-w-md md:max-w-none">
          <Picture src="/images/about/portrait.webp" alt="Portrait of me in a pink jacket, chin resting on both hands" eager />
        </div>
        <div>
          <h1 className="text-6xl font-extrabold leading-[0.9] tracking-tight text-rose-ink sm:text-7xl lg:text-8xl">About me</h1>
          {about.bio.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-2xl text-xl leading-relaxed text-ink/80">
              {paragraph}
            </p>
          ))}
          <h2 className="mt-10 text-sm font-bold uppercase tracking-widest text-ink/60">Tools I use</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {about.tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center gap-2 rounded-full border border-ink/20 bg-white py-1.5 pl-1.5 pr-4 font-bold"
              >
                <span
                  aria-hidden="true"
                  className={`grid h-7 w-7 place-items-center bg-rose text-xs font-extrabold text-white ${tool.round ? 'rounded-full' : 'rounded-md'}`}
                >
                  {tool.mark}
                </span>
                {tool.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-3">
        <Section title="Experience">
          <History items={experience} />
        </Section>
        <Section title="Education">
          <History items={education} />
        </Section>
        <Section title="Recognition">
          <ul className="mt-4">
            {about.recognition.map((item) => (
              <li key={item} className="border-t border-ink/15 py-4 text-lg font-medium leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  )
}
