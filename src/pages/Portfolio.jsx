import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/Portfolio.css";
import "../styles/Responsive.css";

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
     <div className="portfolio-header">

    <div>

        <h1 className="portfolio-title">

            Portfolio

        </h1>

        <p className="portfolio-subtitle">

            Securely manage your digital wealth.

        </p>

    </div>

    <div className="portfolio-status">

        🛡 Protected

    </div>

</div>

      <div className="portfolio-card">
     <div className="portfolio-summary
     premium-summary">

    <p>Total Portfolio Value</p>
   
       <h1 className="portfolio-balance">
        *********
            </h1> 
    
    <p className="verify-text">
      Verify your identity to reveal your portfolio
      balaance.
     </p>

    <button
     className="verify-btn"
      onClick={() => navigate ("/verify-identity")}
      >
        🔐 Verify Identity 
    </button>

    <div className="portfolio-stats
    premium-stats">
      
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
 <div key={index} className="asset-card 
 premium-asset">

 <div className="asset-header">

<h2>

{asset.name}

</h2>

<span>

{asset.symbol}

</span>

</div>

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