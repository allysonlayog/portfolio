import { Link } from 'react-router-dom'
import { categoryPages, categoryPath } from '../data/categories.js'

// The row of category buttons. "All" goes to the front page, and each other
// button opens that category's page. current: the name of the category being
// shown, or null on the front page.
export default function CategoryNav({ current = null }) {
  const links = [{ name: 'All', to: '/', active: current === null }].concat(
    categoryPages.map((c) => ({ name: c.name, to: categoryPath(c.name), active: current === c.name })),
  )

  return (
    <nav aria-label="Work categories">
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.to}
              aria-current={link.active ? 'page' : undefined}
              className={`inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-bold transition-colors ${
                link.active ? 'border-rose bg-rose text-ink' : 'border-ink/25 text-ink hover:border-rose-ink hover:text-rose-ink'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
