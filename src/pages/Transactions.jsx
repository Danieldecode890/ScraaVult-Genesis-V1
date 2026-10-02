import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowDown,
  FiArrowUp,
  FiLock,
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import "../styles/TransactionHistory.css";

function Transactions() {
  const navigate = useNavigate();

  return (
    <div className="sv-tx-page">
      <button
        className="sv-tx-back-btn"
        onClick={() => navigate("/dashboard")}
      >
        <FiArrowLeft />
        Back to Dashboard
      </button>

      <div className="sv-tx-header">
        <div>
          <span className="sv-eyebrow" style={{ marginBottom: "12px" }}>
            Activity Log
          </span>
          <h1 className="sv-tx-title">Transaction History</h1>
          <p className="sv-tx-subtitle">
            View every transaction completed through your ScraaVault.
          </p>
        </div>
        <div className="sv-tx-status">
          <FiLock className="sv-tx-status-icon" />
          Encrypted
        </div>
      </div>

      <div className="sv-tx-card">
        <div className="sv-tx-summary">
          <div>
            <h2>Recent Activity</h2>
            <p>Every deposit, withdrawal and exchange is securely recorded.</p>
          </div>
          <div className="sv-tx-badge">
            <FiBookOpen className="sv-tx-badge-icon" />
            Live Ledger
          </div>
        </div>

        {/* Transaction 1 — Deposit (Completed) */}
        <div className="sv-tx-item sv-tx-item--completed">
          <div className="sv-tx-item-icon sv-tx-item-icon--in">
            <FiArrowDown />
          </div>
          <div className="sv-tx-item-body">
            <div className="sv-tx-item-top">
              <h3>Deposit</h3>
              <span className="sv-tx-status-pill sv-tx-status-pill--completed">
                <FiCheckCircle />
                Completed
              </span>
            </div>
            <div className="sv-tx-item-details">
              <div className="sv-tx-detail">
                <span className="sv-tx-detail-label">Asset</span>
                <span className="sv-tx-detail-value">Bitcoin (BTC)</span>
              </div>
              <div className="sv-tx-detail">
                <span className="sv-tx-detail-label">Amount</span>
                <span className="sv-tx-detail-value sv-tx-amount--in">+0.005 BTC</span>
              </div>
              <div className="sv-tx-detail">
                <span className="sv-tx-detail-label">Date</span>
                <span className="sv-tx-detail-value">22 July 2026</span>
              </div>
              <div className="sv-tx-detail">
                <span className="sv-tx-detail-label">TXID</span>
                <span className="sv-tx-detail-value sv-tx-txid">8f7a2c9d************</span>
              </div>
            </div>
            <button
              className="sv-tx-view-btn"
              onClick={() => navigate("/transaction-details")}
            >
              <FiLock />
              View Secure Details
              <FiArrowRight />
            </button>
          </div>
        </div>

        <hr className="sv-tx-divider" />

        {/* Transaction 2 — Withdrawal (Pending) */}
        <div className="sv-tx-item sv-tx-item--pending">
          <div className="sv-tx-item-icon sv-tx-item-icon--out">
            <FiArrowUp />
          </div>
          <div className="sv-tx-item-body">
            <div className="sv-tx-item-top">
              <h3>Withdrawal</h3>
              <span className="sv-tx-status-pill sv-tx-status-pill--pending">
                <FiClock />
                Pending
              </span>
            </div>
            <div className="sv-tx-item-details">
              <div className="sv-tx-detail">
                <span className="sv-tx-detail-label">Asset</span>
                <span className="sv-tx-detail-value">USDT</span>
              </div>
              <div className="sv-tx-detail">
                <span className="sv-tx-detail-label">Amount</span>
                <span className="sv-tx-detail-value sv-tx-amount--out">-250 USDT</span>
              </div>
              <div className="sv-tx-detail">
                <span className="sv-tx-detail-label">Date</span>
                <span className="sv-tx-detail-value">21 July 2026</span>
              </div>
              <div className="sv-tx-detail">
                <span className="sv-tx-detail-label">TXID</span>
                <span className="sv-tx-detail-value sv-tx-txid">a4d92b************</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
