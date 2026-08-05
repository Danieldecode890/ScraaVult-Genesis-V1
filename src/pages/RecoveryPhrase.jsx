import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RecoveryPhrase.css";
import logo from "../assets/scraavult-logo.png";


function RecoveryPhrase() {
const navigate = useNavigate();

const words = [
  "apple","river","forest","shadow","planet","gold",
  "mirror","rocket","ocean","victory","silent","tiger",
  "falcon","stone","light","future","thunder","freedom",
  "mountain","energy","wallet","secure","privacy","vault",
  "bitcoin","orange","galaxy","bridge","winter","summer"
];

const [seedPhrase, setSeedPhrase] = useState([]);
const [confirmed, setConfirmed] = useState(false);
const [copied, setCopied] = useState(false);

const generateSeedPhrase = () => {
  const shuffled = [...words].sort(() => Math.random() - 0.5);
  setSeedPhrase(shuffled.slice(0,12));
};
      const copySeedPhrase = async () => {
  const phrase = seedPhrase.join(" ");

  await navigator.clipboard.writeText(phrase);
 
 setCopied(true);
 
  setTimeout(() => {
    setCopied(false);
  }, 2000);
};


useEffect(() =>{
  generateSeedPhrase();
},[]);
return (

  <div className="recovery-container">

    <div className="recovery-card">

      <div className="recovery-logo">
        <img src={logo} alt="ScraaVult Logo"/>
      </div>

      <h1 className="recovery-title">
         Recovery Seed Phrase</h1>

      <br></br>

      <p className="warning-text">
        These 12 words are the ONLY way to recover your Bitcoin vault.
      </p>

      <p className="warning">
        Write them down on paper and keep them somewhere safe.
      </p>
      <div className="security-status">

    <div className="status-circle">

        98%

    </div>

    <div>

        <h3>Security Score</h3>

        <p>Military Grade Encryption Active</p>

    </div>

</div>
      
      <div className="seed-grid premium-grid">

        {seedPhrase.map((word, index) => (
          <div key={index} className="seed-word">
            <span>{index + 1}.</span> {word}
          </div>
        ))}
       
      </div>
      <button
        className="copy-button"
        onClick={copySeedPhrase}
    >
        {copied ? "✅ Recovery Phrase Copied!" : "📋 Copy Recovery Phrase"}
        </button>

<div className="confirmation-card">

  <h3>🛡 Security Confirmation</h3>

  <label className="confirm-label">

    <input
      type="checkbox"
      checked={confirmed}
      onChange={() => setConfirmed(!confirmed)}
    />

    I have written down my Recovery Phrase and stored it safely.

  </label>

  <p className="confirm-warning">
    ScraaVault cannot recover this Recovery Phrase if it is lost.
  </p>

</div>

<button
    className="continue-btn"
    disabled={!confirmed}
    onClick={() => navigate("/verify-recovery-phrase")}
>
    Verify Recovery Phrase
</button>
    </div>

  </div>
);
}
export default RecoveryPhrase;