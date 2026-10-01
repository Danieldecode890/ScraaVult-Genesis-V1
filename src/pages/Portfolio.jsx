import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiShield,
  FiLock,
  FiKey,
  FiArrowRight,
  FiEye,
  FiBarChart2,
  FiLayers,
} from "react-icons/fi";
import "../styles/Portfolio.css";

function Portfolio() {
  const navigate = useNavigate();

  const [assets] = useState([
    { name: "Bitcoin", symbol: "BTC", balance: 0 },
    { name: "Ethereum", symbol: "ETH", balance: 0 },
    { name: "Tether", symbol: "USDT", balance: 0 },
    { name: "Litecoin", symbol: "LTC", balance: 0 },
  ]);

  const totalBalance = assets.reduce((total, asset) => total + asset.balance, 0);

  const stats = [
    { value: assets.length, label: "Assets" },
    { icon: FiShield, value: "Protected", label: "Status", textValue: true },
    { icon: FiLock, value: "Private", label: "Visibility", textValue: true },
  ];

  return (
    <div className="sv-portfolio-page">
      {/* Header */}
      <div className="sv-portfolio-header">
        <div>
          <span className="sv-eyebrow" style={{ marginBottom: "12px" }}>
            Digital Wealth
          </span>
          <h1 className="sv-portfolio-title">Portfolio</h1>
          <p className="sv-portfolio-subtitle">
            Securely manage your digital wealth.
          </p>
        </div>
        <div className="sv-portfolio-status">
          <FiShield className="sv-portfolio-status-icon" />
          Protected
        </div>
      </div>

      {/* Main card */}
      <div className="sv-portfolio-card">
        <div className="sv-portfolio-summary">
          <p className="sv-portfolio-summary-label">Total Portfolio Value</p>

          <div className="sv-portfolio-balance-locked">
            <FiLock className="sv-balance-lock-icon" />
            <span className="sv-balance-hidden">*********</span>
          </div>

          <p className="sv-verify-text">
            Verify your identity to reveal your portfolio balance.
          </p>

          <button
            className="sv-portfolio-btn sv-verify-btn"
            onClick={() => navigate("/verify-identity")}
          >
            <FiKey />
            Verify Identity
            <FiArrowRight />
          </button>
        </div>

        {/* Stats */}
        <div className="sv-portfolio-stats">
          <div className="sv-stat-card">
            <FiLayers className="sv-stat-icon" />
            <h2>{assets.length}</h2>
            <p>Assets</p>
          </div>
          <div className="sv-stat-card">
            <FiShield className="sv-stat-icon" />
            <h2>Protected</h2>
            <p>Status</p>
          </div>
          <div className="sv-stat-card">
            <FiLock className="sv-stat-icon" />
            <h2>Private</h2>
            <p>Visibility</p>
          </div>
        </div>

        <hr className="sv-portfolio-divider" />

        {/* Assets section */}
        <div className="sv-portfolio-section-header">
          <FiBarChart2 className="sv-portfolio-section-icon" />
          <h2>Your Assets</h2>
        </div>

        <div className="sv-asset-list">
          {assets.map((asset, index) => (
            <div key={index} className="sv-asset-card">
              <div className="sv-asset-top">
                <div className="sv-asset-info">
                  <div className="sv-asset-token-badge">
                    {asset.symbol}
                  </div>
                  <div>
                    <h3 className="sv-asset-name">{asset.name}</h3>
                    <p className="sv-asset-balance">
                      <FiLock className="sv-asset-lock-icon" />
                      Balance: ********
                    </p>
                  </div>
                </div>
                <span className="sv-asset-protected">
                  <FiShield className="sv-asset-shield-icon" />
                  Protected
                </span>
              </div>
              <button
                className="sv-portfolio-btn sv-view-btn"
                onClick={() => navigate("/asset-details")}
              >
                <FiEye />
                View Asset
                <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
