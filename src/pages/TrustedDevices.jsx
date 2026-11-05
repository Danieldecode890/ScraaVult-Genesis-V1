import {
  FiCheckCircle,
  FiMonitor,
  FiPlus,
  FiSmartphone,
  FiTrash2,
} from 'react-icons/fi'
import '../styles/TrustedDevices.css'

function TrustedDevices() {
  return (
    <div className="sv-trusted-devices-page">
      <div className="sv-trusted-devices-header">
        <div>
          <span className="sv-eyebrow">Device management</span>
          <h1>Trusted Devices</h1>
          <p>Manage the devices that are authorised to access your ScraaVult account.</p>
        </div>
      </div>

      <div className="sv-trusted-devices-card">
        <div className="sv-trusted-devices-section-heading">
          <FiMonitor className="sv-trusted-devices-section-icon" />
          <h2>Devices Linked to Your Vault</h2>
        </div>

        <div className="sv-trusted-device-card">
          <div className="sv-trusted-device-top">
            <div className="sv-trusted-device-icon"><FiMonitor /></div>
            <div>
              <h3>HP EliteBook G5</h3>
              <p className="sv-trusted-device-status sv-trusted-device-status--current">
                <FiCheckCircle /> Current Device
              </p>
            </div>
          </div>
          <div className="sv-trusted-device-details">
            <span>Location: Nigeria</span>
            <span>Last Active: Just now</span>
          </div>
        </div>

        <div className="sv-trusted-device-card">
          <div className="sv-trusted-device-top">
            <div className="sv-trusted-device-icon"><FiSmartphone /></div>
            <div>
              <h3>Samsung Galaxy</h3>
              <p className="sv-trusted-device-status">
                <FiCheckCircle /> Trusted
              </p>
            </div>
          </div>
          <div className="sv-trusted-device-details">
            <span>Location: Nigeria</span>
            <span>Last Active: Today</span>
          </div>
        </div>

        <div className="sv-trusted-devices-actions">
          <button className="sv-trusted-devices-btn">
            <FiPlus />
            Add New Trusted Device
          </button>
          <button className="sv-trusted-devices-btn sv-trusted-devices-btn--danger">
            <FiTrash2 />
            Remove Selected Device
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrustedDevices
