import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function NotFound() {
  return (
    <div className="px-4 sm:px-6">
      <title>{`Page not found, ${site.name}`}</title>
      <h1 className="pt-8 text-6xl font-extrabold leading-[0.9] tracking-tight text-rose-ink sm:text-7xl lg:text-8xl">Page not found</h1>
      <p className="mt-6 text-xl text-ink/80">
        This page doesn't exist. <Link to="/" className="font-bold underline underline-offset-4 hover:text-rose-ink">Go to the work page</Link> to see all projects.
      </p>
    </div>
  )
}
