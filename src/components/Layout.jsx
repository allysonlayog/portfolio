import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-40 focus:bg-black focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <header className="flex items-center justify-between gap-4 px-4 py-4 text-lg font-bold sm:px-8">
          <Link to="/" className="hover:underline">
            {site.name}
          </Link>
          <nav aria-label="Main" className="flex gap-5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `underline-offset-4 hover:underline ${isActive ? 'underline' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </header>
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <footer className="flex flex-wrap justify-between gap-2 px-4 pb-8 pt-16 font-semibold sm:px-8">
          <p>{site.name}</p>
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </footer>
      </div>
    </MotionConfig>
  )
}
