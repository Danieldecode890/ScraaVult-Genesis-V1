import { useState } from "react";
import "../styles/TransactionDetails.css";
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
      <div className="details-header">

    <div>

        <h1 className="details-title">

            Transaction Details

        </h1>

        <p className="details-subtitle">

            Secure blockchain transaction record.

        </p>

    </div>

    <div className="details-status">

        ✅ Confirmed

    </div>

</div>

      <div className="wallet-card details-card">
        <div className="details-summary">

    <div>

        <h2>

            Bitcoin Deposit

        </h2>

        <p>

            Verified on the Bitcoin Blockchain.

        </p>

    </div>

    <div className="network-badge">

        BTC Network

        </div>

    </div>

        <div className="detail-item">

<strong>Amount</strong>

<span>

+0.005 BTC

</span>

</div>
        <div className="detail-item">

<strong>Status</strong>

<span className="complete">

Completed

</span>

</div>
       
<div className="detail-item">

<strong>Network</strong>

<span>

Bitcoin

</span>

</div>
        <div className="detail-item">

<strong>Confirmations</strong>

<span>

6 / 6

</span>

</div>
        <div className="detail-item">

<strong>Date</strong>

<span>

22 July 2026

</span>

</div>
        
<div className="detail-item">

<strong>Transaction Fee</strong>

<span>

0.00002 BTC

</span>

</div>


        <hr />

        <h3 className="txid-title">
          Blockchain Transaction ID
          </h3>

        <div className="address-box premium-txid">
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

        <button className="view-btn explorer-btn">
          🌐 View on Blockchain Explorer
        </button>
      </div>
    </div>
  );
}

export default TransactionDetails;