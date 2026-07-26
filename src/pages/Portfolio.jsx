import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Portfolio() {
    
const navigate = useNavigate();

const [assets] = useState([
  { name: "Bitcoin", symbol: "BTC", balance: 0 },
  { name: "Ethereum", symbol: "ETH", balance: 0 },
  { name: "Tether", symbol: "USDT", balance: 0 },
  { name: "Litecoin", symbol: "LTC", balance: 0 },
]);
    const totalBalance = assets.reduce(
        (total, asset)=> total + asset.balance,0
    );
  return (
    <div className="page">
      <h1>💼 Portfolio</h1>
      <p>Your digital assets at a glance.</p>
      <div className="gold-line"></div>

      <div className="portfolio-card">
     <div className="portfolio-summary">

    <p>Total Portfolio Value</p>
   
       <h2>*********</h2> 
    
    <h3>Verify identity to View Balance</h3>

    <button className="verify-btn">
        🔐 Verify Identity 
    </button>

    <div className="portfolio-stats">
    <div className="stat-card">
  <h2>4</h2>
  <p>Assets</p>
    </div>

    <div className="stat-card">
  <h2>🛡 Protected</h2>
  <p>Status</p>
    </div>

    <div className="stat-card">
  <h2>🔒 Private</h2>
  <p>Visibility</p>
    </div>

    </div>

    </div>
<hr />

    <h2>Your Assets</h2>

    {assets.map((asset, index) => (
 <div key={index} className="asset-card">

  <h2>{asset.name}</h2>

  <p>
    <strong>Symbol:</strong> {asset.symbol}
  </p>

  <p>
    <strong>Balance:</strong> ********
  </p>

  <p>
    <strong>Status:</strong> 🛡️ Protected
  </p>

  <button
    className="view-btn"
    onClick={() => navigate("asset-details")}
  >
    View Asset →
  </button>

  </div>
))}
    </div>
    </div>
  );
}

export default Portfolio;