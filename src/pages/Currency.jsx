import { useState } from 'react'
import { FiArrowLeft, FiCheck, FiDollarSign } from 'react-icons/fi'
import '../styles/Language.css'

function Currency() {
  const [currency, setCurrency] = useState('USD')

  return (
    <div className="sv-currency-page">
      <div className="sv-currency-header">
        <span className="sv-eyebrow">Preference</span>
        <h1>Preferred Currency</h1>
        <p>
          Choose how balances and asset values are displayed throughout your
          ScraaVult wallet.
        </p>
      </div>

      <div className="sv-currency-card">
        <div className="sv-currency-section-heading">
          <FiDollarSign className="sv-currency-section-icon" />
          <h2>Select Your Currency</h2>
        </div>

        <select
          className="sv-currency-select"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>NGN</option>
          <option>JPY</option>
          <option>CAD</option>
          <option>AUD</option>
        </select>

        <div className="sv-currency-notice">
          <h3>Current Currency</h3>
          <p>Selected: <strong>{currency}</strong></p>
        </div>

        <button className="sv-currency-btn">
          <FiCheck />
          Save Currency
        </button>
      </div>
    </div>
  )
}

export default Currency
