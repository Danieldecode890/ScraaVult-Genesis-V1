import { useEffect, useState } from 'react'
import { FiExternalLink, FiCalendar } from 'react-icons/fi'
import axios from 'axios'
import '../components/BitcoinNews.css'

function News() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('https://api.coingecko.com/api/v3/news', {
          params: { category: 'bitcoin' },
        })
        setArticles(res.data?.data || [])
      } catch (e) {
        try {
          const fallback = await axios.get('https://api.coingecko.com/api/v3/status_updates', {
            params: { category: 'general', per_page: 10 },
          })
          setArticles(fallback.data?.status_updates || [])
        } catch (e2) {
          // silent
        }
      }
      setLoading(false)
    }
    fetchNews()
  }, [])

  return (
    <section className="sv-section">
      <span className="sv-eyebrow">News</span>
      <h2 className="sv-heading">Bitcoin News</h2>
      <p className="sv-description">
        The latest Bitcoin headlines from around the world.
      </p>

      {loading ? (
        <div className="sv-fg-loading" style={{ marginTop: '48px' }}>
          <div className="sv-chart-spinner" />
          <span>Loading news...</span>
        </div>
      ) : articles.length > 0 ? (
        <div className="sv-news-list" style={{ maxWidth: '760px' }}>
          {articles.map((article, i) => {
            const title = article.title || article.description || 'Bitcoin Update'
            const source = article.author || article.user || 'CoinGecko'
            const url = article.url || '#'
            const date = article.updated_at || article.created_at || ''

            return (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="sv-news-card"
              >
                <div className="sv-news-body">
                  <h3>{title}</h3>
                  <div className="sv-news-meta">
                    <span className="sv-news-source">{source}</span>
                    {date && (
                      <span className="sv-news-date">
                        <FiCalendar className="sv-news-date-icon" />
                        {new Date(date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
                <FiExternalLink className="sv-news-ext" />
              </a>
            )
          })}
        </div>
      ) : (
        <p style={{ marginTop: '48px', color: 'var(--sv-text-muted)', fontSize: '0.9rem' }}>
          Unable to load news at this time. Please check back later.
        </p>
      )}
    </section>
  )
}

export default News
