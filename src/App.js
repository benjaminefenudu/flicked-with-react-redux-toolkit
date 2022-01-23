import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.css";
import Header from "./components/Header";

import Homepage from "./pages/Homepage";
import CreateArticle from "./pages/CreateArticle";
import ArticleDetails from "./pages/ArticleDetails";
import NotFound from "./pages/NotFound";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile"
import RedirectToLogin from "./components/RedirectToLogin";

function App() {
  const user = useSelector((state) => state.user.value);

  return (
    <Router>
      <div className="App">
        <Header />

        <div className="content">
          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route path="/articles/:id" component={user ? ArticleDetails : RedirectToLogin} />
            <Route path="/create" component={user ? CreateArticle : RedirectToLogin} />
            <Route path="/profile" component={user ? Profile : RedirectToLogin} />
            <Route path="/editprofile" component={user ? EditProfile : RedirectToLogin} />

            <Route path="/signup" component={UserSignup} />
            <Route path="/login" component={UserLogin} />

            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
