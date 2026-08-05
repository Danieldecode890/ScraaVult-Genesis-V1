import { Link } from "react-router-dom";
import logo from "../assets/scraavult-logo.png";
import "../styles/Responsiive.css";
function Hero() {

  return (

    <section className="hero">

      <span className="hero-tag">
        PRIVACY • SECURITY • CONFIDENCE
      </span>

     <img
     src={logo}
     alt="ScraaVult Logo"
     className="hero-logo"
     />
      <h1>
        ScraaVult
      </h1>

      <h2>
        YOUR BITCOIN.
        <br />
        YOUR KEYS.
        <br />
        YOUR VAULT.
      </h2>

            <p className="hero-text">
       Protect your Bitcoin with institutional-grade 
       privacy, security, and complete ownership.
       Built for people who believe their keys 
       should never leave their hands. 
        
        

      </p>

      <div className="buttons">

        <Link to="/create-vault">
          <button>
            Create Vault
          </button>
        </Link>

        <Link to="/enter-vault">
          <button>
            Enter Vault
          </button>
        </Link>

      </div>

      <div className="trust-grid">
      </div>

    </section>

  );

}

export default Hero;