import React, { useState, useEffect } from "react";
import NewsManager from "../../modules/NewsManager";
import "./NewsDetail.css";

const NewsDetail = props => {
  const [article, setArticle] = useState({ title: "", synopsis: "", url: "", date: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    NewsManager.get(props.articleId).then(article => {
      setArticle({
        title: article.title,
        synopsis: article.synopsis,
        url: article.url,
        date: article.date,
      });
      setIsLoading(false);
    });
  }, [props.articleId]);

  const handleDelete = () => {
  setIsLoading(true);
  NewsManager.delete(props.articleId).then(() =>
    props.history.push("/news")
  );
};
 
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span style={{ color: "darkslategrey" }}>{article.title}</span>
        </h3>
        <p>{article.synopsis}</p>
        <a href={`https://${article.url}`} target="_blank">{article.url}</a>
        <button
          type="button"
          onClick={() => props.history.push(`/news/${props.articleId}/edit`)}
        >
          Edit
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
        <button type="button" disabled={isLoading} onClick={() => props.history.push(`/news`)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NewsDetail;