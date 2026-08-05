import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Responsiive.css";

function EnterVault() {
  const navigate = useNavigate();
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[message, setMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
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
    <div className="page">
      <h1>Enter Your Vault</h1>
      <p>Welcome back to ScraaVault.</p>
      
      <p>
       🛡️ 256-bit Encryption • Privacy First • Non-custodial 
      </p>
      <div className="gold-line"></div>
      {message && <p>{message}</p>}

      <form className="vault-form" onSubmit={handleSubmit}>
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
          type="password"
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
        >
        👁
        </button>
        </div>

        <div className="remember-box">
          <label>
            <input type="checkbox" />
            Remember this device
          </label>
          <a herf="#">Forgot Password?</a>
        </div>
        <button type="submit">
          🔓 Enter  Secure Vault
        </button>
      </form>
    </div>
  );
}

export default EnterVault;