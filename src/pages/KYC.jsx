import{ useState } from "react";
import { useNavigate } from "react-router-dom";

function KYC() {
  const navigate = useNavigate();
  const [submitted,setSubmitted] =
  useState(false);

  return (
    <div className="page">
 <h2>🪪 Identity Verification</h2>

<p className="page-subtitle">
Complete your KYC verification to unlock secure withdrawals,
higher transaction limits and premium account protection.
</p>

<hr />

<label>Full Name</label>
<input
  type="text"
  placeholder="Enter your full name"
/>

<label>Country</label>
<select>
  <option>Nigeria</option>
  <option>United Kingdom</option>
  <option>United States</option>
  <option>Canada</option>
  <option>Germany</option>
</select>

<label>ID Type</label>
<select>
  <option>National ID Card</option>
  <option>International Passport</option>
  <option>Driver's Licence</option>
</select>

<label>ID Number</label>
<input
  type="text"
  placeholder="Enter ID Number"
/>

<label>Upload Identity Document</label>
<input type="file" />

<div className="notice-box">
    <h3>🛡 Security Information</h3>

    <p>✓ Documents are encrypted before storage.</p>

    <p>✓ Your information remains completely private.</p>

    <p>✓ Verification usually takes less than 5 minutes.</p>

    <p>✓ This process protects your ScraaVult account.</p>
</div>

<button
className="view-btn"
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
    <div className="success-message">
    ✅Documents Submitted Successfully

    <br /><br /> 
    Redirecting to identity Verification...
    </div>   
)}
      </div>
  );
}

export default KYC;