import{ useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/KYC.css"
function KYC() {
  const navigate = useNavigate();
  const [submitted,setSubmitted] =
  useState(false);

  return (
    <div className="page">
<div className="kyc-header">

    <div>

        <h1 className="kyc-title">

            Identity Verification

        </h1>

        <p className="kyc-subtitle">

            Verify your identity to unlock secure withdrawals and premium vault protection.

        </p>

    </div>

    <div className="kyc-status">

        🔐 Secure Verification

    </div>

</div>

<p className="page-subtitle kyc-description">
Complete your KYC verification to unlock secure withdrawals,
higher transaction limits and premium account protection.
</p>

 
<div className="wallet-card kyc-card">

<div className="kyc-summary">

    <div>

        <h2>

            Verify Your Identity

        </h2>

        <p>

            Your information is encrypted and securely processed by ScraaVault.

        </p>

    </div>

    <div className="kyc-badge">

        KYC Level 1

    </div>

</div>
<label className="kyc-label">
  Full Name</label>
<input
  type="text"
  placeholder="Enter your full name"
/>

<label className="kyc-label">
  Country</label>
<select>
  <option>Nigeria</option>
  <option>United Kingdom</option>
  <option>United States</option>
  <option>Canada</option>
  <option>Germany</option>
</select>

<label className="kyc-label">
  ID Type</label>
<select>
  <option>National ID Card</option>
  <option>International Passport</option>
  <option>Driver's Licence</option>
</select>

<label className="kyc-label">
  ID Number</label>
<input
  type="text"
  placeholder="Enter ID Number"
/>

<label className="kyc-label">
  Upload Identity Document</label>
<input type="file" />

<div className="notice-box premium-notice">
    <h3>🛡 Security Information</h3>

    <p>✓ Documents are encrypted before storage.</p>

    <p>✓ Your information remains completely private.</p>

    <p>✓ Verification usually takes less than 5 minutes.</p>

    <p>✓ This process protects your ScraaVult account.</p>
</div>

<button
className="view-btn kyc-btn"
onClick={() => {
    setSubmitted(true);

    setTimeout(()=>{
        navigate("/verify-identity");
    },2000);
}}
>
Continue →
</button>
{submitted && (
    <div className="success-message
    premium-success">
    ✅Documents Submitted Successfully

    <br /><br /> 
    Redirecting to identity Verification...
    </div>   
)}
      </div>
      </div>
  );
}

export default KYC;