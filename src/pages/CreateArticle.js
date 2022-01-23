import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import useInput from "../utils/useInput";

const CreateArticle = () => {
  const user = useSelector((state) => state.user.value);
  const [title, bindTitle] = useInput("");
  const [body, bindBody] = useInput("");
  const [author, bindAuthor] = useInput(user.firstname);

  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = { title, body, author };
    setIsLoading(true);

    fetch("http://localhost:4000/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    }).then(() => {
      console.log("new article created");
      setIsLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Article</h2>
      <form onSubmit={handleSubmit}>
        <label>Article title:</label>
        <input type="text" {...bindTitle} required />
        <label>Article body:</label>
        <textarea rows={10} {...bindBody} required></textarea>
        <label>Article author: </label>
        <input type="text" {...bindAuthor} />

        {!isLoading && <button>Add Article</button>}
        {isLoading && <button disabled>Adding Article...</button>}
      </form>
    </div>
  );
};

export default CreateArticle;
