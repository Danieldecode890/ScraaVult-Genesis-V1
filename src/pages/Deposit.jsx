import { useState } from "react";
import "../styles/Dashboard.css";
import "../styles/Responsive.css";
function Deposit() {
    const walletAddress =
    "bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

    const[copied,setCopied] = useState(false);

    const copyAddress = async () => {
  await navigator.clipboard.writeText(walletAddress);

  setCopied(true);

    setTimeout(() => {
     setCopied(false);
  }, 2000);
};

  return (
    <div className="page">
      <div className="deposit-header">

    <div>

        <h1 className="deposit-title">

            Deposit Crypto

        </h1>
         <br></br>
        <p className="deposit-subtitle">

            Securely receive cryptocurrency into your ScraaVault.

        </p>

    </div>

    <div className="deposit-status">

        🟢 Deposit Ready

    </div>

</div>

      <div className="wallet-card deposit-card">
        <div className="deposit-summary">

    <div>

        <h2>

            Receive Cryptocurrency

        </h2>

        <p>

            Select an asset to generate a secure deposit address.

        </p>

    </div>

    <div className="secure-badge">

       🔒 AES-256

    </div>

      </div>

    <label className="deposit-label">

    Select Asset

    </label>

        <select className="input">
          <option>Bitcoin (BTC)</option>
          <option>Ethereum (ETH)</option>
          <option>Tether (USDT)</option>
          <option>Litecoin (LTC)</option>
        </select>

        <br /><br />

        <label className="deposit-label">
          Deposit Address
          </label> 
           
          <div className="address-box premium-address">

    <span className="address-label">

        Secure Wallet Address

    </span>

    <p className="wallet-address">

        {walletAddress}

    </p>

</div>
    

        <br />

        <button 
        className="view-btn"
        onClick={copyAddress}
        >
         {copied ?"✅ Address Copied" : "📋 Copy Address"}
        </button>
        <div className="qr-box premium-qr">
          <h3>
            Scan QR Code
          </h3>
            <div className="fake-qr">
             QR CODE
            </div>
            </div>
          <div className="info-item">

<strong>Network</strong>

<span>Bitcoin</span>

</div>

<div className="info-item">

<strong>Minimum Deposit</strong>

<span>0.0001 BTC</span>

</div>

<div className="info-item">

<strong>Confirmations</strong>

<span>3 Required</span>

</div>

        <br /><br />
        <div className="security-notice premium-security">
  <h3>
    🛡ScraaVault Security Notice</h3>

  <p>
    Only send the selected cryptocurrency to this address.
  </p>

  <p>
    Sending the wrong asset or network may result in permanent loss.
  </p>

  <p>
    ScraaVult will never ask for your recovery phrase or private keys.
  </p>
</div>
</div>
    </div>
  );
}

export default Deposit;