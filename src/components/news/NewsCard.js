import React from "react";
import "./News.css";
import moment from "moment"

const NewsCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-title" onClick={() => props.history.push(`/news/${props.article.id}`)}>{props.article.title}</span>
        </h3>
        <h4>
            Posted: {moment(props.article.date, "MMDDYYYY hh:mm:ss a").fromNow()}
        </h4>
      </div>
    </div>
  );
};

export default NewsCard;
