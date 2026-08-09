import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiLock, FiKey, FiArrowRight, FiShield } from 'react-icons/fi'
import './VaultPages.css'

function EnterVault() {
  const [vaultId, setVaultId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [entered, setEntered] = useState(false)

  const handleEnter = () => {
    setError('')
    if (!vaultId.trim()) {
      setError('Please enter your vault ID.')
      return
    }
    if (!password) {
      setError('Please enter your password.')
      return
    }
    setEntered(true)
  }

  if (entered) {
    return (
      <div className="sv-vault-page">
        <div className="sv-vault-card sv-vault-success">
          <div className="sv-vault-success-icon">
            <FiShield />
          </div>
          <h1>Vault Unlocked</h1>
          <p>
            Welcome back. Your vault <strong>{vaultId}</strong> is now accessible.
          </p>
          <div className="sv-vault-dashboard">
            <div className="sv-vault-stat">
              <span className="sv-vault-stat-label">Balance</span>
              <span className="sv-vault-stat-value">— BTC</span>
            </div>
            <div className="sv-vault-stat">
              <span className="sv-vault-stat-label">Status</span>
              <span className="sv-vault-stat-value sv-pos">Secure</span>
            </div>
          </div>
          <div className="sv-vault-actions">
            <Link to="/" className="sv-btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="sv-vault-page">
      <div className="sv-vault-card sv-vault-enter">
        <div className="sv-vault-header">
          <div className="sv-vault-header-icon">
            <FiLock />
          </div>
          <span className="sv-eyebrow" style={{ marginBottom: '12px' }}>Secure Access</span>
          <h1>Enter Your Vault</h1>
          <p className="sv-vault-subtitle">
            Access your Bitcoin with privacy and confidence.
          </p>
        </div>

        <div className="sv-vault-form">
          <div className="sv-form-group">
            <label className="sv-form-label">Vault ID</label>
            <input
              type="text"
              className="sv-form-input"
              placeholder="Enter your vault identifier"
              value={vaultId}
              onChange={(e) => setVaultId(e.target.value)}
              autoFocus
            />
          </div>

          <div className="sv-form-group">
            <label className="sv-form-label">Password</label>
            <input
              type="password"
              className="sv-form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
            />
          </div>

          <div className="sv-vault-notice">
            <FiKey className="sv-vault-notice-icon" />
            <span>Your credentials are processed locally. Nothing leaves your device.</span>
          </div>

          {error && <p className="sv-form-error">{error}</p>}

          <div className="sv-vault-nav">
            <button className="sv-btn-primary" onClick={handleEnter}>
              <FiLock />
              Unlock Vault
              <FiArrowRight />
            </button>
          </div>

          <div className="sv-vault-alt">
            <span>Don't have a vault?</span>
            <Link to="/create-vault">Create one</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnterVault
