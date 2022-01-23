import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../redux/reducers/user";
import VerifyUser from "../utils/verifyUser";
import useInput from "../utils/useInput";

const UserLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, bindEmail] = useInput("");
  const [password, bindPassword] = useInput("");

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    VerifyUser(email, password).then(({ message, verified, user }) => {
      if (!verified) {
        setMessage(message);
        setIsLoading(false);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } else {
        setMessage(message);
        setIsLoading(false);
        // Use redux to store the user
        dispatch(login(user));
        history.push("/");
      }
    });
  };

  return (
    <div className="create">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" {...bindEmail} required />
        <label>Password:</label>
        <input type="password" {...bindPassword} required />

        {!isLoading && <button>Login</button>}
        {isLoading && <button disabled>Logging in...</button>}
        {message && <p style={{ marginTop: "16px" }}>{message}</p>}
      </form>

      <p style={{ margin: "16px" }}>Don't yet have an account?</p>
      <Link to="/signup">Click here to register</Link>
    </div>
  );
};

export default UserLogin;
