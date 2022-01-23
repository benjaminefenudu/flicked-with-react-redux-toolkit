import { Link } from "react-router-dom";
import avatar from "../images/avatar.jpg";

const ArticleList = ({ articles, title }) => {
  return (
    <div>
      <div className="create">
        <h2>{title}</h2>
      </div>
      {articles.map((article) => (
        <div className="article-preview" key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <img src={avatar} alt="avatar" />
            <div className="info">
              <h3>{article.title}</h3>
              <span>{`Article by ${article.author}`}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
