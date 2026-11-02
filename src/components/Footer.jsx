import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="sv-footer">
      <div className="sv-footer-inner">
        <div className="sv-footer-brand">
          <div className="sv-footer-logo-row">
            <img className="sv-footer-shield" src={logo} alt="" />
            <h2>ScraaVult</h2>
          </div>
          <p className="sv-footer-motto">Privacy · Security · Confidence</p>
          <p className="sv-footer-desc">
            Your Bitcoin. Your keys. Your vault. Built for people who believe
            their Bitcoin should always remain under their control.
          </p>
        </div>

        <div className="sv-footer-links">
          <div className="sv-footer-col">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/create-vault">Create Vault</Link>
            <Link to="/enter-vault">Enter Vault</Link>
          </div>
          <div className="sv-footer-col">
            <h3>Resources</h3>
            <Link to="/market">Live Market</Link>
            <Link to="/news">Bitcoin News</Link>
          </div>
        </div>
      </div>

      <div className="sv-footer-bottom">
        <span>© 2026 ScraaVult. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
