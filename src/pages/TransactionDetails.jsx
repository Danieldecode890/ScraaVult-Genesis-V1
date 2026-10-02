import { useState } from "react";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiCopy,
  FiCheck,
  FiGlobe,
  FiArrowDown,
  FiShield,
} from "react-icons/fi";
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

  const detailItems = [
    { label: "Amount", value: "+0.005 BTC", highlight: "in" },
    { label: "Status", value: "Completed", highlight: "complete" },
    { label: "Network", value: "Bitcoin" },
    { label: "Confirmations", value: "6 / 6" },
    { label: "Date", value: "22 July 2026" },
    { label: "Transaction Fee", value: "0.00002 BTC" },
  ];

  return (
    <div className="sv-td-page">
      <button
        className="sv-td-back-btn"
        onClick={() => window.history.back()}
      >
        <FiArrowLeft />
        Back
      </button>

      <div className="sv-td-header">
        <div>
          <span className="sv-eyebrow" style={{ marginBottom: "12px" }}>
            On-Chain Record
          </span>
          <h1 className="sv-td-title">Transaction Details</h1>
          <p className="sv-td-subtitle">
            Secure blockchain transaction record.
          </p>
        </div>
        <div className="sv-td-status">
          <FiCheckCircle className="sv-td-status-icon" />
          Confirmed
        </div>
      </div>

      <div className="sv-td-card">
        <div className="sv-td-summary">
          <div className="sv-td-summary-left">
            <div className="sv-td-summary-icon">
              <FiArrowDown />
            </div>
            <div>
              <h2>Bitcoin Deposit</h2>
              <p>Verified on the Bitcoin Blockchain.</p>
            </div>
          </div>
          <div className="sv-td-network-badge">BTC Network</div>
        </div>

        <div className="sv-td-details-list">
          {detailItems.map((item, i) => (
            <div key={i} className="sv-td-detail-item">
              <span className="sv-td-detail-label">{item.label}</span>
              <span
                className={
                  "sv-td-detail-value" +
                  (item.highlight === "in" ? " sv-td-detail-value--in" : "") +
                  (item.highlight === "complete" ? " sv-td-detail-value--complete" : "")
                }
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <hr className="sv-td-divider" />

        <h3 className="sv-td-txid-title">
          <FiShield className="sv-td-txid-icon" />
          Blockchain Transaction ID
        </h3>

        <div className="sv-td-txid-box">
          {txid}
        </div>

        <button
          className="sv-td-copy-btn"
          onClick={copyTxid}
        >
          {copied ? (
            <>
              <FiCheck />
              TXID Copied
            </>
          ) : (
            <>
              <FiCopy />
              Copy TXID
            </>
          )}
        </button>

        <button className="sv-td-explorer-btn">
          <FiGlobe />
          View on Blockchain Explorer
        </button>
      </div>
    </div>
  );
}

export default TransactionDetails;
