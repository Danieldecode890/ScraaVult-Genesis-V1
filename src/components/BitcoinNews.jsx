import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiExternalLink, FiArrowRight, FiCalendar } from 'react-icons/fi'
import axios from 'axios'
import './BitcoinNews.css'

function BitcoinNews() {
  const navigate = useNavigate()
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('https://api.coingecko.com/api/v3/news', {
          params: { category: 'bitcoin' },
        })
        setArticles(res.data?.data?.slice(0, 3) || [])
      } catch (e) {
        try {
          const fallback = await axios.get('https://api.coingecko.com/api/v3/status_updates', {
            params: { category: 'general', per_page: 3 },
          })
          setArticles(fallback.data?.status_updates?.slice(0, 3) || [])
        } catch (e2) {
          // silent fail — section just won't show articles
        }
      }
    }
    fetchNews()
  }, [])

  if (!articles.length) return null

  return (
    <section className="sv-section sv-news-section">
      <span className="sv-eyebrow">Latest News</span>
      <h2 className="sv-heading">Bitcoin News</h2>
      <p className="sv-description">
        Stay informed with the latest Bitcoin headlines from around the world.
      </p>

      <div className="sv-news-list">
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

      <div className="sv-news-footer">
        <button className="sv-news-more" onClick={() => navigate('/news')}>
          View More News
          <FiArrowRight className="sv-news-more-icon" />
        </button>
      </div>
    </section>
  )
}

export default BitcoinNews
