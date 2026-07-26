import { useNavigate } from "react-router-dom";

function Transactions() {
    const navigate = useNavigate();
  return (
    <div className="page">
      <h1>📄 Transaction History</h1>

      <div className="wallet-card">
        <h2>Recent Transactions</h2>

        <div 
        className="transaction-card">
          <h3>📥 Deposit</h3>
          <p><strong>Asset:</strong> Bitcoin (BTC)</p>
          <p><strong>Amount:</strong> +0.005 BTC</p>
          <p><strong>Status:</strong> ✅ Completed</p>
          <p><strong>Date:</strong> 22 July 2026</p>
          <p><strong>TXID:</strong> 8f7a2c9d************</p>

          <button
          className="view-btn"
          onClick={()=> navigate("/transaction-details")}
          >
           🛡️ View Secure Details
          </button>
            
        </div>

        <hr />

        <div 
        className="transaction-card">
          <h3>📤 Withdrawal</h3>
          <p><strong>Asset:</strong> USDT</p>
          <p><strong>Amount:</strong> -250 USDT</p>
          <p><strong>Status:</strong> ⏳ Pending</p>
          <p><strong>Date:</strong> 21 July 2026</p>
          <p><strong>TXID:</strong> a4d92b************</p>
        </div>

      </div>
    </div>
  );
}

export default Transactions;