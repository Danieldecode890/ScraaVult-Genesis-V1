import { FiCheck, FiInfo, FiLock, FiShield, FiZap } from 'react-icons/fi'
import '../styles/Language.css'

function About() {
  return (
    <div className="sv-about-page">
      <div className="sv-about-header">
        <span className="sv-eyebrow">Product information</span>
        <h1>About ScraaVult</h1>
        <p>Genesis Version 1.0</p>
      </div>

      <div className="sv-about-card">
        <p className="sv-about-intro">
          ScraaVult is a privacy-focused digital asset vault designed to protect
          cryptocurrency with security, simplicity, and trust.
        </p>

        <div className="sv-about-notice">
          <h3><FiShield /> Our Mission</h3>
          <p>
            To provide a secure environment where users can manage their digital
            assets with confidence.
          </p>
        </div>

        <div className="sv-about-notice">
          <h3><FiLock /> Security First</h3>
          <p>
            Every feature in ScraaVult is built around protecting user privacy and
            keeping digital assets secure.
          </p>
        </div>

        <div className="sv-about-notice">
          <h3><FiZap /> Genesis V1 Features</h3>
          <p><FiCheck /> Portfolio Dashboard</p>
          <p><FiCheck /> Asset Management</p>
          <p><FiCheck /> Deposit & Withdraw</p>
          <p><FiCheck /> Identity Verification (KYC)</p>
          <p><FiCheck /> Language & Currency</p>
          <p><FiCheck /> Notifications</p>
          <p><FiCheck /> Privacy Settings</p>
          <p><FiCheck /> Trusted Devices</p>
        </div>

        <div className="sv-about-notice">
          <h3><FiInfo /> ScraaVult</h3>
          <p>Version 1.0 - Genesis</p>
          <p>Built with React as the foundation for the future ScraaVult ecosystem.</p>
        </div>
      </div>
    </div>
  )
}

export default About
