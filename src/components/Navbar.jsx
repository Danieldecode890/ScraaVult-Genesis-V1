import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import './Navbar.css'

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/create-vault', label: 'Create Vault' },
    { to: '/enter-vault', label: 'Enter Vault' },
    { to: '/market', label: 'Market' },
  ]

  return (
    <nav className="sv-navbar">
      <div className="sv-navbar-inner">
        <Link to="/" className="sv-nav-brand" onClick={closeMenu}>
          <svg className="sv-nav-shield" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L6 12v12c0 11 7.5 19.5 18 24 10.5-4.5 18-13 18-24V12L24 4z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 12l-9 4v8c0 5.5 3.75 9.75 9 12 5.25-2.25 9-6.5 9-12v-8l-9-4z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24" cy="22" r="3.5" fill="currentColor" />
            <rect x="22.5" y="24" width="3" height="6" rx="1" fill="currentColor" />
          </svg>
          <span className="sv-nav-name">ScraaVult</span>
        </Link>

        <button
          className="sv-nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`sv-nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={location.pathname === link.to ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <button className="sv-nav-theme" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
