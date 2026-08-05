import { useState, useEffect } from "react";
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
  return <h2>Loading live prices...</h2>;
}

return (
  <div className="page">
    <div className="exchange-header">

    <div>

        <h1 className="exchange-title">

            Exchange Center

        </h1>

        <p className="exchange-subtitle">

            Convert digital assets using live market prices.

        </p>

    </div>

    <div className="market-status">

        🟢 Live Market

    </div>

</div>

    <div className="wallet-card
    exchange-card">
      <div className="exchange-summary">

    <div>

        <h2>

            Convert {coin}

        </h2>

        <p>

            Live exchange powered by ScraaVault.

        </p>

    </div>

    <div className="live-badge">

        LIVE

    </div>

</div>


      <label className="exchange-label">
        From

      </label>

      <select
        value={coin}
        onChange={(e) => setCoin(e.target.value)}
      >
        <option value="BTC">Bitcoin (BTC)</option>
        <option value="ETH">Ethereum (ETH)</option>
        <option value="USDT">Tether (USDT)</option>
        <option value="LTC">Litecoin (LTC)</option>
      </select>

      <br />
      <br />

      <label className="exchange-label">
        Convert To

      </label>

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">US Dollar (USD)</option>
        <option value="NGN">Nigerian Naira (NGN)</option>
        <option value="EUR">Euro (EUR)</option>
        <option value="GBP">British Pound (GBP)</option>
      </select>

      <br />
      <br />

      <label className="exchange-label">

        Amount
        
        </label>

      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={handleExchange}
        disabled={loading}
      >
        {loading ? "Loading..." : "💱 Exchange"}
      </button>

      <br />
      <br />

      {result && (
        <h3>
          Estimated Value: {result} {currency}
        </h3>
      )}

      <hr />

      <h3 className="history-title">
        Exchanges History
        </h3>

      <button onClick={clearHistory}>
        🗑️ Clear History
      </button>

      {history.length === 0 ? (
        <p>No exchanges yet.</p>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            className="history-card premium-history"
          >
            <strong>{item.coin}</strong> → {item.currency}

            <br />

            Amount: {item.amount}

            <br />

            Result: {item.result} {item.currency}

            <br />

            <small>{item.time}</small>

            <hr />
          </div>
        ))
      )}
    </div>
  </div>
);
}

export default Exchange;