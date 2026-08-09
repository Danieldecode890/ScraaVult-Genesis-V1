import { useEffect, useState } from 'react'
import { FiActivity } from 'react-icons/fi'
import axios from 'axios'
import './FearGreed.css'

function FearGreed() {
  const [fg, setFg] = useState(null)

  useEffect(() => {
    const fetchFg = async () => {
      try {
        const res = await axios.get('https://api.alternative.me/fng/')
        setFg(res.data.data[0])
      } catch (e) {
        // silent fail
      }
    }
    fetchFg()
  }, [])

  const value = fg ? parseInt(fg.value, 10) : 0
  const color =
    value >= 75 ? '#3ddc84' :
    value >= 55 ? '#84cc16' :
    value >= 45 ? '#f4b04d' :
    value >= 25 ? '#f97316' : '#ff5c5c'

  return (
    <section className="sv-section sv-fg-section">
      <span className="sv-eyebrow sv-fg-eyebrow">
        <FiActivity />
        Market Sentiment
      </span>
      <h2 className="sv-heading">Fear &amp; Greed Index</h2>
      <p className="sv-description">
        A snapshot of market emotion — from extreme fear to extreme greed.
      </p>

      {fg ? (
        <div className="sv-fg-card">
          <div className="sv-fg-gauge">
            <div className="sv-fg-gauge-fill" style={{ width: `${value}%`, background: color }} />
          </div>
          <div className="sv-fg-display">
            <span className="sv-fg-value" style={{ color }}>{fg.value}</span>
            <span className="sv-fg-label">{fg.value_classification}</span>
          </div>
          <div className="sv-fg-scale">
            <span>Extreme Fear</span>
            <span>Extreme Greed</span>
          </div>
        </div>
      ) : (
        <div className="sv-fg-loading">
          <div className="sv-chart-spinner" />
          <span>Loading sentiment data...</span>
        </div>
      )}
    </section>
  )
}

export default FearGreed
