import "../styles/Responsive.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/FearGreed.css";
function FearGreed() {
  const [fearGreed, setFearGreed] = useState(null);

  useEffect(() => {
    const fetchFearGreed = async () => {
      try {
        const response = await axios.get(
          "https://api.alternative.me/fng/"
        );

        setFearGreed(response.data.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFearGreed();
  }, []);

  return (
    <section className="fear-greed">
      <h2>Fear & Greed Index</h2>

      {fearGreed ? (
        <div className="fear-card">
          <h3>{fearGreed.value}</h3>
          <p>{fearGreed.value_classification}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default FearGreed;