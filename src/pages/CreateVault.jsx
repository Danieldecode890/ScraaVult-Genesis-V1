import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

    const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        setMessage("❌Passwords do not match!");
        return;
    }

  setMessage("✅Your vault has been created successfully!");
  
  localStorage.setItem(
    "vaultUser", 
    JSON.stringify(formData)
 );
 console.log(formData);
 console.log(localStorage.getItem("vaultUser"));

    setTimeout(() => {
    navigate("/enter-vault");
    }, 1500);
    };

  return (
    <div className="page">
      <h1>Create Your Vault</h1>

  <p>Welcome to ScraaVault.</p>

  <p> 🛡️ 256-bit Encryption • Privacy First • Non-Custodial</p>
  <div className="gold-line"></div>
  
   {message && <p>{message}</p>}

    <form className="vault-form"
    onSubmit={handleSubmit}>
        
    <input
      type="text"
      placeholder="Username"
      value={formData.username}
      onChange={(e)=>
        setFormData({
            ...formData,
            username:e.target.value,
        })
      }
    />

    <input
      type="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={(e)=>
        setFormData({
            ...formData,
            email:e.target.value,
        })
      }
    />
    <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={formData.password}
      onChange={(e)=>
        setFormData({
            ...formData,
            password:e.target.value,
        })
      }
    />
    <div className="strength-bar">
    <div className="strength-fill"></div>
</div>

    <input
      type={showPassword ? "text" :"password"}
      placeholder="Confirm Password"
      value={formData.confirmPassword}
      onChange={(e)=>
        setFormData({
            ...formData,
            confirmPassword:e.target.value,
        })
      }
    />

<button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
>
    {showPassword ? "🙈 Hide Password" : "👁 Show Password"}
</button>

    <button type="submit">
      🔐 Create Secure Vault
    </button>
  </form>
    </div>
  );
}

export default CreateVault;