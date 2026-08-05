import { useNavigate } from "react-router-dom";
import "../styles/Withdraw.css";
function Withdraw() {
    const navigate = useNavigate();
  return (
    <div className="page">
      <div className="withdraw-header">

    <div>

        <h1 className="withdraw-title">

            Withdraw Crypto

        </h1>

        <p className="withdraw-subtitle">

            Transfer your digital assets securely from your ScraaVault.

        </p>

    </div>

    <div className="withdraw-status">

        🔒 Protected

    </div>

</div>

      <div className="wallet-card withdraw-card">
        <div className="withdraw-summary">

    <div>

        <h2>

            Secure Withdrawal

        </h2>

        <p>

            Every withdrawal passes through multiple security checks.

        </p>

     </div>

      <div className="verify-badge">

        KYC Required

     </div>

    </div>

        <p>
          Withdrawals require identity verification before any transaction can
          be completed.
        </p>

        <hr />

        <label className="withdraw-label">
          Select Asset
          </label>
        <select>
          <option>Bitcoin (BTC)</option>
          <option>Ethereum (ETH)</option>
          <option>Tether (USDT)</option>
          <option>Litecoin (LTC)</option>
        </select>

        <br /><br />

        <label className="withdraw-label">
          Recipient Wallet Address
          </label>
        <input
          type="text"
          placeholder="Enter wallet address"
        />

        <br /><br />

        <label className="withdraw-label">
          Withdrawal Amount
          </label>
        <input
          type="number"
          placeholder="{0.00000000000 BTC}    {MAX}"
        />
        <br /><br />
        <div className="balance-card">
        <p className="balance">
            Available Balance:
            <strong>******* BTC</strong>
        </p>
        </div>
<hr />

<h2 className="summary-title">
  Transaction Summary
  </h2>

<p>
  <strong>Network Fee:</strong> Calculated automatically
</p>

<p>
  <strong>Estimated Arrival:</strong> 10–30 Minutes
</p>

<p>
  <strong>Security:</strong> Identity Verification Required
</p>
    <div className="security-notice
    premium-security">

<h3>🛡️ScraaVault Security Notice

</h3>

<p>
Always verify the recipient address before sending.
</p>

<p>
Blockchain transactions cannot be reversed once confirmed.
</p>

<p>
ScraaVult protects your assets but cannot recover funds sent to the wrong address.
</p>

</div>



        <button 
        className="view-btn withdraw-btn"
        onClick={() => navigate("/kyc")}
        >
          Complete identity verification (KYC)
        </button>
      </div>
    </div>
  );
}

export default Withdraw;