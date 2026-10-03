import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiKey,
  FiArrowRight,
  FiShield,
} from "react-icons/fi";
import "./VaultPages.css";
import "../styles/CreateVault.css";

function CreateVault() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);

    setMessage("Your vault has been created successfully!");

    localStorage.setItem("vaultUser", JSON.stringify(formData));

    navigate("/loading-vault");
  };

  return (
    <div className="sv-vault-page">
      <div className="sv-vault-card sv-vault-enter">
        {/* Header */}
        <div className="sv-vault-header">
          <div className="sv-vault-header-icon">
            <FiShield />
          </div>
          <span className="sv-eyebrow" style={{ marginBottom: "12px" }}>
            Secure Access
          </span>
          <h1>Create Your Vault</h1>
          <p className="sv-vault-subtitle">
            Secure your Bitcoin. Keep control of your keys.
          </p>
        </div>

        {/* Create Vault Form */}
        <form className="sv-vault-form" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="sv-form-group">
            <label className="sv-form-label">Username</label>
            <input
              type="text"
              className="sv-form-input"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
              autoFocus
            />
          </div>

          {/* Email */}
          <div className="sv-form-group">
            <label className="sv-form-label">Email Address</label>
            <input
              type="email"
              className="sv-form-input"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>

          {/* Password */}
          <div className="sv-form-group">
            <label className="sv-form-label">Password</label>
            <div className="sv-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="sv-form-input sv-password-input"
                placeholder="Create a password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
              <button
                type="button"
                className="sv-eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {/* Password Strength */}
            <div className="sv-password-strength">
              <span>Password strength</span>
              <strong>
                {password.length < 6
                  ? "Weak"
                  : password.length < 10
                  ? "Medium"
                  : "Strong"}
              </strong>
            </div>

            {/* Password Requirements */}
            <div className="sv-password-checklist">
              <div
                className={
                  password.length >= 8 ? "sv-check sv-check--done" : "sv-check"
                }
              >
                {password.length >= 8 ? "✓" : "○"} 8+ characters
              </div>
              <div
                className={
                  /[A-Z]/.test(password)
                    ? "sv-check sv-check--done"
                    : "sv-check"
                }
              >
                {/[A-Z]/.test(password) ? "✓" : "○"} Uppercase
              </div>
              <div
                className={
                  /[a-z]/.test(password)
                    ? "sv-check sv-check--done"
                    : "sv-check"
                }
              >
                {/[a-z]/.test(password) ? "✓" : "○"} Lowercase
              </div>
              <div
                className={
                  /[0-9]/.test(password)
                    ? "sv-check sv-check--done"
                    : "sv-check"
                }
              >
                {/[0-9]/.test(password) ? "✓" : "○"} Number
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="sv-form-group">
            <label className="sv-form-label">Confirm Password</label>
            <div className="sv-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="sv-form-input sv-password-input"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  });
                }}
              />
              <button
                type="button"
                className="sv-eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {confirmPassword.length > 0 && (
              <div
                className={
                  password === confirmPassword
                    ? "sv-password-match sv-password-match--ok"
                    : "sv-password-match sv-password-match--err"
                }
              >
                {password === confirmPassword
                  ? "✓ Passwords match"
                  : "Passwords do not match"}
              </div>
            )}
          </div>

          {/* Security Notice */}
          <div className="sv-vault-notice">
            <FiKey className="sv-vault-notice-icon" />
            <span>
              ScraaVult is non-custodial. Your password and recovery phrase
              remain under your control.
            </span>
          </div>

          {/* Error / Message */}
          {message && <p className="sv-form-error">{message}</p>}

          {/* Create Button */}
          <div className="sv-vault-nav">
            <button
              type="submit"
              className="sv-btn-primary"
              disabled={loading}
            >
              <FiLock />
              {loading ? "Creating Vault..." : "Create Secure Vault"}
              <FiArrowRight />
            </button>
          </div>

          {/* Already have a vault */}
          <div className="sv-vault-alt">
            <span>Already have a vault?</span>
            <span
              className="sv-vault-alt-link"
              onClick={() => navigate("/enter-vault")}
            >
              Enter Vault →
            </span>
          </div>
        </form>
      </div>

      {/* Security Features */}
      <div className="sv-create-security">
        <div className="sv-create-security-heading">
          <span className="sv-create-security-eyebrow">SECURITY</span>
          <h2>Built around your privacy.</h2>
        </div>

        <div className="sv-create-security-grid">
          <div className="sv-create-security-card">
            <FiShield className="sv-create-security-icon" />
            <p>Military Grade</p>
          </div>
          <div className="sv-create-security-card">
            <FiLock className="sv-create-security-icon" />
            <p>Privacy First</p>
          </div>
          <div className="sv-create-security-card">
            <FiKey className="sv-create-security-icon" />
            <p>Bitcoin Only</p>
          </div>
          <div className="sv-create-security-card">
            <FiShield className="sv-create-security-icon" />
            <p>Self Custody</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateVault;
