import React, { useState, useEffect } from "react"
import NewsManager from "../../modules/NewsManager"
import "./NewsForm.css"

const NewsEditForm = props => {
  const [article, setArticle] = useState({ title: "", synopsis: "", url: "", date: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleFieldChange = evt => {
    const stateToChange = { ...article };
    stateToChange[evt.target.id] = evt.target.value;
    setArticle(stateToChange);
  };

  const updateExistingArticle = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedArticle = {
      id: props.match.params.articleId,
      title: article.title,
      synopsis: article.synopsis,
      url: article.url,
      date: article.date
    };

    NewsManager.update(editedArticle)
      .then(() => props.history.push("/news"))
  }

  useEffect(() => {
    NewsManager.get(props.match.params.articleId)
      .then(article => {
        setArticle(article);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={article.title}
            />
            <label htmlFor="title">Article title</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="synopsis"
              value={animal.synopsis}
            />
            <label htmlFor="synopsis">Synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="url"
              value={animal.url}
            />
            <label htmlFor="url">URL</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingArticle}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default NewsEditForm