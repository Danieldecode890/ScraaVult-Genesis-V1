import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Responsive.css";
import "../styles/LiveMarket.css"
function LiveMarket() {
    const[market, setMarket]= useState(null);
    const isPositive = market && market.price_change_percentage_24h >= 0;
    useEffect(() => {
  const fetchMarket = async () => {
    
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            ids: "bitcoin",
          },
        }
      );

         setMarket(response.data[0]);
     } catch (error) {
         console.error("Failed to fetch market data:", error);
     }
    };

     fetchMarket();
      const interval = setInterval(fetchMarket,30000);
      
      return () => clearInterval(interval);
    }, []);
  return (
    <section className="live-market">

      <div className="market-header">
        <span className="market-tag">
          LIVE MARKET
        </span>

        <h2>
          Bitcoin Market Overview
        </h2>

        <p>
          Real-time Bitcoin data designed to keep you informed before every decision.
        </p>
      </div>

      <div className="market-grid">

        <div className="market-card">
          <h3>Bitcoin Price</h3>
        <p className="market-value">
          {market ? `$${market.current_price.toLocaleString()}` : "Loading..."}
        </p>
        </div>

        <div className="market-card">
          <h3>24h Change</h3>
        <p className={`market-value ${isPositive ? "positive" : "negative"}`}>
         {market
         ? `${isPositive ? "▲" : "▼"} ${market.price_change_percentage_24h.toFixed(2)}%`
         : "Loading..."}
        </p>
        </div>

        <div className="market-card">
          <h3>Market Cap</h3>
          <p className="market-value">
        {market
        ? `$${Number((market.total_volume / 1e9).toFixed(2)).toLocaleString()}B`
        : "Loading..."}
        </p>
        </div>

        <div className="market-card">
          <h3>24h Volume</h3>
          <p className="market-value">
         {market
         ? `$${Number((market.market_cap / 1e9).toFixed(2)).toLocaleString()}B`
        : "Loading..."}
        </p>
        </div>

      </div>

    </section>
  );
}

export default LiveMarket;