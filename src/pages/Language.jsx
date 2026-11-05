import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiCheck, FiGlobe } from 'react-icons/fi'
import '../styles/Language.css'

function Language() {
  const navigate = useNavigate()
  const [language, setLanguage] = useState('English')

  return (
    <div className="sv-language-page">
      <button className="sv-back-btn" onClick={() => navigate('/settings')}>
        <FiArrowLeft />
        Back to Settings
      </button>

      <div className="sv-language-header">
        <span className="sv-eyebrow">Preference</span>
        <h1>Language</h1>
        <p>Choose the language used throughout your ScraaVult wallet.</p>
      </div>

      <div className="sv-language-card">
        <div className="sv-language-section-heading">
          <FiGlobe className="sv-language-section-icon" />
          <h2>Select Your Preferred Language</h2>
        </div>

        <select
          className="sv-language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
          <option>German</option>
          <option>Portuguese</option>
        </select>

        <div className="sv-language-notice">
          <h3>Current Language</h3>
          <p>Selected: <strong>{language}</strong></p>
        </div>

        <button className="sv-language-btn" onClick={() => navigate('/settings')}>
          <FiCheck />
          Save Language
        </button>
      </div>
    </div>
  )
}

export default Language
