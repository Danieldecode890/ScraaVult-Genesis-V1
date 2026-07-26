import { useNavigate } from "react-router-dom";

function Settings({ theme, toggleTheme }){

    const navigate = useNavigate();

      return (
    <div className="page">
      <h1>⚙️ Settings</h1>
      <h2>🛡️ Security Score</h2>

    <h1 style={{ color: "#4CAF50" }}>92%</h1>

    <p>✅ Identity Verified</p>

    <p>✅ Trusted Device</p>

    <p>✅ Strong Vault PIN</p>

    <p>⚠️ Fingerprint Disabled</p>

    <br />

    <p>
    Improve your security score by enabling fingerprint authentication.
    </p>

    <hr />

    <br />

      <div className="wallet-card">

        <button 
        className="view-btn"
        onClick={toggleTheme}
        >
         {theme === "dark"
        ? "☀️ Switch to Light Mode"
        : "🌙 Switch to Dark Mode"}
        </button>

        <br /><br />

        <button
        className="view-btn"
        onClick={() => navigate("/language")}
        >
          🌍 Language
        </button>

        <br /><br />

        <button 
        className="view-btn"
        onClick={() => navigate("/currency")}
        >
          💵 Preferred Currency
        </button>

        <br /><br />

        <button 
        className="view-btn"
        onClick={() => navigate("/notifications")}
        >
          🔔 Notification Preferences
        </button>

        <br /><br />

        <button 
        className="view-btn"
        onClick={() => navigate("/privacy")}
        >
          🔒 Privacy Settings
        </button>

        <br /><br />

        <button 
        className="view-btn"
        onClick={() => navigate("/trusted-devices")}
        >
          📱 Trusted Devices
        </button>

        <br /><br />

        <button 
        className="view-btn"
        onClick={() => navigate("/about")}
        >
          ℹ️ About ScraaVult
        </button>

      </div>
    </div>
  );
}

export default Settings;