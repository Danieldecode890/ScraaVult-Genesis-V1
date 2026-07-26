import { useState } from "react";

function Currency() {
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="page">

      <h1>💵 Preferred Currency</h1>

      <div className="wallet-card">

        <h2>Select Your Currency</h2>

        <p>
          Choose how balances and asset values are displayed throughout
          your ScraaVult wallet.
        </p>

        <select
          className="input"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>NGN</option>
          <option>JPY</option>
          <option>CAD</option>
          <option>AUD</option>
        </select>

        <br /><br />

        <div className="notice-box">
          <h3>💰 Current Currency</h3>

          <p>Selected: <strong>{currency}</strong></p>
        </div>

        <br />

        <button className="view-btn">
          ✅ Save Currency
        </button>

      </div>

    </div>
  );
}

export default Currency;