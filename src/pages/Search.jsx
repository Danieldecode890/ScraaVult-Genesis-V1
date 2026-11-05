import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import '../styles/Language.css'

function Search() {
  const [search, setSearch] = useState('')

  return (
    <div className="sv-search-page">
      <div className="sv-search-header">
        <span className="sv-eyebrow">Vault lookup</span>
        <h1>Search</h1>
        <p>Find transactions, assets, and activity across your vault.</p>
      </div>

      <div className="sv-search-card">
        <div className="sv-search-input-wrapper">
          <FiSearch className="sv-search-input-icon" />
          <input
            type="text"
            placeholder="Search your vault..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="sv-search-input"
          />
        </div>

        {search === '' ? (
          <p className="sv-search-empty">Start typing to search...</p>
        ) : (
          <div className="sv-search-result">
            <h3>Results</h3>
            <p>Searching for: <strong>{search}</strong></p>
            <p>More search features will be available as your ScraaVult grows.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
