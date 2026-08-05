import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/scraavult-logo.png";
import "../styles/VerifyRecoveryPhrase.css";

function VerifyRecoveryPhrase() {

    const navigate = useNavigate();

    const [word3, setWord3] = useState("");
    const [word7, setWord7] = useState("");
    const [word11, setWord11] = useState("");

    const handleVerify = () => {

        // Backend verification will come later

        navigate("/dashboard");

    };

    return (

        <div className="verify-page">

            <div className="verify-card">

                <div className="verify-logo">

                    <img
                        src={logo}
                        alt="ScraaVault Logo"
                    />

                </div>

                <h1 className="verify-title">

                    Verify Recovery Phrase

                </h1>

                <p className="verify-subtitle">

                    Confirm the missing recovery words
                    before entering your vault.

                </p>

                <div className="verify-score">

                    <div className="verify-circle">

                        98%

                    </div>

                    <div>

                        <h3>Security Score</h3>

                        <p>

                            Recovery Protection Active

                        </p>

                    </div>

                </div>
                <div className="verify-form">

                    <div className="verify-input-card">

                        <label>

                            Recovery Word #3

                        </label>

                        <input
                            type="text"
                            placeholder="Enter recovery word"
                            value={word3}
                            onChange={(e) => setWord3(e.target.value)}
                        />

                    </div>

                    <div className="verify-input-card">

                        <label>

                            Recovery Word #7

                        </label>

                        <input
                            type="text"
                            placeholder="Enter recovery word"
                            value={word7}
                            onChange={(e) => setWord7(e.target.value)}
                        />

                    </div>

                    <div className="verify-input-card">

                        <label>

                            Recovery Word #11

                        </label>

                        <input
                            type="text"
                            placeholder="Enter recovery word"
                            value={word11}
                            onChange={(e) => setWord11(e.target.value)}
                        />

                    </div>

                </div>

                <div className="verify-warning">

                    <h3>

                        🛡 Security Reminder

                    </h3>

                    <p>

                        ScraaVault never stores your Recovery Phrase.

                    </p>

                    <p>

                        Never share these words with anyone.

                    </p>

                    <p>

                        This verification protects your Bitcoin forever.

                    </p>

                </div>

                <button
                    className="verify-btn"
                    onClick={handleVerify}
                >

                    Verify Recovery Phrase

                </button>

            </div>

        </div>

    );

}

export default VerifyRecoveryPhrase;