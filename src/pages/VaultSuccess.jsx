import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/VaultSuccess.css";
import "../styles/Responsive.css";

function VaultSuccess() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

useEffect(() => {
  let current = 0;

  const timer = setInterval(() => {
    current++;

    setScore(current);

    if (current >= 70) {
      clearInterval(timer);
    }
  }, 20);

  return () => clearInterval(timer);
}, []);

  return (
    <div className="vault-success-page">

      <div className="success-card">

         <h1> 🎉 Vault Created Successfully</h1>
            
        <p>
          Your Bitcoin Vault has been created and is ready to use.
        </p>

        <div className="security-score">
          <h2>Current Security</h2>

          <div className="score-circle">

            <span>{score}%</span>
          </div>
           <h3>Good Security</h3>

          <p>
            Your vault is not fully protected yet.
          </p>
        </div>

        ⚠ Important Security Notice

        Your Recovery Phrase has not been saved.

    Without it, ScraaVault cannot recover your Bitcoin if your device is lost.

   <div className="security-checklist">

<div className="item complete">
✅ Vault Created
</div>

<div className="item complete">
✅ Password Protected
</div>

<div className="item warning">
⚠ Recovery Phrase Missing
</div>

<div className="item pending">
⬜ Two-Factor Authentication
</div>

<div className="item pending">
⬜ Email Verification
</div>

</div>

<div className="warning-card">

<h2>⚠ Important Security Notice</h2>

<p>
Your Recovery Phrase has not been saved.
</p>

<p>
Without it, ScraaVault cannot recover your Bitcoin if your device is lost.
</p>

</div>

        <button
          className="primary-btn"
          onClick={() => navigate("/recovery-phrase")}
        >
          🔒 Secure My Vault Now
        </button>

         <br></br>
        
        <button
          className="secondary-btn"
          onClick={() => navigate("/enter-vault")}
        >
          Do This Later
        </button>

      </div>

    </div>
  );
}

export default VaultSuccess;