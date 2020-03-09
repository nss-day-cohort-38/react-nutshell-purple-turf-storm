import React from "react";
import "./News.css";
import { Link } from "react-router-dom";

const NewsCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-title">{props.article.title}</span>
        </h3>
        <Link to={`/news/${props.article.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/news/${props.article.id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteArticle(props.article.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
