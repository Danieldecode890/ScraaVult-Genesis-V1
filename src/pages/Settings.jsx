import { useNavigate } from 'react-router-dom'
import {
  FiAlertTriangle,
  FiBell,
  FiCheckCircle,
  FiDollarSign,
  FiGlobe,
  FiInfo,
  FiLock,
  FiMoon,
  FiShield,
  FiSmartphone,
  FiSun,
} from 'react-icons/fi'
import '../styles/AccountPages.css'
import '../styles/Settings.css'

function Settings({ theme, toggleTheme }) {
  const navigate = useNavigate()

  return (
    <div className="sv-settings-page">
      <div className="sv-settings-header">
        <div>
          <span className="sv-eyebrow">Account control</span>
          <h1 className="sv-settings-title">Settings</h1>
          <p className="sv-settings-subtitle">
            Personalize and secure your ScraaVult experience.
          </p>
        </div>
        <div className="sv-settings-status">
          <span className="sv-status-dot" />
          Protected
        </div>
      </div>

      <section className="sv-settings-card sv-security-summary">
        <div>
          <div className="sv-card-heading">
            <FiShield className="sv-card-icon" />
            <h2>Security Score</h2>
          </div>
          <p>Your vault security is in excellent condition.</p>
        </div>
        <div className="sv-settings-score">92%</div>
      </section>

      <section className="sv-settings-checks" aria-label="Security checks">
        <div className="sv-settings-check sv-settings-check--success">
          <FiCheckCircle />
          Identity Verified
        </div>
        <div className="sv-settings-check sv-settings-check--success">
          <FiCheckCircle />
          Trusted Device
        </div>
        <div className="sv-settings-check sv-settings-check--success">
          <FiCheckCircle />
          Strong Vault PIN
        </div>
        <div className="sv-settings-check sv-settings-check--warning">
          <FiAlertTriangle />
          Fingerprint Authentication Disabled
        </div>
      </section>

      <section className="sv-settings-tip">
        <FiAlertTriangle className="sv-settings-tip-icon" />
        <div>
          <h2>Recommendation</h2>
          <p>
            Enable fingerprint authentication to increase your Security Score and
            provide faster, more secure access to your vault.
          </p>
        </div>
      </section>

      <section className="sv-settings-card sv-settings-options">
        <button className="sv-settings-btn" onClick={toggleTheme}>
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <button className="sv-settings-btn" onClick={() => navigate('/language')}>
          <FiGlobe />
          Language
        </button>
        <button className="sv-settings-btn" onClick={() => navigate('/currency')}>
          <FiDollarSign />
          Preferred Currency
        </button>
        <button className="sv-settings-btn" onClick={() => navigate('/notifications')}>
          <FiBell />
          Notification Preferences
        </button>
        <button className="sv-settings-btn" onClick={() => navigate('/privacy')}>
          <FiLock />
          Privacy Settings
        </button>
        <button className="sv-settings-btn" onClick={() => navigate('/trusted-devices')}>
          <FiSmartphone />
          Trusted Devices
        </button>
        <button className="sv-settings-btn" onClick={() => navigate('/about')}>
          <FiInfo />
          About ScraaVult
        </button>
      </section>
    </div>
  )
}

export default Settings
