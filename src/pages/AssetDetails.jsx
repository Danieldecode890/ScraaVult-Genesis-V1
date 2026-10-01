import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowDown,
  FiArrowUp,
  FiRepeat,
  FiFileText,
  FiShield,
  FiLock,
} from "react-icons/fi";
import "../styles/AssetDetails.css";

function AssetDetails() {
  const navigate = useNavigate();

  const actions = [
    { icon: FiArrowDown, label: "Deposit", route: "/deposit" },
    { icon: FiArrowUp, label: "Withdraw", route: "/withdraw" },
    { icon: FiRepeat, label: "Exchange", route: "/exchange" },
    { icon: FiFileText, label: "Transactions", route: "/transactions" },
  ];

  return (
    <div className="sv-asset-details-page">
      <button
        className="sv-asset-back-btn"
        onClick={() => navigate("/portfolio")}
      >
        <FiArrowLeft />
        Back to Portfolio
      </button>

      <div className="sv-asset-details-card">
        <div className="sv-asset-details-header">
          <div className="sv-asset-details-token">BTC</div>
          <h1>Bitcoin</h1>
          <span className="sv-asset-details-symbol">Bitcoin (BTC)</span>
        </div>

        <div className="sv-asset-details-balance">
          <p className="sv-asset-details-label">Balance</p>
          <div className="sv-asset-details-value">
            <FiLock className="sv-asset-details-lock" />
            <span>********</span>
          </div>
        </div>

        <div className="sv-asset-details-status">
          <FiShield className="sv-asset-details-shield" />
          <span>Protected</span>
        </div>

        <hr className="sv-asset-details-divider" />

        <h2 className="sv-asset-details-actions-title">Actions</h2>

        <div className="sv-asset-details-actions">
          {actions.map((action, i) => (
            <button
              key={i}
              className="sv-asset-action-btn"
              onClick={() => navigate(action.route)}
            >
              <action.icon className="sv-asset-action-icon" />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssetDetails;
