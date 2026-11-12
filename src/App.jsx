import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Category from './pages/Category.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Project from './pages/Project.jsx'

// The front page lists the work now. Old /work links still land there,
// keeping any filter.
function WorkRedirect() {
  const { search } = useLocation()
  return <Navigate to={`/${search}`} replace />
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<WorkRedirect />} />
        <Route path="category/:slug" element={<Category />} />
        <Route path="work/:slug" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
