import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'

const links = [
  { to: '/', label: 'Work', end: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Project pages count as Work in the menu.
  const onWork = pathname === '/' || pathname.startsWith('/work') || pathname.startsWith('/category')

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-rose focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <header className="z-40 md:sticky md:top-0 border-b border-ink/15 bg-paper/85 backdrop-blur-md">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 px-4 py-4 sm:px-6">
            <Link to="/" className="group">
              <span className="block text-2xl font-extrabold uppercase leading-none tracking-[0.2em] text-rose-ink sm:text-3xl">
                {site.name}
              </span>
              <span className="mt-1 block text-sm text-ink/60 group-hover:text-ink">{site.tagline}</span>
            </Link>
            <nav aria-label="Main" className="flex gap-6 text-sm font-bold uppercase tracking-widest">
              {links.map((link) => {
                const active = link.to === '/' ? onWork : pathname === link.to
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    aria-current={active ? 'page' : undefined}
                    className={`border-b-2 pb-1 hover:text-rose-ink ${active ? 'border-rose text-rose-ink' : 'border-transparent'}`}
                  >
                    {link.label}
                  </NavLink>
                )
              })}
            </nav>
          </div>
        </header>
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <footer className="mt-20 flex flex-wrap justify-between gap-2 border-t border-ink/15 px-4 py-8 text-sm sm:px-6">
          <p className="text-ink/60">{site.name}</p>
          <a href={`mailto:${site.email}`} className="font-bold text-rose-ink hover:underline">
            {site.email}
          </a>
        </footer>
      </div>
    </MotionConfig>
  )
}
