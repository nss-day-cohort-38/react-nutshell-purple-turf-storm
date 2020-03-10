import moment from "moment";
import React, { useState } from "react";
import NewsManager from "../../modules/NewsManager";
import "./NewsForm.css";

let now = 0;
const NewsForm = props => {
  const [article, setArticle] = useState({ title: "", synopsis: "", url: "", date: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...article };
    stateToChange[evt.target.id] = evt.target.value;
    stateToChange["date"] = moment().format("MMDDYYYY hh:mm:ss a");
    setArticle(stateToChange);
  };

  const constructNewArticle = evt => {
    evt.preventDefault();
    if (article.title === "" || article.synopsis === "" || article.url === "") {
      window.alert("Please fill all fields");
    } else {
      setIsLoading(true);
      NewsManager.post(article).then(() => props.history.push("/news"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="title"
              placeholder="Title"
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="synopsis"
              placeholder="Synopsis"
            />
            <label htmlFor="synopsis">Synopsis</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="url"
              placeholder="url"
            />
            <label htmlFor="url">url</label>
            <input
              type="hidden"
              onChange={handleFieldChange}
              id="date"
              placeholder="date"
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewArticle}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default NewsForm;
