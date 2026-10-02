import { useState, useEffect } from "react";
import {
  FiArrowDown,
  FiRefreshCw,
  FiTrash2,
  FiActivity,
  FiClock,
  FiTrendingUp,
} from "react-icons/fi";
import "../styles/Exchange.css";

function Exchange() {
  const [amount, setAmount] = useState("");
  const [coin, setCoin] = useState("BTC");
  const [currency, setCurrency] = useState("USD");

  const [result, setResult] = useState("");

  const [prices, setPrices] = useState({});
  const [exchangeRates, setExchangeRates] = useState({});

  const [loading, setLoading] = useState(true);

  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchPrices() {
      setLoading(true);

      try {
        // Crypto prices
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,litecoin&vs_currencies=usd"
        );

        const data = await response.json();

        setPrices({
          BTC: data.bitcoin.usd,
          ETH: data.ethereum.usd,
          USDT: data.tether.usd,
          LTC: data.litecoin.usd,
        });

        // Currency rates
        const currencyResponse = await fetch(
          "https://open.er-api.com/v6/latest/USD"
        );

        const currencyData = await currencyResponse.json();

        setExchangeRates({
          USD: 1,
          NGN: currencyData.rates.NGN,
          EUR: currencyData.rates.EUR,
          GBP: currencyData.rates.GBP,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error loading prices:", error);
        setLoading(false);
      }
    }

    fetchPrices();

    const interval = setInterval(fetchPrices, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleExchange = () => {
    if (loading) {
      alert("Prices are still loading. Please wait a moment.");
      return;
    }

    if (!amount) {
      alert("Please enter an amount.");
      return;
    }

    const cryptoPrice = prices[coin];
    console.log("Coin",);
    console.log("Prices",prices);
    console.log("Selected prices:", prices[coin]);

    if (!cryptoPrice) {
      alert("Crypto price not available.");
      return;
    }

    const rate = exchangeRates[currency];

    if (!rate) {
      alert("Exchange rate not available.");
      return;
    }

    const usdValue = Number(amount) * cryptoPrice;
    const convertedValue = usdValue * rate;

    setResult(convertedValue.toLocaleString());

    setHistory((prev) => [
      {
        coin,
        currency,
        amount,
        result: convertedValue.toLocaleString(),
        time: new Date().toLocaleTimeString(),
      },
      ...prev,
    ]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  if (loading) {
    return (
      <div className="sv-exchange-page">
        <div className="sv-exchange-loading">
          <FiRefreshCw className="sv-exchange-loading-spinner" />
          <p>Loading live prices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sv-exchange-page">
      <div className="sv-exchange-header">
        <div>
          <span className="sv-eyebrow" style={{ marginBottom: "12px" }}>
            Live Conversion
          </span>
          <h1 className="sv-exchange-title">Exchange Center</h1>
          <p className="sv-exchange-subtitle">
            Convert digital assets using live market prices.
          </p>
        </div>
        <div className="sv-exchange-status">
          <span className="sv-exchange-status-dot" />
          Live Market
        </div>
      </div>

      <div className="sv-exchange-card">
        <div className="sv-exchange-summary">
          <div>
            <h2>Convert {coin}</h2>
            <p>Live exchange powered by ScraaVault.</p>
          </div>
          <div className="sv-live-badge">
            <FiActivity className="sv-live-badge-icon" />
            LIVE
          </div>
        </div>

        {/* From */}
        <div className="sv-exchange-form-group">
          <label className="sv-exchange-label">From</label>
          <div className="sv-exchange-select-wrapper">
            <select
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
              className="sv-exchange-select"
            >
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="ETH">Ethereum (ETH)</option>
              <option value="USDT">Tether (USDT)</option>
              <option value="LTC">Litecoin (LTC)</option>
            </select>
          </div>
        </div>

        {/* Swap arrow */}
        <div className="sv-exchange-swap-arrow">
          <FiArrowDown />
        </div>

        {/* To */}
        <div className="sv-exchange-form-group">
          <label className="sv-exchange-label">Convert To</label>
          <div className="sv-exchange-select-wrapper">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="sv-exchange-select"
            >
              <option value="USD">US Dollar (USD)</option>
              <option value="NGN">Nigerian Naira (NGN)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="GBP">British Pound (GBP)</option>
            </select>
          </div>
        </div>

        {/* Amount */}
        <div className="sv-exchange-form-group">
          <label className="sv-exchange-label">Amount</label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            className="sv-exchange-input"
          />
        </div>

        <button
          className="sv-exchange-btn"
          onClick={handleExchange}
          disabled={loading}
        >
          <FiTrendingUp />
          {loading ? "Loading..." : "Exchange"}
        </button>

        {result && (
          <div className="sv-exchange-result">
            <span className="sv-exchange-result-label">Estimated Value</span>
            <h3>{result} {currency}</h3>
          </div>
        )}

        <hr className="sv-exchange-divider" />

        {/* History */}
        <div className="sv-exchange-history-header">
          <h3>
            <FiClock className="sv-exchange-history-icon" />
            Exchange History
          </h3>
          <button
            className="sv-exchange-clear-btn"
            onClick={clearHistory}
          >
            <FiTrash2 />
            Clear History
          </button>
        </div>

        {history.length === 0 ? (
          <p className="sv-exchange-empty">No exchanges yet.</p>
        ) : (
          <div className="sv-exchange-history-list">
            {history.map((item, index) => (
              <div key={index} className="sv-exchange-history-card">
                <div className="sv-exchange-history-top">
                  <span className="sv-exchange-history-pair">
                    {item.coin} → {item.currency}
                  </span>
                  <small className="sv-exchange-history-time">{item.time}</small>
                </div>
                <div className="sv-exchange-history-details">
                  <span>Amount: {item.amount}</span>
                  <span className="sv-exchange-history-result">
                    {item.result} {item.currency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Exchange;
