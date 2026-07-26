function TrustedDevices() {
  return (
    <div className="page">

      <h1>💻 Trusted Devices</h1>

      <div className="wallet-card">

        <h2>Devices Linked to Your Vault</h2>

        <p>
          Manage the devices that are authorised to access your ScraaVult account.
        </p>

        <div className="notice-box">
          <h3>💻 HP EliteBook G5</h3>

          <p>Status: ✅ Current Device</p>
          <p>Location: Nigeria</p>
          <p>Last Active: Just now</p>
        </div>

        <br />

        <div className="notice-box">
          <h3>📱 Samsung Galaxy</h3>

          <p>Status: ✅ Trusted</p>
          <p>Location: Nigeria</p>
          <p>Last Active: Today</p>
        </div>

        <br />

        <button className="view-btn">
          ➕ Add New Trusted Device
        </button>

        <br /><br />

        <button className="view-btn">
          🗑 Remove Selected Device
        </button>

      </div>

    </div>
  );
}

export default TrustedDevices;