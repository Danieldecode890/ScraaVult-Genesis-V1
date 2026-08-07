import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/scraavult-logo.png";
import "../styles/Responsive.css";
import "../styles/Navabar.css";
function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">

      <div className="logo-section">
        <div className="logo-placeholder"></div>

        <div className="logo">
          <img src={logo} alt="ScraaVult Logo" />
                 
            <span>ScraaVult</span>
            </div>
      </div>

      <button
      className="menu-btn"
      onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
          </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/create-vault">
          <button>Create Vault</button>
        </Link>

        <Link to="/enter-vault">
          <button>Enter Vault</button>
        </Link>

        <button onClick={toggleTheme}>
          {theme === "dark"
            ? "☀ Light"
            : "🌙 Dark"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;