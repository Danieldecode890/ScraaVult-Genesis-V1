import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiShield,
  FiBarChart2,
  FiActivity,
  FiLogIn,
  FiCheckCircle,
  FiArrowDownCircle,
  FiRefreshCw,
  FiTrendingUp,
  FiRepeat,
  FiZap,
  FiArrowDown,
  FiArrowUp,
  FiFileText,
  FiBell,
  FiSettings,
  FiLogOut,
  FiArrowRight,
} from "react-icons/fi";
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

  const displayName =
    user?.username?.charAt(0).toUpperCase() + user?.username?.slice(1) ||
    "Guardian";

  const activityItems = [
    { icon: FiLogIn, label: "Login detected" },
    { icon: FiCheckCircle, label: "Security check completed" },
    { icon: FiArrowDownCircle, label: "Deposit confirmed" },
    { icon: FiRefreshCw, label: "Portfolio updated" },
  ];

  const marketItems = [
    { symbol: "₿ Bitcoin (BTC)", change: "+2.4%", trend: "up" },
    { symbol: "Ξ Ethereum (ETH)", change: "-1.1%", trend: "down" },
    { symbol: "₮ Tether (USDT)", change: "Stable", trend: "stable" },
    { symbol: "Ł Litecoin (LTC)", change: "+0.8%", trend: "up" },
  ];

  const quickActions = [
    { icon: FiArrowDown, label: "Deposit", route: "/deposit" },
    { icon: FiArrowUp, label: "Withdraw", route: "/withdraw" },
    { icon: FiRepeat, label: "Exchange", route: "/exchange" },
    { icon: FiFileText, label: "Transactions", route: "/transactions" },
    { icon: FiBell, label: "Notifications", route: "/notifications" },
    { icon: FiSettings, label: "Settings", route: "/settings" },
  ];

  return (
    <div className="sv-dashboard">
      {/* Header */}
      <div className="sv-dashboard-header">
        <div>
          <h1 className="sv-dashboard-title">Welcome Back, {displayName}</h1>
          <p className="sv-dashboard-subtitle">
            Your digital vault is active and protected.
          </p>
        </div>
        <div className="sv-vault-online">
          <span className="sv-online-dot" />
          Vault Online
        </div>
      </div>

      {/* Search */}
      <div className="sv-dashboard-search">
        <FiSearch className="sv-search-icon" />
        <input
          type="text"
          className="sv-search-input"
          placeholder="Search your vault..."
        />
      </div>

      {/* Balance + Security Overview */}
      <div className="sv-dashboard-overview">
        <div className="sv-balance-card">
          <div className="sv-balance-header">
            <FiBarChart2 className="sv-balance-icon" />
            <h2>Vault Balance</h2>
          </div>
          <h1 className="sv-balance-amount">₿ 0.00000000</h1>
          <p className="sv-balance-usd">≈ $0.00 USD</p>
          <span className="sv-balance-tag">Genesis Portfolio</span>
        </div>

        <div className="sv-security-card">
          <div className="sv-security-header">
            <FiShield className="sv-security-icon" />
            <h2>Security Score</h2>
          </div>
          <div className="sv-security-percent">92%</div>
          <p className="sv-security-label">Excellent Protection</p>
          <button
            className="sv-dashboard-btn"
            onClick={() => navigate("/security")}
          >
            <FiShield />
            Open Security Center
            <FiArrowRight />
          </button>
        </div>
      </div>

      {/* Open Portfolio */}
      <button
        className="sv-dashboard-btn sv-portfolio-btn"
        onClick={() => navigate("/portfolio")}
      >
        <FiBarChart2 />
        Open Portfolio
        <FiArrowRight />
      </button>

      {/* Live Activity */}
      <div className="sv-dashboard-card">
        <div className="sv-card-header">
          <FiActivity className="sv-card-icon" />
          <h2>Live Activity</h2>
        </div>
        <div className="sv-activity-list">
          {activityItems.map((item, i) => (
            <div key={i} className="sv-activity-item">
              <item.icon className="sv-activity-icon" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <button
          className="sv-dashboard-btn"
          onClick={() => navigate("/notifications")}
        >
          <FiActivity />
          View Activity
          <FiArrowRight />
        </button>
      </div>

      {/* Market Overview */}
      <div className="sv-dashboard-card">
        <div className="sv-card-header">
          <FiTrendingUp className="sv-card-icon" />
          <h2>Market Overview</h2>
        </div>
        <div className="sv-market-list">
          {marketItems.map((item, i) => (
            <div key={i} className="sv-market-row">
              <span className="sv-market-symbol">{item.symbol}</span>
              <span
                className={
                  item.trend === "up"
                    ? "sv-market-change sv-pos"
                    : item.trend === "down"
                    ? "sv-market-change sv-neg"
                    : "sv-market-change sv-neutral"
                }
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
        <button
          className="sv-dashboard-btn"
          onClick={() => navigate("/exchange")}
        >
          <FiRepeat />
          Open Exchange
          <FiArrowRight />
        </button>
      </div>

      {/* Quick Actions */}
      <div className="sv-dashboard-card">
        <div className="sv-card-header">
          <FiZap className="sv-card-icon" />
          <h2>Quick Actions</h2>
        </div>
        <div className="sv-quick-grid">
          {quickActions.map((action, i) => (
            <button
              key={i}
              className="sv-quick-btn"
              onClick={() => navigate(action.route)}
            >
              <action.icon className="sv-quick-icon" />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <button className="sv-logout-btn" onClick={handleLogout}>
        <FiLogOut />
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
