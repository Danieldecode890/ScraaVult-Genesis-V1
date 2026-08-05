import "./../styles/SecurityCenter.css";
import logo from "../assets/logo.png";

function VaultSecurity() {
  return (
    <div className="security-page">

      <div className="security-container">

        <div className="security-header">

          <img
            src={logo}
            alt="ScraaVult"
            className="security-logo"
          />

          <h1>Security Center</h1>

          <p>
            Your vault is protected with enterprise-grade encryption.
          </p>

        </div>

        <div className="security-score">

          <h2>Overall Security</h2>

          <div className="score-circle">

            <span>98%</span>

          </div>

          <div className="score-bar">

            <div className="score-fill"></div>

          </div>

          <p className="score-status">

            Excellent Protection

          </p>

        </div>

        <div className="security-card">

          <h2>🛡 Vault Protection</h2>

          <div className="security-item">
            <span>Vault Status</span>
            <span className="active">Protected</span>
          </div>

          <div className="security-item">
            <span>Encryption</span>
            <span className="active">AES-256 Active</span>
          </div>

          <div className="security-item">
            <span>Identity</span>
            <span className="active">Verified</span>
          </div>

          <div className="security-item">
            <span>Recovery</span>
            <span className="active">Ready</span>
          </div>

        </div>
        <div className="security-card">

          <h2>💻 Trusted Device</h2>

          <div className="security-item">
            <span>Device</span>
            <span>Windows Laptop</span>
          </div>

          <div className="security-item">
            <span>Last Active</span>
            <span>Today</span>
          </div>

          <div className="security-item">
            <span>Status</span>
            <span className="active">Trusted</span>
          </div>

          <button className="gold-btn">
            Manage Devices
          </button>

        </div>

        <div className="security-card">

          <h2>🔑 Recovery Kit</h2>

          <div className="security-item">
            <span>Recovery Phrase</span>
            <span className="active">Backed Up</span>
          </div>

          <div className="security-item">
            <span>Recovery Status</span>
            <span className="active">100% Secure</span>
          </div>

          <button className="gold-btn">
            View Recovery Status
          </button>

        </div>

        <div className="security-card">

          <h2>⚙ Security Controls</h2>

          <button className="gold-btn">
            Change Vault PIN
          </button>

          <button className="gold-btn">
            Enable Fingerprint
          </button>

          <button className="gold-btn">
            Enable Face ID
          </button>

          <button className="danger-btn">
            Emergency Lock
          </button>

        </div>

        <div className="security-card">

          <h2>📜 Recent Security Activity</h2>

          <p>✅ Vault Created Successfully</p>

          <p>🔑 Password Verified</p>

          <p>💻 Trusted Device Connected</p>

          <p>🟢 No Suspicious Activity Detected</p>

        </div>

      </div>

    </div>

  );
}

export default VaultSecurity;