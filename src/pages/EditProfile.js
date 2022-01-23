import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import useInput from "../utils/useInput";
import { editprofile } from "../redux/reducers/user";

const EditProfile = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstname, bindFirstname] = useInput(user.firstname);
  const [surname, bindSurname] = useInput(user.surname);
  const [bio, bindBio] = useInput(user.bio);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      ...user,
      firstname,
      surname,
      bio,
    };
    dispatch(editprofile(userDetails));
    history.push("/profile");
  };

  return (
    <div className="create">
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Firstname:</label>
        <input type="text" {...bindFirstname} required />
        <label>Surname:</label>
        <input type="text" {...bindSurname} required />
        <label>Bio:</label>
        <textarea rows={8} {...bindBio} required />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
