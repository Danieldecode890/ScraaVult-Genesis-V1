import { useEffect, useState } from "react";
import  axios from "axios";

function News() {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("");

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

        const sortedArticles = response.data.articles.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
     );

    setArticles(sortedArticles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
},[]);
        
    return (
        <div className="news-page">
    <h1>📰 Bitcoin News</h1>

    <br></br>
    
    <input
        type="text"
        placeholder="🔍 Search Bitcoin news..."
        className="news-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
    <div className="news-list">
     {articles
  .filter((article) => {
    const keyword = search.toLowerCase();

    return (
      article.title?.toLowerCase().includes(keyword) ||
      article.description?.toLowerCase().includes(keyword) ||
      article.source?.name?.toLowerCase().includes(keyword)
    );
  })
  .map((article, index) => (

    <div key={index} className="news-card">

        <p className="news-description">
     {article.description?.slice(0, 120)}...
    </p>

    {article.urlToImage && (
    <img
    src={article.urlToImage}
    alt={article.title}
    className="news-image"
  />
    )}
      <h3>{article.title}</h3>

      <span className ="news-source">
       {article.source.name}
      </span>
        

      <p className="news-date">
        📅{new 
         Date(article.publishedAt).toLocaleDateString()}
      </p>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Full Story →
      </a>
     </div>
    ))}
    </div>
    </div>
    );
}

export default News;