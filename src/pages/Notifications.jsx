function Notifications() {
  return (
    <div className="page">
      <div className="notification-header">

    <div>

        <h1 className="notification-title">

            Notification Center

        </h1>

        <p className="notification-subtitle">

            Stay informed about every activity in your ScraaVault.

        </p>

    </div>

    <div className="notification-status">

        🟢 Live

    </div>

</div>

      <div className="wallet-card 
      notification-container">

        <div className="transaction-card 
        success-card">
          <div className="notification-icon">

       ✅  

       </div>

        <div className="notification-content">

       <h3>

       Deposit Confirmed

       </h3>

       <p>

       0.005 BTC has been received successfully.

       </p>

       <small>

       2 minutes ago

        </small>

    </div>
        </div>

        <hr />

        <div className="transaction-card info-card">
         
      <div className="notification-icon">

        🛡

        </div>

      <div className="notification-content">

        <h3>

      Trusted Login

        </h3>

        <p>

      Your vault was accessed from a trusted device.

        </p>

      <small>

      Today • 8:35 PM

      </small>

        </div>
        </div>

        <hr />

        <div className="transaction-card
        warning-card">
          <div className="notification-icon">

    🔐

    </div>

    <div className="notification-content">

    <h3>

    Security Update

    </h3>

    <p>

    Identity verification is active and protecting your vault.

    </p>

    <small>

    Yesterday

    </small>

</div>
        </div>

      </div>
    </div>
  );
}

export default Notifications;