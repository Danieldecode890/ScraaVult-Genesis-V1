import { useNavigate } from "react-router-dom";
import "../styles/Responsive.css";
function AssetDetails() {
    const navigate = useNavigate();
  return (
    <div className="page">
      <h1>🪙 Asset Details</h1>

      <div className="wallet-card">

        <h2>Bitcoin (BTC)</h2>

        <p><strong>Balance:</strong> ********</p>

        <p><strong>Status:</strong> 🛡️ Protected</p>

        <hr />
        
        <button 
        className="view-btn"
        onClick={()=> navigate("/deposit")}
        >
          📥 Deposit
        </button>

        <br /><br />

        <button 
        className="view-btn"
        onClick={()=> navigate("/withdraw")}
        >
          📤 Withdraw
        </button>

        <br /><br />

        <button 
        className="view-btn"
        onClick={()=> navigate("/exchange")}
        >
          💱 Exchange
        </button>

        <br /><br />

        <button
         className="view-btn"
        onClick={()=> navigate("/transactions")}
         >
          📜 Transactions
        </button>

      </div>
    </div>
  );
}

export default AssetDetails;