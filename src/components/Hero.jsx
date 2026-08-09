import { Link } from 'react-router-dom'
import { FiLock, FiShield, FiKey } from 'react-icons/fi'
import './Hero.css'

function Hero() {
  return (
    <section className="sv-hero">
      <div className="sv-hero-glow" aria-hidden="true" />

      <div className="sv-hero-content">
        <div className="sv-hero-shield-wrap">
          <svg className="sv-hero-shield" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L6 12v12c0 11 7.5 19.5 18 24 10.5-4.5 18-13 18-24V12L24 4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M24 12l-9 4v8c0 5.5 3.75 9.75 9 12 5.25-2.25 9-6.5 9-12v-8l-9-4z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="24" cy="22" r="3" fill="currentColor" />
            <rect x="22.5" y="24" width="3" height="6" rx="1" fill="currentColor" />
          </svg>
        </div>

        <span className="sv-hero-eyebrow">Privacy · Security · Confidence</span>

        <h1 className="sv-hero-title">ScraaVult</h1>

        <h2 className="sv-hero-headline">
          Your Bitcoin.
          <br />
          Your keys.
          <br />
          Your vault.
        </h2>

        <p className="sv-hero-text">
          Protect your Bitcoin with institutional-grade privacy, security, and
          complete ownership. Built for people who believe their keys should
          never leave their hands.
        </p>

        <div className="sv-hero-cta">
          <Link to="/create-vault" className="sv-btn-primary">
            Create Vault
          </Link>
          <Link to="/enter-vault" className="sv-btn-secondary">
            Enter Vault
          </Link>
        </div>

        <div className="sv-hero-trust">
          <div className="sv-trust-item">
            <FiLock className="sv-trust-icon" />
            <span>Self-Custody</span>
          </div>
          <div className="sv-trust-sep" />
          <div className="sv-trust-item">
            <FiShield className="sv-trust-icon" />
            <span>Private Keys</span>
          </div>
          <div className="sv-trust-sep" />
          <div className="sv-trust-item">
            <FiKey className="sv-trust-icon" />
            <span>Bitcoin Only</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
