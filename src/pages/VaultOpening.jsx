import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VaultSVG from "../components/VaultSVG";
import "../styles/Responsive.css";

function VaultOpening() {
      const SPEED = 1000;

    const navigate = useNavigate();

    const [stage, setStage] = useState(0);

    useEffect(() => {

        setStage(0);

        const sequence = [

            setTimeout(() => setStage(1), SPEED * 1),

            setTimeout(() => setStage(2), SPEED * 3),

            setTimeout(() => setStage(3), SPEED * 5),

            setTimeout(() => setStage(4), SPEED * 7),

            setTimeout(() => setStage(5), SPEED * 9),
            
           setTimeout(() => {
            navigate("/vault-success");
           },SPEED * 11),
            
        ];
        
        return () => {

            sequence.forEach(clearTimeout);

        };

    }, [navigate]);

      return (

        <div className="vault-opening">

            <div className="vault-content">

                <h2>
                    Opening Your Secure Vault...
                </h2>

                <VaultSVG stage={stage} />

            </div>

        </div>

    );

}

export default VaultOpening;