import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const history = useHistory()

  return (
    <>
      <div className="create">
        <h2>Your Profile</h2>
        <p>Firstname: {user.firstname} </p>
        <p>Lastname: {user.surname} </p>
        <p>Email: {user.email} </p>
        <p>Bio: {user.bio} </p>
        <button
        onClick={()=> {
          history.push("/editprofile")
        }}
        >Edit Profile</button>
      </div>
    </>
  );
}

export default Profile;
