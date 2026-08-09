import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="sv-footer">
      <div className="sv-footer-inner">
        <div className="sv-footer-brand">
          <div className="sv-footer-logo-row">
            <svg className="sv-footer-shield" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4L6 12v12c0 11 7.5 19.5 18 24 10.5-4.5 18-13 18-24V12L24 4z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M24 12l-9 4v8c0 5.5 3.75 9.75 9 12 5.25-2.25 9-6.5 9-12v-8l-9-4z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="24" cy="22" r="3.5" fill="currentColor" />
              <rect x="22.5" y="24" width="3" height="6" rx="1" fill="currentColor" />
            </svg>
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
