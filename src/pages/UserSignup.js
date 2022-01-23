import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import CheckUserDB from "../utils/checkUserDB";
import useInput from "../utils/useInput";

const CreateUser = async (user) => {
  await fetch("http://localhost:4000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(() => console.log("Created account successfully"))
    .catch((err) => console.log(err));
};

const UserSignup = () => {
  const [firstname, bindFirstname] = useInput("");
  const [surname, bindSurname] = useInput("");
  const [email, bindEmail] = useInput("");
  const [password, bindPassword] = useInput("");
  const [confirmPassword, bindConfirmPassword] = useInput("");
  const [bio, bindBio] = useInput("");

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setMessage("Password doesn't match");
      setIsLoading(false);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      return;
    }

    const user = {
      firstname: firstname.trim().toLowerCase(),
      surname: surname.trim().toLowerCase(),
      email: email.trim().toLowerCase(),
      bio: bio.trim(),
      password: password,
    };

    CheckUserDB(email).then((userExists) => {
      if (userExists) {
        setIsLoading(false);
        setMessage("User already exists!");
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } else {
        CreateUser(user).then(() => {
          setMessage("Your account has been created!");
          setIsLoading(false);
          setTimeout(() => {
            history.push("/login");
          }, 2000);
        });
      }
    });
  };

  return (
    <div className="create">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Firstname:</label>
        <input type="text" {...bindFirstname} required />
        <label>Surname:</label>
        <input type="text" {...bindSurname} required />
        <label>Email:</label>
        <input type="email" {...bindEmail} required />
        <label>Password:</label>
        <input type="password" {...bindPassword} required />
        <label>Confirm Password:</label>
        <input type="password" {...bindConfirmPassword} required />
        <label>Bio:</label>
        <textarea rows={8} {...bindBio} required />

        {!isLoading && <button>Sign Up</button>}
        {isLoading && <button disabled>Signing Up...</button>}
        {message && <p style={{ marginTop: "16px" }}>{message}</p>}
      </form>

      <p style={{ margin: "16px" }}>Already have an account?</p>
      <Link to="/login">Click here to login</Link>
    </div>
  );
};

export default UserSignup;
