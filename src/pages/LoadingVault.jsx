import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoadingVault.css";
import logo from "../assets/logo.png";
function LoadingVault() {

    const navigate = useNavigate();

    const [progress, setProgress] = useState(0);

    const [message, setMessage] = useState(
        "Initializing Secure Environment..."
    );

    useEffect(() => {

        const messages = [

            {
                percent: 10,
                text: "Initializing Secure Environment..."
            },

            {
                percent: 25,
                text: "Generating Encryption Keys..."
            },

            {
                percent: 45,
                text: "Encrypting Bitcoin Vault..."
            },

            {
                percent: 65,
                text: "Verifying Security..."
            },

            {
                percent: 85,
                text: "Preparing Recovery System..."
            },

            {
                percent: 100,
                text: "Vault Successfully Created ✓"
            }

        ];

        let current = 0;

        const interval = setInterval(() => {

            current++;

            setProgress(current);

            const currentMessage = messages.findLast(
                item => current >= item.percent
            );

            if (currentMessage) {

                setMessage(currentMessage.text);

            }

            if (current >= 100) {

                clearInterval(interval);

                setTimeout(() => {

                    navigate("/vault-success");

                }, 1200);

            }

        }, 45);

        return () => clearInterval(interval);

    }, [navigate]);

    return (

        <div className="loading-page">

                  <div className="loading-logo">

                <img src={logo} alt="Logo" />
               

                <h1> ScraaVult </h1>

                <p>

                    Creating Your Secure Bitcoin Vault

                </p>
                 </div>

                <div className="progress-container">

                    <div
                        className="progress-fill"
                        style={{
                            width: `${progress}%`
                        }}
                    ></div>

                </div>

                <h2>

                    {progress}%

                </h2>

                <p>

                    {message}

                </p>

            </div>


    );

}

export default LoadingVault;