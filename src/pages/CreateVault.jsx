import { useState } from "react";
import { useNavigate } from "react-router-dom";
import vaultDoor from"../assets/hero.png";
import logo from "../assets/logo.png";
import "../styles/CreateVault.css";
import "../styles/Responsive.css";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt
} from "react-icons/fa";
function CreateVault() {
  
    const navigate = useNavigate();
    const[formData, setFormData] =useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    const[message,setMessage] = useState("");
    const[showPassword, setShowPassword] = useState(false);
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [vaultCreated, setVaultCreated] = useState(false);
    
    const handleSubmit = async (e) => {
    e.preventDefault();

      setLoading(true);

      await new Promise(resolve =>
        setTimeout(resolve, 2000)
      );    
       
        setLoading(false);

    if (formData.password !== formData.confirmPassword) {
        setMessage("❌Passwords do not match!");
        setLoading(false);
        return;
    }

  setMessage("✅Your vault has been created successfully!");
  
  localStorage.setItem(
    "vaultUser", 
    JSON.stringify(formData)
 );
 console.log(formData);
 console.log(localStorage.getItem("vaultUser"));

      navigate("/loading-vault");
    
    };

  return (
    <div className="page">
      <img
    src={logo}
    alt="ScraaVult Logo"
    className="vault-logo"
    />
       
    <section className="vault-hero">
       <div className="vault-background">
             
        </div>
  <div className="hero-overlay">
 
   
      
      
     
      <h1 className="vault-title">
          Create Your
          <br />
          <span>Secure Bitcoin Vault</span>
      </h1>

      <p className="vault-tagline">
          Privacy by Design • Security by Default • Freedom by Choice
      </p>

      <p className="vault-description">
          Create your secure Bitcoin vault in under a minute.
          Your private keys stay yours. Your privacy stays protected.
      </p>

      <div className="gold-line"></div>

  

<div className="security-grid">

    <div className="security-card">
        <div className="security-icon">🛡️</div>
        <h3>Military Grade Encryption</h3>
        <p>Your vault is encrypted before storage.</p>
    </div>

    <div className="security-card">
        <div className="security-icon">🔒</div>
        <h3>Privacy First</h3>
        <p>Your personal information remains yours.</p>
    </div>

    <div className="security-card">
        <div className="security-icon">₿</div>
        <h3>Bitcoin Only</h3>
        <p>Built exclusively for Bitcoin security.</p>
    </div>

    <div className="security-card">
        <div className="security-icon">🚫</div>
        <h3>Non-Custodial</h3>
        <p>You remain in complete control of your vault.</p>
    </div>

</div>

     {message && <p>{message}</p>}
    
      <div className="security-warning">
      <h3>🔐 Security Notice</h3>

     <p>
        ScraaVault is a non-custodial Bitcoin vault.
     </p>

     <p>
        Your password and future recovery phrase are known only to you.
         </p>

         <p>  
        If they are lost, ScraaVault cannot recover them.
    </p>
  </div>

    <form className="vault-form"
    onSubmit={handleSubmit}>

      <h2 className="form-title">Vault Information</h2>
     <p className="form-subtitle">
      Create your secure ScraaVult account.
     </p>
        
     
      <label className="input-label">Username</label>

      <div className="input-group">
      <FaUser className="input-icon" />

      <input
      type="text"
      placeholder="Enter your username"
      />
    </div>

    
   <label className="input-label">Email Address</label>

    <div className="input-group">
    <FaEnvelope className="input-icon" />

    <input
    type="email"
    placeholder="Enter your email address"
    />
  </div>
  
   <label className="input-label">Password</label>

    <div className="input-group">

    <FaLock className="input-icon" />

    <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
         value={password}
        onChange={(e)=>
      setPassword(e.target.value)}
        />
    </div>
     <div className="password-strength">
     Password Strength:
     <span>
        {password.length < 6
            ? " Weak"
            : password.length < 10
            ? " Medium"
            : " Strong"}
      </span>
</div>
  <div className="password-checklist">

    <div className={password.length >= 8 ? "check success" : "check"}>
        {password.length >= 8 ? "✔" : "•"} At least 8 characters
    </div>

    <div className={/[A-Z]/.test(password) ? "check success" : "check"}>
        {/[A-Z]/.test(password) ? "✔" : "•"} One uppercase letter
    </div>

    <div className={/[a-z]/.test(password) ? "check success" : "check"}>
        {/[a-z]/.test(password) ? "✔" : "•"} One lowercase letter
    </div>

    <div className={/[0-9]/.test(password) ? "check success" : "check"}>
        {/[0-9]/.test(password) ? "✔" : "•"} One number
    </div>

    <div className={/[^A-Za-z0-9]/.test(password) ? "check success" : "check"}>
        {/[^A-Za-z0-9]/.test(password) ? "✔" : "•"} One special character
    </div>

</div>
   <label className="input-label">Confirm Password</label>

    <div className="input-group">

    <FaLock className="input-icon" />

    <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm  Password"
        value={confirmPassword}
        onChange={(e)=>
      setConfirmPassword(e.target.value)}
    />{
confirmPassword.length > 0 && (

<div
className={
password === confirmPassword
? "password-match success"
: "password-match error"
}
>

{password === confirmPassword
? "✅ Passwords match"
: "❌ Passwords do not match"}

</div>

)
}

</div>

<button
  type="button"
    onClick="eye-btn"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
</button>

    <button
     type="submit"
     disabled={loading}
     className="view-btn"
     >
      {loading ? "Creating Vault..." : "🔐 Create Secure Vault"}
    </button>
  </form>
     </div>

</section>
    </div>
  );
}

export default CreateVault;