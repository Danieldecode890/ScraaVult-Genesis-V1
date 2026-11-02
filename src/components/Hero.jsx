import { Link } from 'react-router-dom'
import { FiLock, FiShield, FiKey } from 'react-icons/fi'
import logo from '../assets/logo.png'
import './Hero.css'

function Hero() {
  return (
    <section className="sv-hero">
      <div className="sv-hero-glow" aria-hidden="true" />

      <div className="sv-hero-content">
        <div className="sv-hero-shield-wrap">
          <img className="sv-hero-shield" src={logo} alt="" />
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
