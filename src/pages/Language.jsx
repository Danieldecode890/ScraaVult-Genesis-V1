import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Responsive.css";

function Language() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");

  return (
    <div className="page">
      <h1>🌍 Language</h1>

      <div className="wallet-card">

        <h2>Select Your Preferred Language</h2>

        <p className="page-subtitle">
          Choose the language used throughout your ScraaVult wallet.
        </p>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
          <option>German</option>
          <option>Portuguese</option>
        </select>

        <div className="notice-box">
          <h3>🌐 Current Language</h3>

          <p>
            Selected: <strong>{language}</strong>
          </p>
        </div>

        <button
          className="view-btn"
          onClick={() => navigate("/settings")}
        >
          ✅ Save Language
        </button>

      </div>
    </div>
  );
}

export default Language;