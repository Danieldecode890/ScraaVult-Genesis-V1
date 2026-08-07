import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">

        <h2>ScraaVult</h2>

        <p>
          Privacy • Security • Confidence
        </p>

        <span>
          Built for people who believe their Bitcoin
          should always remain under their control.
        </span>

      </div>

      <div className="footer-links">

        <div>

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/create-vault">
            Create Vault
          </Link>

          <Link to="/enter-vault">
            Enter Vault
          </Link>

        </div>

        <div>

          <h3>Resources</h3>

          <Link to="/market">
            Live Market
          </Link>

          <Link to="/news">
            Bitcoin News
          </Link>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 ScraaVult

      </div>

    </footer>
  );
}

export default Footer;