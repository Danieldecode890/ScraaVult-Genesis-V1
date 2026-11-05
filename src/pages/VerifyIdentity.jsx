import { useNavigate } from 'react-router-dom'
import {
  FiArrowRight,
  FiKey,
  FiLock,
  FiShield,
  FiUserCheck,
} from 'react-icons/fi'
import '../styles/VerifyIdentity.css'

function VerifyIdentity() {
  const navigate = useNavigate()

  return (
    <div className="sv-verify-identity-page">
      <div className="sv-verify-header">
        <div>
          <span className="sv-eyebrow">Security check</span>
          <h1 className="sv-verify-title">Identity Verification</h1>
          <p className="sv-verify-subtitle">
            Confirm your identity before accessing protected vault features.
          </p>
        </div>
        <div className="sv-verify-status">
          <FiLock />
          Secure Access
        </div>
      </div>

      <div className="sv-verify-card">
        <div className="sv-verify-summary">
          <div>
            <h2>ScraaVult Security Check</h2>
            <p>Complete one verification method to continue securely.</p>
          </div>
          <div className="sv-verify-badge">Level 2 Security</div>
        </div>

        <div className="sv-verify-message">
          <p>
            Your portfolio, balances and sensitive transactions remain protected
            until verification is completed.
          </p>
        </div>

        <button
          className="sv-verify-btn"
          onClick={() => navigate('/security')}
        >
          <FiUserCheck />
          Verify with Biometrics
          <FiArrowRight />
        </button>

        <button
          className="sv-verify-btn sv-verify-btn--secondary"
          onClick={() => navigate('/security')}
        >
          <FiKey />
          Verify with Vault Password
          <FiArrowRight />
        </button>

        <div className="sv-verify-notice">
          <h3><FiShield /> Security Notice</h3>
          <p>Your assets remain hidden until verification is completed.</p>
        </div>
      </div>
    </div>
  )
}

export default VerifyIdentity
