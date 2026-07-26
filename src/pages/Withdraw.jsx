import { useNavigate } from "react-router-dom";
function Withdraw() {
    const navigate = useNavigate();
  return (
    <div className="page">
      <h1>💸 Withdraw</h1>

      <div className="wallet-card">
        <h2>Secure Withdrawal</h2>

        <p>
          Withdrawals require identity verification before any transaction can
          be completed.
        </p>

        <hr />

        <label>Select Asset</label>
        <select>
          <option>Bitcoin (BTC)</option>
          <option>Ethereum (ETH)</option>
          <option>Tether (USDT)</option>
          <option>Litecoin (LTC)</option>
        </select>

        <br /><br />

        <label>Recipient Address</label>
        <input
          type="text"
          placeholder="Enter wallet address"
        />

        <br /><br />

        <label>Amount</label>
        <input
          type="number"
          placeholder="{0.00000000000 BTC}    {MAX}"
        />
        <br /><br />
        <p className="balance">
            Available Balance:
            <strong>******* BTC</strong>
        </p>
<hr />

<h2>Withdrawal Summary</h2>

<p>
  <strong>Network Fee:</strong> Calculated automatically
</p>

<p>
  <strong>Estimated Arrival:</strong> 10–30 Minutes
</p>

<p>
  <strong>Security:</strong> Identity Verification Required
</p>
    <div className="security-notice">

<h3>⚠ Withdrawal Notice</h3>

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
        className="view-btn"
        onClick={() => navigate("/kyc")}
        >
          Complete identity verification (KYC)
        </button>
      </div>
    </div>
  );
}

export default Withdraw;