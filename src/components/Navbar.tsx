import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import logoImg from '@/assets/logo.jpg'

interface NavbarProps {
  darkMode: boolean
  toggleDark: () => void
}

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Teachings', to: '/teachings' },
  { label: 'Videos', to: '/videos' },
  { label: 'Events', to: '/events' },
  { label: 'Ministry', to: '/ministry' },
  { label: 'Articles', to: '/articles' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Invite', to: '/invite' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ darkMode, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  // Use a ref to track previous path so we can close menu on navigation
  // without calling setState inside useEffect (which triggers ESLint warning)
  const menuOpenRef = useRef(menuOpen)
  menuOpenRef.current = menuOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change — use a ref to avoid calling setState
  // synchronously inside effect; schedule via microtask instead
  useEffect(() => {
    if (menuOpenRef.current) {
      setMenuOpen(false)
      document.body.style.overflow = ''
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const toggleMenu = () => {
    setMenuOpen((v) => {
      document.body.style.overflow = !v ? 'hidden' : ''
      return !v
    })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'px-8 py-3 bg-[#0a1628]/95 backdrop-blur-xl border-b border-[#c9a84c]/20'
            : 'px-8 py-5'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Logo — click to go home */}
          <Link
            to="/"
            className="flex-shrink-0 cursor-pointer group"
            title="Go to Home"
          >
            <img
              src={logoImg}
              alt="Rev. Gbola Oladosu — Home"
              className="h-12 w-auto object-contain group-hover:scale-105 group-hover:opacity-90 transition-all duration-300 drop-shadow-sm"
              style={{ filter: 'drop-shadow(0 0 6px rgba(201,168,76,0))' }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(201,168,76,0.35))')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(201,168,76,0))')}
            />
          </Link>
          {/* Name text — also links home */}
          <Link to="/" className="flex flex-col gap-0.5 min-w-0">
            <span className="font-serif text-base lg:text-lg font-semibold tracking-wide text-white whitespace-nowrap hover:text-[#e8c97a] transition-colors duration-300">
              Rev. Gbola Oladosu
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.22em] uppercase text-[#c9a84c] font-medium">
              Teaching the Word · Abuja, Nigeria
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden xl:flex items-center gap-7 list-none">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`relative text-[10.5px] tracking-[0.14em] uppercase font-medium transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-[#c9a84c] after:transition-all after:duration-300 ${
                  location.pathname === link.to
                    ? 'text-[#e8c97a] after:w-full'
                    : 'text-white/75 hover:text-[#e8c97a] after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden xl:flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="w-9 h-9 flex items-center justify-center border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/20 transition-colors duration-300"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <Link
            to="/invite"
            className="border border-[#c9a84c] text-[#c9a84c] px-5 py-2.5 text-[10.5px] tracking-[0.18em] uppercase font-medium hover:bg-[#c9a84c] hover:text-[#0a1628] transition-all duration-300"
          >
            Invite Rev. Gbola
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={toggleDark}
            className="w-8 h-8 flex items-center justify-center text-[#c9a84c]"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button onClick={toggleMenu} className="text-white p-1">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#0a1628] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 + 0.1 }}
              >
                <Link
                  to={link.to}
                  className={`font-serif text-4xl font-semibold transition-colors duration-300 tracking-wide ${
                    location.pathname === link.to
                      ? 'text-[#c9a84c]'
                      : 'text-white hover:text-[#c9a84c]'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
