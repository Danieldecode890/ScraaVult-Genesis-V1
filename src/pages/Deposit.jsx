import { useState } from "react";
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
      <h1>📥 Deposit Crypto</h1>

      <div className="wallet-card">
        <h2>Select Coin</h2>

        <select className="input">
          <option>Bitcoin (BTC)</option>
          <option>Ethereum (ETH)</option>
          <option>Tether (USDT)</option>
          <option>Litecoin (LTC)</option>
        </select>

        <br /><br />

        <h2>Deposit Address</h2>

        <div className="address-box">
          {walletAddress}
        </div>

        <br />

        <button 
        className="view-btn"
        onClick={copyAddress}
        >
         {copied ?"✅ Address Copied" : "📋 Copy Address"}
        </button>
        <div className="qr-box">
            <div className="fake-qr">
             QR CODE
            </div>
            </div>
        <div className="deposit-info">
            <p><strong>Network:</strong>Bitcoin</p>
            <p><strong>Minimum Deposit:</strong>0.0001 
            BTC</p>
            <p><strong>Confirmations:</strong>3</p>

        </div>

        <br /><br />
        <div className="security-notice">
  <h3>🛡 Security Notice</h3>

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