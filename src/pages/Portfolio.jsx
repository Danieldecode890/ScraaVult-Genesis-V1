import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiShield, FiLock, FiKey, FiArrowRight, FiEye } from "react-icons/fi";
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

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <div>
          <h1 className="portfolio-title">Portfolio</h1>
          <p className="portfolio-subtitle">Securely manage your digital wealth.</p>
        </div>
        <div className="portfolio-status">
          <FiShield className="portfolio-status-icon" />
          Protected
        </div>
      </div>

      <div className="portfolio-card">
        <div className="portfolio-summary">
          <p>Total Portfolio Value</p>
          <h1 className="portfolio-balance">*********</h1>
          <p className="verify-text">
            Verify your identity to reveal your portfolio balance.
          </p>
          <button className="verify-btn" onClick={() => navigate("/verify-identity")}>
            <FiKey />
            Verify Identity
          </button>

          <div className="portfolio-stats">
            <div className="stat-card">
              <h2>4</h2>
              <p>Assets</p>
            </div>
            <div className="stat-card">
              <h2>
                <FiShield className="stat-icon" />
                Protected
              </h2>
              <p>Status</p>
            </div>
            <div className="stat-card">
              <h2>
                <FiLock className="stat-icon" />
                Private
              </h2>
              <p>Visibility</p>
            </div>
          </div>
        </div>

        <hr className="portfolio-divider" />

        <h2 className="portfolio-section-title">Your Assets</h2>

        {assets.map((asset, index) => (
          <div key={index} className="asset-card">
            <div className="asset-header">
              <h2>{asset.name}</h2>
              <span className="asset-symbol">{asset.symbol}</span>
            </div>
            <p className="asset-detail">
              <strong>Balance:</strong> ********
            </p>
            <p className="asset-detail">
              <FiShield className="asset-detail-icon" />
              <strong>Status:</strong> Protected
            </p>
            <button className="view-btn" onClick={() => navigate("/asset-details")}>
              <FiEye />
              View Asset
              <FiArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
