import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiLock,
  FiShield,
  FiAlertTriangle,
  FiChevronDown,
  FiClock,
  FiDollarSign,
  FiUserCheck,
  FiBriefcase,
} from "react-icons/fi";
import "../styles/Withdraw.css";

function Withdraw() {
  const navigate = useNavigate();

  const summaryItems = [
    { icon: FiDollarSign, label: "Network Fee", value: "Calculated automatically" },
    { icon: FiClock, label: "Estimated Arrival", value: "10–30 Minutes" },
    { icon: FiUserCheck, label: "Security", value: "Identity Verification Required" },
  ];

  return (
    <div className="sv-withdraw-page">
      <button
        className="sv-withdraw-back-btn"
        onClick={() => navigate("/dashboard")}
      >
        <FiArrowLeft />
        Back to Dashboard
      </button>

      <div className="sv-withdraw-header">
        <div>
          <span className="sv-eyebrow" style={{ marginBottom: "12px" }}>
            Send Funds
          </span>
          <h1 className="sv-withdraw-title">Withdraw Crypto</h1>
          <p className="sv-withdraw-subtitle">
            Transfer your digital assets securely from your ScraaVault.
          </p>
        </div>
        <div className="sv-withdraw-status">
          <FiLock className="sv-withdraw-status-icon" />
          Protected
        </div>
      </div>

      <div className="sv-withdraw-card">
        <div className="sv-withdraw-summary">
          <div>
            <h2>Secure Withdrawal</h2>
            <p>Every withdrawal passes through multiple security checks.</p>
          </div>
          <div className="sv-verify-badge">KYC Required</div>
        </div>

        <div className="sv-withdraw-kyc-notice">
          <FiUserCheck className="sv-withdraw-kyc-icon" />
          <p>
            Withdrawals require identity verification before any transaction can
            be completed.
          </p>
        </div>

        <hr className="sv-withdraw-divider" />

        <div className="sv-withdraw-form-group">
          <label className="sv-withdraw-label">Select Asset</label>
          <div className="sv-withdraw-select-wrapper">
            <select className="sv-withdraw-select">
              <option>Bitcoin (BTC)</option>
              <option>Ethereum (ETH)</option>
              <option>Tether (USDT)</option>
              <option>Litecoin (LTC)</option>
            </select>
            <FiChevronDown className="sv-withdraw-select-arrow" />
          </div>
        </div>

        <div className="sv-withdraw-form-group">
          <label className="sv-withdraw-label">Recipient Wallet Address</label>
          <input
            type="text"
            className="sv-withdraw-input"
            placeholder="Enter wallet address"
          />
        </div>

        <div className="sv-withdraw-form-group">
          <label className="sv-withdraw-label">Withdrawal Amount</label>
          <input
            type="number"
            className="sv-withdraw-input"
            placeholder="{0.00000000000 BTC}    {MAX}"
          />
        </div>

        <div className="sv-withdraw-balance-card">
          <FiBriefcase className="sv-withdraw-balance-icon" />
          <div>
            <p className="sv-withdraw-balance-label">Available Balance</p>
            <p className="sv-withdraw-balance-value">******* BTC</p>
          </div>
        </div>

        <hr className="sv-withdraw-divider" />

        <h2 className="sv-withdraw-section-title">Transaction Summary</h2>

        <div className="sv-withdraw-summary-grid">
          {summaryItems.map((item, i) => (
            <div key={i} className="sv-withdraw-summary-item">
              <item.icon className="sv-withdraw-summary-icon" />
              <div>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="sv-withdraw-notice">
          <div className="sv-withdraw-notice-header">
            <FiAlertTriangle className="sv-withdraw-notice-icon" />
            <h3>ScraaVault Security Notice</h3>
          </div>
          <p>Always verify the recipient address before sending.</p>
          <p>Blockchain transactions cannot be reversed once confirmed.</p>
          <p>
            ScraaVault protects your assets but cannot recover funds sent to the
            wrong address.
          </p>
        </div>

        <button
          className="sv-withdraw-btn"
          onClick={() => navigate("/kyc")}
        >
          <FiUserCheck />
          Complete identity verification (KYC)
        </button>
      </div>
    </div>
  );
}

export default Withdraw;
