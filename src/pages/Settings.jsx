import { useNavigate } from "react-router-dom";
import "../styles/Settings.css"
import "../styles/Responsive.css";

function Settings({ theme, toggleTheme }){

    const navigate = useNavigate();

      return (
    <div className="page">
     <div className="settings-header">

    <div>

        <h1 className="settings-title">

            Settings

        </h1>
        <br></br>

        <p className="settings-subtitle">

            Personalize and secure your ScraaVault experience.

        </p>

    </div>

    <div className="settings-status">

        🟢 Protected

    </div>

</div>
      <div className="security-summary">

    <div>

        <h2>

            Security Score

        </h2>

        <p>

            Your vault security is in excellent condition.

        </p>

    </div>

    <div className="score-circle">

        92%

    </div>

</div>

<div className="security-checks">

    <div className="check success">

        ✅ Identity Verified

    </div>

    <div className="check success">

        ✅ Trusted Device

    </div>

    <div className="check success">

        ✅ Strong Vault PIN

    </div>

    <div className="check warning">

        ⚠ Fingerprint Authentication Disabled

    </div>

</div>

<div className="security-tip">

    <h3>

        💡 Recommendation

    </h3>

    <p>

        Enable fingerprint authentication to increase your Security Score and provide faster, more secure access to your vault.

    </p>

</div>

    <br />

      <div className="wallet-card settings-card">

        <button 
        className="settings-btn"
        onClick={toggleTheme}
        >
         {theme === "dark"
        ? "☀️ Switch to Light Mode"
        : "🌙 Switch to Dark Mode"}
        </button>

        <br /><br />

        <button
        className="settings-btn"
        onClick={() => navigate("/language")}
        >
          🌍 Language
        </button>

        <br /><br />

        <button 
        className="settings-btn"
        onClick={() => navigate("/currency")}
        >
          💵 Preferred Currency
        </button>

        <br /><br />

        <button 
        className="settings-btn"
        onClick={() => navigate("/notifications")}
        >
          🔔 Notification Preferences
        </button>

        <br /><br />

        <button 
        className="settings-btn"
        onClick={() => navigate("/privacy")}
        >
          🔒 Privacy Settings
        </button>

        <br /><br />

        <button 
        className="settings-btn"
        onClick={() => navigate("/trusted-devices")}
        >
          📱 Trusted Devices
        </button>

        <br /><br />

        <button 
        className="settings-btn"
        onClick={() => navigate("/about")}
        >
          ℹ️ About ScraaVult
        </button>

      </div>
    </div>
  );
}

export default Settings;