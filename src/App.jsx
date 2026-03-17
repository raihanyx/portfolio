import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Projects from './pages/projects/Projects'
import About from './pages/About/About'
import SeekSupply from './pages/projects/seeksupply/SeekSupply'
import NontonNyaman from './pages/projects/nontonnyaman/NontonNyaman'
import MenuScanOrder from './pages/projects/menuscanorder/MenuScanOrder'
import ISaveIt from './pages/projects/isaveit/ISaveIt'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/seeksupply" element={<SeekSupply />} />
          <Route path="/projects/nontonnyaman" element={<NontonNyaman />} />
          <Route path="/projects/menuscanorder" element={<MenuScanOrder />} />
          <Route path="/projects/isaveit" element={<ISaveIt />} />
        </Routes>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  )
}
