import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
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

<div className="dashboard-header">

    <div>

        <h1 className="dashboard-title">

            Welcome Back,
            {user?.username?.charAt(0).toUpperCase() +
            user?.username?.slice(1) || "Guardian"} 👋

        </h1>

        <p className="dashboard-subtitle">

            Your digital vault is active and protected.

        </p>

    </div>

    <div className="vault-online">

        <span className="online-dot"></span>

        Vault Online

    </div>

</div>

<div className="dashboard-search">

<input
type="text"
className="input"
placeholder="Search your vault..."
/>

</div>
     <br /><br />
     
      <div className="wallet-card">
      
      <div className="dashboard-overview">

    <div className="balance-card">

        <h2>Vault Balance</h2>

        <h1>₿ 0.00000000</h1>

        <p>≈ $0.00 USD</p>

        <span>

            Genesis Portfolio

        </span>

    </div>
      

     
    <div className="security-card">

        <h2>

            Security Score

        </h2>

        <div className="security-percent">

            92%

        </div>

        <p>

            Excellent Protection

        </p>

        <button
        className="view-btn"
        onClick={() => navigate("/security")}
        >

        Open Security Center

        </button>

    </div>

</div>
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