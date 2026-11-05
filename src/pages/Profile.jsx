import { FiCheckCircle, FiEdit3, FiKey, FiUser } from 'react-icons/fi'
import '../styles/AccountPages.css'
import '../styles/Profile.css'

function Profile() {
  return (
    <div className="sv-profile-page">
      <div className="sv-profile-header">
        <div className="sv-profile-avatar"><FiUser /></div>
        <div>
          <span className="sv-eyebrow">Account identity</span>
          <h1 className="sv-profile-title">My Profile</h1>
          <p className="sv-profile-subtitle">Manage your ScraaVult account details.</p>
        </div>
      </div>

      <section className="sv-profile-card">
        <div className="sv-profile-details">
          <h2>Daniel</h2>
          <p><strong>Vault ID:</strong> SV-100001</p>
          <p><strong>Email:</strong> user@example.com</p>
          <p><strong>Member Since:</strong> July 2026</p>
          <p className="sv-profile-verification"><FiCheckCircle /> Verified</p>
        </div>

        <div className="sv-profile-divider" />

        <div className="sv-profile-actions">
          <button className="sv-profile-btn">
            <FiEdit3 />
            Edit Profile
          </button>
          <button className="sv-profile-btn sv-profile-btn--secondary">
            <FiKey />
            Change Password
          </button>
        </div>
      </section>
    </div>
  )
}

export default Profile
