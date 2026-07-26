import { useState } from "react";
function TransactionDetails() {
    const txid = "8f7a2c9d0a4b7e6c123456789abcdef";

const [copied, setCopied] = useState(false);

const copyTxid = async () => {
  await navigator.clipboard.writeText(txid);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
  return (
    <div className="page">
      <h1>🔎 Transaction Details</h1>

      <div className="wallet-card">
        <h2>Bitcoin Deposit</h2>

        <p><strong>Amount:</strong> +0.005 BTC</p>
        <p><strong>Status:</strong> ✅ Completed</p>
        <p><strong>Network:</strong> Bitcoin</p>
        <p><strong>Confirmations:</strong> 6/6</p>
        <p><strong>Date:</strong> 22 July 2026</p>
        <p><strong>Transaction Fee:</strong> 0.00002 BTC</p>

        <hr />

        <h3>Transaction ID</h3>

        <div className="address-box">
          {txid}
        </div>

        <br />

        <button 
        className="view-btn"
        onClick={copyTxid}
        >
         {copied ? " ✅ TXID Copied":"📋 Copy TXID"}
        </button>

        <br /><br />

        <button className="view-btn">
          🌐 View on Blockchain Explorer
        </button>
      </div>
    </div>
  );
}

export default TransactionDetails;