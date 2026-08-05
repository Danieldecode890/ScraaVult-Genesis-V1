import { useNavigate } from "react-router-dom";
import "../styles/TransactionHistory.css";
import "../styles/Responsive.css";

function Transactions() {
    const navigate = useNavigate();
  return (
    <div className="page">
     <div className="history-header">

    <div>

        <h1 className="history-title">

            Transaction History

        </h1>

        <p className="history-subtitle">

            View every transaction completed through your ScraaVault.

        </p>

    </div>

    <div className="history-status">

        🔒 Encrypted

    </div>

    </div>

      <div className="wallet-card history-container">
        <div className="history-summary">

    <div>

        <h2>

            Recent Activity

        </h2>

        <p>

            Every deposit, withdrawal and exchange is securely recorded.

        </p>

    </div>

    <div className="history-badge">

        Live Ledger

    </div>

</div>

        <div 
        className="transaction-card
        success-transaction">
          <div className="transaction-icon">
            📥

            </div>

            <div className="transaction-content">
          <h3>📥 Deposit</h3>
          <p><strong>Asset:</strong> Bitcoin (BTC)</p>
          <p><strong>Amount:</strong> +0.005 BTC</p>
           <p>

          <strong>Status:</strong>

          <span className="status-complete">

        Completed

        </span>

      </p>
          <p><strong>Date:</strong> 22 July 2026</p>
          <p><strong>TXID:</strong> 8f7a2c9d************</p>

          <button
          className="view-btn"
          onClick={()=> navigate("/transaction-details")}
          >
           🛡️ View Secure Details
          </button>
            
        </div>
        </div>

        <hr />

        <div 
        className="transaction-card
        pending-transaction">
          <div className="transaction-icon">
            📤

</div>

<div className="transaction-content">
          
          <h3>📤 Withdrawal</h3>
          <p><strong>Asset:</strong> USDT</p>
          <p><strong>Amount:</strong> -250 USDT</p>
           <p>

      <strong>Status:</strong>

        <span className="status-pending">

        Pending

        </span>

      </p>
          <p><strong>Date:</strong> 21 July 2026</p>
          <p><strong>TXID:</strong> a4d92b************</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;