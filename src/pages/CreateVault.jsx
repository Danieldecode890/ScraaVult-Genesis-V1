import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShield, FiLock, FiCheck, FiArrowRight, FiInfo } from 'react-icons/fi'
import './VaultPages.css'

function CreateVault() {
  const [step, setStep] = useState(1)
  const [vaultName, setVaultName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [error, setError] = useState('')
  const [created, setCreated] = useState(false)

  const handleNext = () => {
    setError('')
    if (step === 1 && !vaultName.trim()) {
      setError('Please enter a vault name.')
      return
    }
    if (step === 2) {
      if (password.length < 8) {
        setError('Password must be at least 8 characters.')
        return
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.')
        return
      }
    }
    if (step === 3 && !accepted) {
      setError('Please accept the security terms to continue.')
      return
    }
    setStep((s) => Math.min(s + 1, 4))
  }

  const handleBack = () => {
    setError('')
    setStep((s) => Math.max(s - 1, 1))
  }

  const handleCreate = () => {
    setCreated(true)
  }

  if (created) {
    return (
      <div className="sv-vault-page">
        <div className="sv-vault-card sv-vault-success">
          <div className="sv-vault-success-icon">
            <FiCheck />
          </div>
          <h1>Vault Created</h1>
          <p>
            Your vault <strong>{vaultName}</strong> has been created. Store your
            recovery phrase securely — it is the only way to restore access.
          </p>
          <div className="sv-vault-warning">
            <FiInfo className="sv-vault-warning-icon" />
            <span>Never share your recovery phrase with anyone.</span>
          </div>
          <div className="sv-vault-actions">
            <Link to="/enter-vault" className="sv-btn-primary">
              Enter Vault
              <FiArrowRight />
            </Link>
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
      <div className="sv-vault-card">
        <div className="sv-vault-header">
          <div className="sv-vault-header-icon">
            <FiShield />
          </div>
          <span className="sv-eyebrow" style={{ marginBottom: '12px' }}>Secure Setup</span>
          <h1>Create Your Vault</h1>
          <p className="sv-vault-subtitle">
            Your keys. Your coins. Your rules.
          </p>
        </div>

        <div className="sv-vault-steps">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`sv-vault-step-dot ${step >= s ? 'active' : ''} ${step > s ? 'done' : ''}`}
            >
              {step > s ? <FiCheck /> : s}
            </div>
          ))}
        </div>

        <div className="sv-vault-form">
          {step === 1 && (
            <div className="sv-form-group">
              <label className="sv-form-label">Vault Name</label>
              <input
                type="text"
                className="sv-form-input"
                placeholder="e.g. My Bitcoin Vault"
                value={vaultName}
                onChange={(e) => setVaultName(e.target.value)}
                autoFocus
              />
              <p className="sv-form-hint">Give your vault a name you'll recognize.</p>
            </div>
          )}

          {step === 2 && (
            <>
              <div className="sv-form-group">
                <label className="sv-form-label">Password</label>
                <input
                  type="password"
                  className="sv-form-input"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="sv-form-group">
                <label className="sv-form-label">Confirm Password</label>
                <input
                  type="password"
                  className="sv-form-input"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="sv-vault-notice">
                <FiLock className="sv-vault-notice-icon" />
                <span>Your password encrypts your vault locally. We never see it.</span>
              </div>
            </>
          )}

          {step === 3 && (
            <div className="sv-form-group">
              <div className="sv-vault-terms">
                <label className="sv-vault-check-row">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  <span>
                    I understand that I am solely responsible for my password
                    and recovery phrase. If I lose them, my Bitcoin cannot be
                    recovered.
                  </span>
                </label>
              </div>
            </div>
          )}

          {error && <p className="sv-form-error">{error}</p>}

          <div className="sv-vault-nav">
            {step > 1 && (
              <button className="sv-btn-secondary sv-btn-sm" onClick={handleBack}>
                Back
              </button>
            )}
            {step < 3 ? (
              <button className="sv-btn-primary sv-btn-sm" onClick={handleNext}>
                Continue
                <FiArrowRight />
              </button>
            ) : (
              <button className="sv-btn-primary sv-btn-sm" onClick={handleCreate}>
                <FiShield />
                Create Vault
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateVault
