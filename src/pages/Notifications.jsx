function Notifications() {
  return (
    <div className="page">
      <h1>🔔 Notifications</h1>

      <div className="wallet-card">

        <div className="transaction-card">
          <h3>✅ Deposit Confirmed</h3>
          <p>0.005 BTC has been received.</p>
          <small>2 minutes ago</small>
        </div>

        <hr />

        <div className="transaction-card">
          <h3>🛡️ Login Detected</h3>
          <p>Your vault was accessed from your trusted device.</p>
          <small>Today, 8:35 PM</small>
        </div>

        <hr />

        <div className="transaction-card">
          <h3>🔐 Security Alert</h3>
          <p>Your identity verification is active.</p>
          <small>Yesterday</small>
        </div>

      </div>
    </div>
  );
}

export default Notifications;