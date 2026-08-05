import { useNavigate } from "react-router-dom";
import "../styles/Responsive.css";
function VerifyIdentity() {
    const navigate = useNavigate();
  return (
    <div className="page">
       <div className="verify-header">

    <div>

        <h1 className="verify-title">

            Identity Verification

        </h1>

        <p className="verify-subtitle">

            Confirm your identity before accessing protected vault features.

        </p>

    </div>

    <div className="verify-status">

        🔒 Secure Access

    </div>

</div>

      <div className="wallet-card verify-card">
       <div className="verify-summary">

    <div>

        <h2>

            ScraaVault Security Check

        </h2>

        <p>

            Complete one verification method to continue securely.

        </p>

    </div>

    <div className="verify-badge">

        Level 2 Security

     </div>

    </div>

       <div className="verify-message">

    <p>

        Your portfolio, balances and sensitive transactions
         remain protected until verification is completed.

    </p>

</div>

        <button 
        className="view-btn biometric-btn"
        onClick={() => navigate("/security")}
        >
          👆 Verify with Biometrics
        </button>

        <br /><br />

        <button 
         className="view-btn password-btn"
        onClick={() => navigate("/security")}
        >
          🔑 Verify with Vault Password
        </button>

        <br /><br />

        <div className="security-notice
        premium-security">
          <h3>
            Security Notice
          </h3>
          <p>
          Your assets remain hidden until verification is completed.
        </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyIdentity;