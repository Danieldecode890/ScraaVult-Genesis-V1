import { useNavigate } from "react-router-dom";
function VerifyIdentity() {
    const navigate = useNavigate();
  return (
    <div className="page">
      <h1>🛡 Verify Identity</h1>

      <div className="wallet-card">
        <h2>ScraaVult Security Check</h2>

        <p>
          Please verify your identity before viewing balances
          or completing sensitive transactions.
        </p>

        <button 
        className="view-btn"
        onClick={() => navigate("/security")}
        >
          👆 Verify with Biometrics
        </button>

        <br /><br />

        <button 
         className="view-btn"
        onClick={() => navigate("/security")}
        >
          🔑 Verify with Vault Password
        </button>

        <br /><br />

        <p className="security-notice">
          Your assets remain hidden until verification is completed.
        </p>
      </div>
    </div>
  );
}

export default VerifyIdentity;