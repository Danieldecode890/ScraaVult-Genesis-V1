import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiCheckCircle, FiShield, FiLock, FiAlertTriangle, FiKey, FiArrowRight } from "react-icons/fi";
import "../styles/VaultSuccess.css";

function VaultSuccess() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current++;
      setScore(current);
      if (current >= 70) {
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const checklist = [
    { icon: FiCheckCircle, label: "Vault Created", status: "complete" },
    { icon: FiLock, label: "Password Protected", status: "complete" },
    { icon: FiKey, label: "Recovery Phrase Missing", status: "warning" },
    { icon: FiShield, label: "Two-Factor Authentication", status: "pending" },
    { icon: FiShield, label: "Email Verification", status: "pending" },
  ];

  return (
    <div className="sv-vault-success-page">
      <div className="sv-vault-success-card">
        <div className="sv-vault-success-badge">
          <FiCheckCircle />
        </div>

        <span className="sv-eyebrow">Vault Created</span>

        <h1>Vault Created Successfully</h1>

        <p className="sv-vault-success-desc">
          Your Bitcoin Vault has been created and is ready to use.
        </p>

        <div className="sv-security-score">
          <h2>Current Security</h2>

          <div className="sv-score-circle">
            <span>{score}%</span>
          </div>

          <h3>Good Security</h3>

          <p>Your vault is not fully protected yet.</p>
        </div>

        <div className="sv-security-checklist">
          {checklist.map((item, i) => (
            <div key={i} className={`sv-checklist-item sv-checklist-${item.status}`}>
              <item.icon className="sv-checklist-icon" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="sv-warning-card">
          <div className="sv-warning-card-header">
            <FiAlertTriangle className="sv-warning-card-icon" />
            <h2>Important Security Notice</h2>
          </div>
          <p>Your Recovery Phrase has not been saved.</p>
          <p>Without it, ScraaVault cannot recover your Bitcoin if your device is lost.</p>
        </div>

        <div className="sv-vault-success-actions">
          <button
            className="sv-btn-primary"
            onClick={() => navigate("/recovery-phrase")}
          >
            <FiLock />
            Secure My Vault Now
            <FiArrowRight />
          </button>

          <button
            className="sv-btn-secondary"
            onClick={() => navigate("/enter-vault")}
          >
            Do This Later
          </button>
        </div>
      </div>
    </div>
  );
}

export default VaultSuccess;
