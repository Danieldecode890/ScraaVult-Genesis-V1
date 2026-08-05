import { Link } from "react-router-dom";
import logo from "../assets/scraavult-logo.png";
function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <div className="logo-placeholder"></div>

        <div className="logo">
          <img src={logo} alt="ScraaVult Logo" />
                 
            <span>ScraaVult</span>
            </div>
      </div>

      <div className="nav-links">

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