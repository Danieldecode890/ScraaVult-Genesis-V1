import {
  FiAlertTriangle,
  FiCheckCircle,
  FiCpu,
  FiEye,
  FiKey,
  FiLock,
  FiMonitor,
  FiSettings,
  FiShield,
  FiUserCheck,
} from 'react-icons/fi'
import logo from '../assets/logo.png'
import '../styles/SecurityCenter.css'

function VaultSecurity() {
  return (
    <div className="sv-security-page">
      <div className="sv-security-container">
        <div className="sv-security-header">
          <img src={logo} alt="ScraaVult" className="sv-security-logo" />
          <span className="sv-eyebrow">Protection center</span>
          <h1>Security Center</h1>
          <p>Your vault is protected with enterprise-grade encryption.</p>
        </div>

        <section className="sv-security-score-card">
          <h2>Overall Security</h2>
          <div className="sv-security-score-circle">
            <span>98%</span>
          </div>
          <div className="sv-security-score-bar">
            <div className="sv-security-score-fill" />
          </div>
          <p className="sv-security-score-status">Excellent Protection</p>
        </section>

        <section className="sv-security-section-card">
          <div className="sv-security-card-heading">
            <FiShield className="sv-security-card-icon" />
            <h2>Vault Protection</h2>
          </div>
          <div className="sv-security-item">
            <span>Vault Status</span>
            <span className="sv-security-active">Protected</span>
          </div>
          <div className="sv-security-item">
            <span>Encryption</span>
            <span className="sv-security-active">AES-256 Active</span>
          </div>
          <div className="sv-security-item">
            <span>Identity</span>
            <span className="sv-security-active">Verified</span>
          </div>
          <div className="sv-security-item">
            <span>Recovery</span>
            <span className="sv-security-active">Ready</span>
          </div>
        </section>

        <section className="sv-security-section-card">
          <div className="sv-security-card-heading">
            <FiMonitor className="sv-security-card-icon" />
            <h2>Trusted Device</h2>
          </div>
          <div className="sv-security-item">
            <span>Device</span>
            <span>Windows Laptop</span>
          </div>
          <div className="sv-security-item">
            <span>Last Active</span>
            <span>Today</span>
          </div>
          <div className="sv-security-item">
            <span>Status</span>
            <span className="sv-security-active">Trusted</span>
          </div>
          <button className="sv-security-gold-btn">Manage Devices</button>
        </section>

        <section className="sv-security-section-card">
          <div className="sv-security-card-heading">
            <FiKey className="sv-security-card-icon" />
            <h2>Recovery Kit</h2>
          </div>
          <div className="sv-security-item">
            <span>Recovery Phrase</span>
            <span className="sv-security-active">Backed Up</span>
          </div>
          <div className="sv-security-item">
            <span>Recovery Status</span>
            <span className="sv-security-active">100% Secure</span>
          </div>
          <button className="sv-security-gold-btn">View Recovery Status</button>
        </section>

        <section className="sv-security-section-card">
          <div className="sv-security-card-heading">
            <FiSettings className="sv-security-card-icon" />
            <h2>Security Controls</h2>
          </div>
          <button className="sv-security-gold-btn">Change Vault PIN</button>
          <button className="sv-security-gold-btn">Enable Fingerprint</button>
          <button className="sv-security-gold-btn">Enable Face ID</button>
          <button className="sv-security-danger-btn">
            <FiAlertTriangle />
            Emergency Lock
          </button>
        </section>

        <section className="sv-security-section-card">
          <div className="sv-security-card-heading">
            <FiEye className="sv-security-card-icon" />
            <h2>Recent Security Activity</h2>
          </div>
          <div className="sv-security-activity-list">
            <div className="sv-security-activity-item">
              <FiCheckCircle className="sv-security-activity-icon sv-security-activity-icon--success" />
              Vault Created Successfully
            </div>
            <div className="sv-security-activity-item">
              <FiKey className="sv-security-activity-icon" />
              Password Verified
            </div>
            <div className="sv-security-activity-item">
              <FiMonitor className="sv-security-activity-icon" />
              Trusted Device Connected
            </div>
            <div className="sv-security-activity-item">
              <FiShield className="sv-security-activity-icon sv-security-activity-icon--success" />
              No Suspicious Activity Detected
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default VaultSecurity
