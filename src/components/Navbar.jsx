import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import logo from '../assets/logo.png'
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
          <img className="sv-nav-shield" src={logo} alt="" />
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
