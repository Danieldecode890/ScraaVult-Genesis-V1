function Profile() {
  return (
    <div className="page">
      <h1>👤 My Profile</h1>

      <div className="wallet-card">

        <h2>Daniel</h2>

        <p><strong>Vault ID:</strong> SV-100001</p>

        <p><strong>Email:</strong> user@example.com</p>

        <p><strong>Member Since:</strong> July 2026</p>

        <p><strong>Verification:</strong> ✅ Verified</p>

        <hr />

        <button className="view-btn">
          ✏️ Edit Profile
        </button>

        <br /><br />

        <button className="view-btn">
          🔑 Change Password
        </button>

      </div>
    </div>
  );
}

export default Profile;