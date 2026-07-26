import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("vaultUser"));

    if (savedUser) {
        setUser(savedUser);
    }
}, []);
  
const handleLogout = () => {
    localStorage.removeItem("vaultUser");
    navigate("/enter-vault");
};

  return (
    <div className="page">
      <h1>
      Welcome Back, {user?.username?.charAt(0).toUpperCase() + user?.username?.slice(1) || "Guardian"}👋
     </h1>

    <p>
        Your vault is protected with 256-bit encryption.
      </p>
     <div className="gold-line"></div>
     <p className="vault-status">
      🟢 Vault Status: Fully Protected
      </p>

       <br />

     <input
     type="text"
     className="input"
     placeholder="🔍 Search Vault..."
     />
     <br /><br />
     
      <div className="wallet-card">
        

      <h2>🛡 Vault Security</h2>

      <p>🟢 Encryption Active</p>

      <p>🟢 Recovery Ready</p>

      <p>🟢 Vault Locked</p>
      
      <h3>Security Score</h3>

        <h2>92%</h2>
      <button
      className="view-btn"
      onClick={() => navigate("/security")}
      >
       🛡️ Manage Security
      </button>
       </div>

      <div className="wallet-card">

     <h2>💰 Portfolio</h2>

      <h1>₿ 0.00000000</h1>

     <h3>≈ $0.00</h3>

     <p>Genesis Portfolio</p>

      <br />

    <button
    className="view-btn"
    onClick={() => navigate("/portfolio")}
  >
    📊 Open Portfolio
   </button>

  </div>

  <br />
  <div className="wallet-card">
  <h2>📡 Live Activity</h2>

  <p>🟢 Login detected</p>
  <p>🛡️ Security check completed</p>
  <p>📥 Deposit confirmed</p>
  <p>🔄 Portfolio updated</p>

  <br />

  <button
    className="view-btn"
    onClick={() => navigate("/notifications")}
  >
   📡 View Activity
  </button>
</div>

<div className="wallet-card">
  <h2>📈 Market Overview</h2>

  <div className="market-row">
    <span>₿ Bitcoin (BTC)</span>
    <span className="green">+2.4%</span>
  </div>

  <div className="market-row">
    <span>Ξ Ethereum (ETH)</span>
    <span className="red">-1.1%</span>
  </div>

  <div className="market-row">
    <span>₮ Tether (USDT)</span>
    <span>Stable</span>
  </div>

  <div className="market-row">
    <span>Ł Litecoin (LTC)</span>
    <span className="green">+0.8%</span>
  </div>

  <br />

    <button
    className="view-btn"
    onClick={() => navigate("/exchange")}
  >
    Open Exchange
  </button>
</div>

      <div className="wallet-card">
    <br />
        <h2>⚡ Quick Actions</h2>

<div className="quick-grid">

  <button
    className="view-btn"
    onClick={() => navigate("/deposit")}
  >
    📥 Deposit
  </button>

  <button
    className="view-btn"
    onClick={() => navigate("/withdraw")}
  >
    📤 Withdraw
  </button>

  <button
    className="view-btn"
    onClick={() => navigate("/exchange")}
  >
    💱 Exchange
  </button>

  <button
    className="view-btn"
    onClick={() => navigate("/transactions")}
  >
    📄 Transactions
  </button>

  <button
    className="view-btn"
    onClick={() => navigate("/notifications")}
  >
    🔔 Notifications
  </button>

  <button
    className="view-btn"
    onClick={() => navigate("/settings")}
  >
    ⚙️ Settings
  </button>

</div>
      </div>
     
        <button 
        className="view-btn logout-btn"
        onClick={handleLogout}>
        🚪 Logout
    </button>
        </div>
  );
}

export default Dashboard;