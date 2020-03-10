import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import NewsManager from "../../modules/NewsManager";

const NewsList = (props) => {
  const [articles, setArticles] = useState([]);

  const getNews = () => {
    return NewsManager.getAll().then(allNews => {
      setArticles(allNews);
    });
  };

  const deleteArticle = id => {
    NewsManager.delete(id).then(() =>
      NewsManager.getAll().then(setArticles)
    );
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
    <div className="container-cards">
      {articles.map(article => (
        <NewsCard
          key={article.id}
          article={article}
          deleteArticle={deleteArticle}
          {...props}
        />
      ))}
    </div>
    <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/news/new");
          }}
        >
          Post News
        </button>
      </section>
    </>
  );
};
export default NewsList;
