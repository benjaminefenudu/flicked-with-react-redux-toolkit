import React from "react";
import { useParams, useHistory } from "react-router-dom";

import useFetch from "../utils/useFetch";

const ArticleDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: article,
    isLoading,
    error,
  } = useFetch("http://localhost:4000/articles/" + id);

  const handleDelete = () => {
    fetch("http://localhost:4000/articles/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="article-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <article>
          <h2>{article.title}</h2>
          <p>Article by {article.author}</p>
          <div>{article.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default ArticleDetails;
