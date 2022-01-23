import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/user";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  return (
    <div className="navbar">
      <h1>Flicked</h1>

      <div className="links">
        <Link to="/" className="href">
          Home
        </Link>

        {user ? (
          <>
            <Link to="/create" className="href">
              Create Article
            </Link>
            <Link to="/profile" className="href">
              Profile
            </Link>
            <Link
              to="/login"
              className="href"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="href">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
