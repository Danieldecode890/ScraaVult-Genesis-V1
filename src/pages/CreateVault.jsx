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

    <main className="vault-screen">

      {/* HEADER */}
      <header className="vault-header">

        <img
          src={logo}
          alt="ScraaVult"
          className="vault-logo"
        />

        <h1>
          Create Vault
        </h1>

        <p className="vault-subtitle">
          Secure your Bitcoin. Keep control of your keys.
        </p>

      </header>

      {/* CREATE VAULT FORM */}
      <form
        id="create-vault-form"
        className="vault-form"
        onSubmit={handleSubmit}
      >

        <div className="form-heading">
          <h2 className="form-title">
            Vault Information
          </h2>

          <p className="form-subtitle">
            Set up your secure ScraaVult account.
          </p>
        </div>

        {/* USERNAME */}
        <div className="field">

          <label className="input-label">
            Username
          </label>

          <div className="input-group">

            <FaUser className="input-icon" />

            <input
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  username: e.target.value
                });
              }}
            />

          </div>

        </div>

        {/* EMAIL */}
        <div className="field">

          <label className="input-label">
            Email Address
          </label>

          <div className="input-group">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value
                });
              }}
            />

          </div>

        </div>

        {/* PASSWORD */}
        <div className="field">

          <label className="input-label">
            Password
          </label>

          <div className="input-group">

            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => {

                setPassword(e.target.value);

                setFormData({
                  ...formData,
                  password: e.target.value
                });

              }}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword
                ? <FaEyeSlash />
                : <FaEye />
              }
            </button>

          </div>

          {/* PASSWORD STRENGTH */}
          <div className="password-strength">

            <span>Password strength</span>

            <strong>
              {password.length < 6
                ? "Weak"
                : password.length < 10
                ? "Medium"
                : "Strong"
              }
            </strong>

          </div>

          {/* PASSWORD REQUIREMENTS */}
          <div className="password-checklist">

            <div className={
              password.length >= 8
                ? "check success"
                : "check"
            }>
              {password.length >= 8 ? "✓" : "○"}
              {" "}8+ characters
            </div>

            <div className={
              /[A-Z]/.test(password)
                ? "check success"
                : "check"
            }>
              {/[A-Z]/.test(password) ? "✓" : "○"}
              {" "}Uppercase
            </div>

            <div className={
              /[a-z]/.test(password)
                ? "check success"
                : "check"
            }>
              {/[a-z]/.test(password) ? "✓" : "○"}
              {" "}Lowercase
            </div>

            <div className={
              /[0-9]/.test(password)
                ? "check success"
                : "check"
            }>
              {/[0-9]/.test(password) ? "✓" : "○"}
              {" "}Number
            </div>

          </div>

        </div>

        {/* CONFIRM PASSWORD */}
        <div className="field">

          <label className="input-label">
            Confirm Password
          </label>

          <div className="input-group">

            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {

                setConfirmPassword(e.target.value);

                setFormData({
                  ...formData,
                  confirmPassword: e.target.value
                });

              }}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword
                ? <FaEyeSlash />
                : <FaEye />
              }
            </button>

          </div>

          {confirmPassword.length > 0 && (

            <div
              className={
                password === confirmPassword
                  ? "password-match success"
                  : "password-match error"
              }
            >
              {password === confirmPassword
                ? "✓ Passwords match"
                : "Passwords do not match"
              }
            </div>

          )}

        </div>

        {/* CREATE BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="view-btn"
        >
          {loading
            ? "Creating Vault..."
            : "Create Secure Vault"
          }
        </button>

        {/* ENTER EXISTING VAULT */}
        <p className="login-link">

          Already have a vault?

          <span
            onClick={() => navigate("/enter-vault")}
          >
            Enter Vault →
          </span>

        </p>

      </form>

      {/* SECURITY FEATURES */}
      <section className="vault-security">

        <div className="section-heading">

          <span>
            SECURITY
          </span>

          <h2>
            Built around your privacy.
          </h2>

        </div>

        <div className="security-grid">

          <div className="security-card">
            <div className="security-icon">🛡️</div>
            <p>Military Grade</p>
          </div>

          <div className="security-card">
            <div className="security-icon">🔒</div>
            <p>Privacy First</p>
          </div>

          <div className="security-card">
            <div className="security-icon">₿</div>
            <p>Bitcoin Only</p>
          </div>

          <div className="security-card">
            <div className="security-icon">🚫</div>
            <p>Self Custody</p>
          </div>

        </div>

        <div className="security-warning">

          <h3>
            🔐 Security Notice
          </h3>

          <p>
            ScraaVult is non-custodial.
            Your password and recovery phrase
            remain under your control.
          </p>

        </div>

      </section>

    </main>

  </div>
);return (
  <div className="page">

    <main className="vault-screen">

      {/* HEADER */}
      <header className="vault-header">

        <img
          src={logo}
          alt="ScraaVult"
          className="vault-logo"
        />

        <h1>
          Create Vault
        </h1>

        <p className="vault-subtitle">
          Secure your Bitcoin. Keep control of your keys.
        </p>

      </header>

      {/* CREATE VAULT FORM */}
      <form
        id="create-vault-form"
        className="vault-form"
        onSubmit={handleSubmit}
      >

        <div className="form-heading">
          <h2 className="form-title">
            Vault Information
          </h2>

          <p className="form-subtitle">
            Set up your secure ScraaVult account.
          </p>
        </div>

        {/* USERNAME */}
        <div className="field">

          <label className="input-label">
            Username
          </label>

          <div className="input-group">

            <FaUser className="input-icon" />

            <input
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  username: e.target.value
                });
              }}
            />

          </div>

        </div>

        {/* EMAIL */}
        <div className="field">

          <label className="input-label">
            Email Address
          </label>

          <div className="input-group">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value
                });
              }}
            />

          </div>

        </div>

        {/* PASSWORD */}
        <div className="field">

          <label className="input-label">
            Password
          </label>

          <div className="input-group">

            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => {

                setPassword(e.target.value);

                setFormData({
                  ...formData,
                  password: e.target.value
                });

              }}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword
                ? <FaEyeSlash />
                : <FaEye />
              }
            </button>

          </div>

          {/* PASSWORD STRENGTH */}
          <div className="password-strength">

            <span>Password strength</span>

            <strong>
              {password.length < 6
                ? "Weak"
                : password.length < 10
                ? "Medium"
                : "Strong"
              }
            </strong>

          </div>

          {/* PASSWORD REQUIREMENTS */}
          <div className="password-checklist">

            <div className={
              password.length >= 8
                ? "check success"
                : "check"
            }>
              {password.length >= 8 ? "✓" : "○"}
              {" "}8+ characters
            </div>

            <div className={
              /[A-Z]/.test(password)
                ? "check success"
                : "check"
            }>
              {/[A-Z]/.test(password) ? "✓" : "○"}
              {" "}Uppercase
            </div>

            <div className={
              /[a-z]/.test(password)
                ? "check success"
                : "check"
            }>
              {/[a-z]/.test(password) ? "✓" : "○"}
              {" "}Lowercase
            </div>

            <div className={
              /[0-9]/.test(password)
                ? "check success"
                : "check"
            }>
              {/[0-9]/.test(password) ? "✓" : "○"}
              {" "}Number
            </div>

          </div>

        </div>

        {/* CONFIRM PASSWORD */}
        <div className="field">

          <label className="input-label">
            Confirm Password
          </label>

          <div className="input-group">

            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {

                setConfirmPassword(e.target.value);

                setFormData({
                  ...formData,
                  confirmPassword: e.target.value
                });

              }}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword
                ? <FaEyeSlash />
                : <FaEye />
              }
            </button>

          </div>

          {confirmPassword.length > 0 && (

            <div
              className={
                password === confirmPassword
                  ? "password-match success"
                  : "password-match error"
              }
            >
              {password === confirmPassword
                ? "✓ Passwords match"
                : "Passwords do not match"
              }
            </div>

          )}

        </div>

        {/* CREATE BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="view-btn"
        >
          {loading
            ? "Creating Vault..."
            : "Create Secure Vault"
          }
        </button>

        {/* ENTER EXISTING VAULT */}
        <p className="login-link">

          Already have a vault?

          <span
            onClick={() => navigate("/enter-vault")}
          >
            Enter Vault →
          </span>

        </p>

      </form>

      {/* SECURITY FEATURES */}
      <section className="vault-security">

        <div className="section-heading">

          <span>
            SECURITY
          </span>

          <h2>
            Built around your privacy.
          </h2>

        </div>

        <div className="security-grid">

          <div className="security-card">
            <div className="security-icon">🛡️</div>
            <p>Military Grade</p>
          </div>

          <div className="security-card">
            <div className="security-icon">🔒</div>
            <p>Privacy First</p>
          </div>

          <div className="security-card">
            <div className="security-icon">₿</div>
            <p>Bitcoin Only</p>
          </div>

          <div className="security-card">
            <div className="security-icon">🚫</div>
            <p>Self Custody</p>
          </div>

        </div>

        <div className="security-warning">

          <h3>
            🔐 Security Notice
          </h3>

          <p>
            ScraaVult is non-custodial.
            Your password and recovery phrase
            remain under your control.
          </p>

        </div>

      </section>

    </main>

  </div>
);
  
}

export default CreateVault;