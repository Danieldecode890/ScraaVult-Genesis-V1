import { useState } from 'react'
import { FiCheck, FiLock, FiShield } from 'react-icons/fi'
import '../styles/Privacy.css'

function Privacy() {
  const [hideBalance, setHideBalance] = useState(true)
  const [privateMode, setPrivateMode] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  return (
    <div className="sv-privacy-page">
      <div className="sv-privacy-header">
        <div>
          <span className="sv-eyebrow">Account control</span>
          <h1>Privacy Settings</h1>
          <p>Manage how your account information is displayed and protected.</p>
        </div>
      </div>

      <div className="sv-privacy-card">
        <div className="sv-privacy-section-heading">
          <FiShield className="sv-privacy-section-icon" />
          <h2>Your Privacy Controls</h2>
        </div>

        <div className="sv-privacy-row">
          <label>Hide Portfolio Balance</label>
          <input
            type="checkbox"
            checked={hideBalance}
            onChange={() => setHideBalance(!hideBalance)}
          />
        </div>

        <div className="sv-privacy-row">
          <label>Enable Private Mode</label>
          <input
            type="checkbox"
            checked={privateMode}
            onChange={() => setPrivateMode(!privateMode)}
          />
        </div>

        <div className="sv-privacy-row">
          <label>Share Anonymous Analytics</label>
          <input
            type="checkbox"
            checked={analytics}
            onChange={() => setAnalytics(!analytics)}
          />
        </div>

        <div className="sv-privacy-notice">
          <FiLock />
          <div>
            <h3>Privacy Status</h3>
            <p>Your data remains encrypted and protected inside ScraaVult.</p>
          </div>
        </div>

        <button className="sv-privacy-btn">
          <FiCheck />
          Save Privacy Settings
        </button>
      </div>
    </div>
  )
}

export default Privacy
