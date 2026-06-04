import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import SiteFooter from './components/SiteFooter/SiteFooter'
import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import About from './pages/About/About'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'
import GeoQuiz from './pages/projects/geoquiz/GeoQuiz'
import NotFound from './pages/NotFound/NotFound'
import { useReveals } from './hooks/useReveals'
import { useMotion } from './hooks/useMotion'
import './styles/pages.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  const location = useLocation()
  useReveals()
  useMotion()

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <div key={location.key} className="page-fade">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/geoquiz" element={<GeoQuiz />} />
            {/* legacy redirects from the previous site structure */}
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="/projects/:slug" element={<RedirectProject />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

function RedirectProject() {
  const { pathname } = useLocation()
  const slug = pathname.split('/').pop()
  return <Navigate to={`/work/${slug}`} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
