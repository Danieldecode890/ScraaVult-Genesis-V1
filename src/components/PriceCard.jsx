import { useEffect, useState } from "react";

function PriceCard() {
  const [price, setPrice] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
      .then((response) => response.json())
      .then((data) => {
        setPrice(
          "$"+ 
          Number(data.bitcoin.usd).toLocaleString("en-US"
          ,{
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
       })
           );
      })
      .catch(() => {
        setPrice("Unable to load");
      });
  }, []);

  return (
    <div className="card">
      <h3>💰 Live Bitcoin Price</h3>
      <h2>{price}</h2>
      <p>Updated just now</p>
    </div>
  );
}

export default PriceCard;