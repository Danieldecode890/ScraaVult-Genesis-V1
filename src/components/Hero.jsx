import {Link} from "react-router-dom";
function Hero() {
  return (
    <div className="hero">

      <h1>🛡️ ScraaVult</h1>

      <h2>Your Premium Digital Vault</h2>

      <p>
        Store.
        <br />
        Protect.
        <br />
        Grow your digital assets with confidence.
      </p>

      <p className="motto">
    Military Grade Security • Privacy First • Built for Bitcoin
    </p>
    
      <div className="buttons">
        <Link to="/create-vault">
          <button>🔐 Create Your Vault</button>
        </Link>
        <Link to="/enter-vault">
          <button>🔓 Enter Vault</button>
        </Link>
      </div>

    </div>
  );
}

export default Hero;