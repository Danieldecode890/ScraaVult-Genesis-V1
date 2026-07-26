import { useState } from "react";

function Privacy() {

  const [hideBalance, setHideBalance] = useState(true);
  const [privateMode, setPrivateMode] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  return (
    <div className="page">

      <h1>🔒 Privacy Settings</h1>

      <div className="wallet-card">

        <h2>Your Privacy Controls</h2>

        <p>
          Manage how your account information is displayed and protected.
        </p>

        <div className="setting-row">
          <label>Hide Portfolio Balance</label>
          <input
            type="checkbox"
            checked={hideBalance}
            onChange={() => setHideBalance(!hideBalance)}
          />
        </div>

        <div className="setting-row">
          <label>Enable Private Mode</label>
          <input
            type="checkbox"
            checked={privateMode}
            onChange={() => setPrivateMode(!privateMode)}
          />
        </div>

        <div className="setting-row">
          <label>Share Anonymous Analytics</label>
          <input
            type="checkbox"
            checked={analytics}
            onChange={() => setAnalytics(!analytics)}
          />
        </div>

        <div className="notice-box">
          <h3>🛡 Privacy Status</h3>

          <p>Your data remains encrypted and protected inside ScraaVult.</p>
        </div>

        <br />

        <button className="view-btn">
          ✅ Save Privacy Settings
        </button>

      </div>

    </div>
  );
}

export default Privacy;