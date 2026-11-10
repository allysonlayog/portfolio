import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <title>{`Page not found, ${site.name}`}</title>
      <h1 className="pt-8 text-[15vw] font-extrabold leading-[0.9] tracking-tighter md:text-[9vw]">Page not found</h1>
      <p className="mt-6 text-xl">
        This page doesn't exist. <Link to="/work" className="font-bold underline underline-offset-4">Go to the work page</Link> to see all projects.
      </p>
    </div>
  )
}
