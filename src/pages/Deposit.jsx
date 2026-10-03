import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCopy,
  FiCheck,
  FiLock,
  FiShield,
  FiAlertTriangle,
  FiGrid,
} from "react-icons/fi";
import "../styles/Deposit.css";

function Deposit() {
  const navigate = useNavigate();

  const walletAddress = "bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    await navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const infoItems = [
    { label: "Network", value: "Bitcoin" },
    { label: "Minimum Deposit", value: "0.0001 BTC" },
    { label: "Confirmations", value: "3 Required" },
  ];

  return (
    <div className="sv-deposit-page">
      <button
        className="sv-deposit-back-btn"
        onClick={() => navigate("/dashboard")}
      >
        <FiArrowLeft />
        Back to Dashboard
      </button>

      <div className="sv-deposit-header">
        <div>
          <span className="sv-eyebrow" style={{ marginBottom: "12px" }}>
            Receive Funds
          </span>
          <h1 className="sv-deposit-title">Deposit Crypto</h1>
          <p className="sv-deposit-subtitle">
            Securely receive cryptocurrency into your ScraaVault.
          </p>
        </div>
        <div className="sv-deposit-status">
          <span className="sv-deposit-status-dot" />
          Deposit Ready
        </div>
      </div>

      <div className="sv-deposit-card">
        <div className="sv-deposit-summary">
          <div>
            <h2>Receive Cryptocurrency</h2>
            <p>Select an asset to generate a secure deposit address.</p>
          </div>
          <div className="sv-secure-badge">
            <FiLock className="sv-secure-badge-icon" />
            AES-256
          </div>
        </div>

        <div className="sv-form-group">
          <label className="sv-form-label">Select Asset</label>
          <select className="sv-deposit-select">
            <option>Bitcoin (BTC)</option>
            <option>Ethereum (ETH)</option>
            <option>Tether (USDT)</option>
            <option>Litecoin (LTC)</option>
          </select>
        </div>

        <div className="sv-form-group">
          <label className="sv-form-label">Deposit Address</label>
          <div className="sv-address-box">
            <span className="sv-address-label">Secure Wallet Address</span>
            <p className="sv-wallet-address">{walletAddress}</p>
          </div>
        </div>

        <button className="sv-deposit-copy-btn" onClick={copyAddress}>
          {copied ? (
            <>
              <FiCheck />
              Address Copied
            </>
          ) : (
            <>
              <FiCopy />
              Copy Address
            </>
          )}
        </button>

        <div className="sv-qr-section">
          <h3>
            <FiGrid className="sv-qr-icon" />
            Scan QR Code
          </h3>
          <div className="sv-fake-qr">QR CODE</div>
        </div>

        <div className="sv-deposit-info-grid">
          {infoItems.map((item, i) => (
            <div key={i} className="sv-info-item">
              <strong>{item.label}</strong>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        <div className="sv-deposit-notice">
          <div className="sv-deposit-notice-header">
            <FiAlertTriangle className="sv-deposit-notice-icon" />
            <h3>ScraaVault Security Notice</h3>
          </div>
          <p>Only send the selected cryptocurrency to this address.</p>
          <p>Sending the wrong asset or network may result in permanent loss.</p>
          <p>ScraaVault will never ask for your recovery phrase or private keys.</p>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
