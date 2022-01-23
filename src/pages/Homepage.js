import { useSelector } from "react-redux";

import useFetch from "../utils/useFetch";
import ArticleList from "../components/ArticleList";

const Homepage = () => {
  const user = useSelector((state) => state.user.value);
  const {
    data: articles,
    isLoading,
    error,
  } = useFetch("http://localhost:4000/articles");

  return (
    <div>
      {user ? (
        <p>
          Hi{" "}
          <span style={{ textTransform: "capitalize" }}>{user.firstname}</span>,
        </p>
      ) : (
        <p>Hi,</p>
      )}

      {error && <div>{error}</div>}
      {isLoading && <p>Loading...</p>}
      {articles && <ArticleList title="All Articles!" articles={articles} />}
    </div>
  );
};

export default Homepage;
