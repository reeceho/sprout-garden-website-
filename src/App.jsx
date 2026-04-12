import { Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  return (
    <>
      <motion.div className="scroll-bar" style={{ scaleX }} aria-hidden="true" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
