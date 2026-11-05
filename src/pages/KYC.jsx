import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiArrowRight,
  FiCheckCircle,
  FiLock,
  FiShield,
  FiUpload,
} from 'react-icons/fi'
import '../styles/KYC.css'

function KYC() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="sv-kyc-page">
      <div className="sv-kyc-header">
        <div>
          <span className="sv-eyebrow">Compliance</span>
          <h1 className="sv-kyc-title">Identity Verification</h1>
          <p className="sv-kyc-subtitle">
            Verify your identity to unlock secure withdrawals and premium vault protection.
          </p>
        </div>
        <div className="sv-kyc-status">
          <FiLock />
          Secure Verification
        </div>
      </div>

      <p className="sv-kyc-description">
        Complete your KYC verification to unlock secure withdrawals, higher transaction
        limits and premium account protection.
      </p>

      <div className="sv-kyc-card">
        <div className="sv-kyc-summary">
          <div>
            <h2>Verify Your Identity</h2>
            <p>Your information is encrypted and securely processed by ScraaVult.</p>
          </div>
          <div className="sv-kyc-badge">KYC Level 1</div>
        </div>

        <div className="sv-kyc-form">
          <label className="sv-kyc-label">Full Name</label>
          <input type="text" placeholder="Enter your full name" className="sv-kyc-input" />

          <label className="sv-kyc-label">Country</label>
          <select className="sv-kyc-select">
            <option>Nigeria</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Germany</option>
          </select>

          <label className="sv-kyc-label">ID Type</label>
          <select className="sv-kyc-select">
            <option>National ID Card</option>
            <option>International Passport</option>
            <option>Driver's Licence</option>
          </select>

          <label className="sv-kyc-label">ID Number</label>
          <input type="text" placeholder="Enter ID Number" className="sv-kyc-input" />

          <label className="sv-kyc-label">Upload Identity Document</label>
          <div className="sv-kyc-file-upload">
            <FiUpload />
            <input type="file" />
          </div>
        </div>

        <div className="sv-kyc-notice">
          <h3><FiShield /> Security Information</h3>
          <p><FiCheckCircle /> Documents are encrypted before storage.</p>
          <p><FiCheckCircle /> Your information remains completely private.</p>
          <p><FiCheckCircle /> Verification usually takes less than 5 minutes.</p>
          <p><FiCheckCircle /> This process protects your ScraaVult account.</p>
        </div>

        <button
          className="sv-kyc-btn"
          onClick={() => {
            setSubmitted(true)
            setTimeout(() => {
              navigate('/verify-identity')
            }, 2000)
          }}
        >
          Continue
          <FiArrowRight />
        </button>

        {submitted && (
          <div className="sv-kyc-success">
            <FiCheckCircle />
            Documents Submitted Successfully
            <small>Redirecting to identity verification...</small>
          </div>
        )}
      </div>
    </div>
  )
}

export default KYC
