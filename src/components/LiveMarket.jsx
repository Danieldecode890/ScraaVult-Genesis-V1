import { useEffect, useState } from 'react'
import { FiDollarSign, FiTrendingUp, FiTrendingDown, FiBarChart2 } from 'react-icons/fi'
import axios from 'axios'
import './LiveMarket.css'

function LiveMarket() {
  const [market, setMarket] = useState(null)
  const isPositive = market && market.price_change_percentage_24h >= 0

  useEffect(() => {
    const fetchMarket = async () => {
      try {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: { vs_currency: 'usd', ids: 'bitcoin' },
        })
        setMarket(res.data[0])
      } catch (e) {
        // silent fail — UI shows "Loading..."
      }
    }

    fetchMarket()
    const interval = setInterval(fetchMarket, 30000)
    return () => clearInterval(interval)
  }, [])

  const fmt = (val) => (market ? `$${val.toLocaleString()}` : '—')
  const fmtB = (val) => (market ? `$${Number((val / 1e9).toFixed(2)).toLocaleString()}B` : '—')

  return (
    <section className="sv-section sv-market">
      <span className="sv-eyebrow sv-market-eyebrow">
        <span className="sv-live-dot" />
        Live Market
      </span>
      <h2 className="sv-heading">Bitcoin Market Overview</h2>
      <p className="sv-description">
        Real-time Bitcoin data designed to keep you informed before every
        decision.
      </p>

      <div className="sv-market-grid">
        <div className="sv-market-card">
          <div className="sv-market-icon"><FiDollarSign /></div>
          <span className="sv-market-label">Bitcoin Price</span>
          <p className="sv-market-value">{fmt(market?.current_price)}</p>
        </div>

        <div className="sv-market-card">
          <div className="sv-market-icon">
            {isPositive ? <FiTrendingUp /> : <FiTrendingDown />}
          </div>
          <span className="sv-market-label">24h Change</span>
          <p className={`sv-market-value ${isPositive ? 'sv-pos' : 'sv-neg'}`}>
            {market
              ? `${isPositive ? '+' : ''}${market.price_change_percentage_24h.toFixed(2)}%`
              : '—'}
          </p>
        </div>

        <div className="sv-market-card">
          <div className="sv-market-icon"><FiBarChart2 /></div>
          <span className="sv-market-label">Market Cap</span>
          <p className="sv-market-value">{fmtB(market?.market_cap)}</p>
        </div>

        <div className="sv-market-card">
          <div className="sv-market-icon"><FiTrendingUp /></div>
          <span className="sv-market-label">24h Volume</span>
          <p className="sv-market-value">{fmtB(market?.total_volume)}</p>
        </div>
      </div>
    </section>
  )
}

export default LiveMarket
