import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Responsive.css";
import vaultDoor from"../assets/hero.png";

function EnterVault() {
  const navigate = useNavigate();
   const[message, setMessage] = useState("");
   const[showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
   });

 const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = 
    JSON.parse(localStorage.getItem("vaultUser"));

    if (!savedUser) {
   alert("❌ No vault found. Please create a vault first.");
    return;
    }

    if (
      loginData.email === savedUser.email &&
      loginData.password === savedUser.password
    ) {    
        alert("✅ Welcome back to ScraaVault!");
        navigate("/dashboard");
    } else {
        alert("❌ No vault found. Please create a vault first.");
    }
  };

  return (

        <div className="enter-vault-page">
<section className="enter-vault-hero">

<div className="vault-background">
    <img
        src={vaultDoor}
        alt="Vault Door"
        className="vault-door"
    />
</div>

<div className="hero-overlay">

<h1 className="vault-title">
    Enter Your
    <br />
    <span>Secure Bitcoin Vault</span>
</h1>

<p className="vault-tagline">
    Welcome back to ScraaVault
</p>

<p className="vault-description">
    256-bit Encryption • Privacy First • Non-Custodial
</p>

<div className="gold-line"></div>
      {message && <p>{message}</p>}

      <form className="vault-form" 
      onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              email: e.target.value,
            })
          }
        />
       <div className="password-box">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={loginData.password}
    onChange={(e) =>
      setLoginData({
        ...loginData,
        password: e.target.value,
      })
    }
  />

  <button
    type="button"
    className="show-password-btn"
    onClick={() => setShowPassword(!showPassword)}
  >
    👁
  </button>
</div>

        <div className="remember-box">
          <label>
            <input type="checkbox" />
            Remember this device
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">
          🔓 Enter  Secure Vault
        </button>
      </form>
      </div>
      </section>
    </div>
  );
  
}

export default EnterVault;