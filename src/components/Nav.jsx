import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const SproutLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 28 V18"/>
    <path d="M16 18 C16 12 10 8 6 10 C10 10 14 14 16 18"/>
    <path d="M16 18 C16 14 20 8 26 10 C22 10 18 14 16 18"/>
    <circle cx="16" cy="6" r="2" fill="currentColor" stroke="none" opacity=".3"/>
  </svg>
)

const WA = 'https://wa.me/85244270658?text=%E4%BD%A0%E5%A5%BD%EF%BC%81%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84%E5%85%8D%E8%B2%BB%E8%A9%A6%E5%A0%82'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    fn(); window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav className={`nav${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [.16, 1, .3, 1] }}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <SproutLogo />
          <div className="nav-logo-mk">
            <div className="zh">小芽菜研習中心</div>
            <div className="en">Sprout Garden</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" className={loc.pathname === '/' ? 'active' : ''}>主頁</Link>
          <Link to="/about" className={loc.pathname === '/about' ? 'active' : ''}>關於我哋</Link>
          <Link to="/courses" className={loc.pathname === '/courses' ? 'active' : ''}>課程</Link>
          <Link to="/contact" className={loc.pathname === '/contact' ? 'active' : ''}>聯絡</Link>
        </div>
        <a href={WA} target="_blank" rel="noopener" className="nav-cta">免費試堂</a>
      </div>
    </motion.nav>
  )
}
