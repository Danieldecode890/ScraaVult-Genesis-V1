import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiKey, FiShield, FiAlertTriangle, FiArrowRight } from "react-icons/fi";
import "../styles/VerifyRecoveryPhrase.css";

function VerifyRecoveryPhrase() {
  const navigate = useNavigate();

  const [word3, setWord3] = useState("");
  const [word7, setWord7] = useState("");
  const [word11, setWord11] = useState("");

  const handleVerify = () => {
    navigate("/dashboard");
  };

  return (
    <div className="sv-verify-page">
      <div className="sv-verify-card">
        <div className="sv-verify-header">
          <div className="sv-verify-header-icon">
            <FiKey />
          </div>
          <span className="sv-eyebrow" style={{ marginBottom: "12px" }}>Secure Access</span>
          <h1>Verify Recovery Phrase</h1>
          <p className="sv-verify-subtitle">
            Confirm the missing recovery words before entering your vault.
          </p>
        </div>

        <div className="sv-verify-score">
          <div className="sv-verify-circle">98%</div>
          <div className="sv-verify-score-info">
            <h3>Security Score</h3>
            <p>Recovery Protection Active</p>
          </div>
        </div>

        <div className="sv-verify-form">
          <div className="sv-form-group">
            <label className="sv-form-label">Recovery Word #3</label>
            <input
              type="text"
              className="sv-form-input"
              placeholder="Enter recovery word"
              value={word3}
              onChange={(e) => setWord3(e.target.value)}
            />
          </div>

          <div className="sv-form-group">
            <label className="sv-form-label">Recovery Word #7</label>
            <input
              type="text"
              className="sv-form-input"
              placeholder="Enter recovery word"
              value={word7}
              onChange={(e) => setWord7(e.target.value)}
            />
          </div>

          <div className="sv-form-group">
            <label className="sv-form-label">Recovery Word #11</label>
            <input
              type="text"
              className="sv-form-input"
              placeholder="Enter recovery word"
              value={word11}
              onChange={(e) => setWord11(e.target.value)}
            />
          </div>
        </div>

        <div className="sv-verify-notice">
          <FiAlertTriangle className="sv-verify-notice-icon" />
          <div>
            <strong>Security Reminder</strong>
            <p>ScraaVault never stores your Recovery Phrase. Never share these words with anyone. This verification protects your Bitcoin forever.</p>
          </div>
        </div>

        <div className="sv-verify-actions">
          <button className="sv-btn-primary" onClick={handleVerify}>
            <FiShield />
            Verify Recovery Phrase
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyRecoveryPhrase;
