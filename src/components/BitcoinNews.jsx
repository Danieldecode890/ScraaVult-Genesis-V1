import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Responsive.css";

function BitcoinNews() {
    const navigate = useNavigate();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
            "https://newsapi.org/v2/everything",
            {
                params:{
                 q: "bitcoin",
                 apiKey:"8e12395b6c0f4579a3f40fcdb30ac7bd",
                },
            }
        );
       

        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="bitcoin-news">
      <h2>📰 Latest Bitcoin News</h2>

      {articles.slice(0,3).map((article, index) => (
        <div key={index} className="news-card">
          <h3>{article.title}</h3>

          <p>{article.source.name}</p>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
                {new
                Date(article.publishedAt).toLocaleDateString()}
            </p>
            Read More →
          </a>
        </div>
      ))}
      <div clasName="news-footer">
        <button 
        className="view-news-btn"
        onClick={() => navigate("/news")}
        >
       View More News →
        </button>
       </div>
    </section>
  );
}

export default BitcoinNews;