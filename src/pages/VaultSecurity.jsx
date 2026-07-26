function VaultSecurity() {
  return (
    <div className="page">
      <div className="wallet-card">

      <h1>🔐 Security Center</h1>

      <p>
     Your vault is protected with enterprise-grade security.
     </p>

     
      <p className="vault-status">
      🟢 Security Score: 92%
     </p>

      <div className="gold-line"></div>
      <div className="wallet-card">
            <div className="wallet-card">

     <h2>🛡️ Security Summary</h2>

     <p>🟢 Vault Status: Protected</p>

     <p>🟢 Encryption: Active</p>

     <p>🟢 Identity: Verified</p>

     <p>🟢 Recovery: Ready</p>

     <h1>92%</h1>

     <p>Security Score</p>
     </div>
     
        <h2>🛡️ Vault Staus</h2>
        <p>🟢 Protected</p>

        <hr />

        <h2>🆔 Identity Verification</h2>
        <p>✅ Verified</p>

        <hr />

        <h2>Vault PIN</h2>
        <p>*******</p>

        <hr />

        <h2>Trusted Device</h2>
          💻 Windows Laptop
        <p>Last Active:Today</p>
        <p>Location:Trusted Device</p>
        <hr />

       <h2>🧩 Recovery</h2>

       <p>✅ Recovery phrase backed up</p>

       <button className="view-btn">
        📄 View Recovery Status
       </button>

       <br /><br />

        <button className="view-btn">
          🔑 Change Vault PIN
        </button>

        <br /><br />

        <button className="view-btn">
          👆 Enable Fingerprint
        </button>

        <br /><br />

        <button className="view-btn">
          Enable Face ID
        </button>

        <br /><br />

        <button className="view-btn">
          Emergency Lock
        </button>

        <hr />

        </div>

        <h2>📜 Recent Security Activity</h2>

        <p>✅ Vault created successfully</p>

        <p>💻 Trusted device recongnised</p>
        
        <p>🔑 Password verified</p>

        <p>🕒 Last login: Today</p>

       <p>🟢 No suspicious activity detected</p>
      </div>

    </div>
  );
}

export default VaultSecurity;