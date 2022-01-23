const CheckUserDB = async (email) => {
  let result = await fetch("http://localhost:4000/users")
    .then((res) => res.json())
    .then((users) => {
      let userExists = users.filter((user) => {
        return user.email === email;
      });
      if (userExists.length !== 0) {
        // if user already exists, return true
        return true;
      } else {
        // if user doesn't exist, return false
        return false;
      }
    });
  return result;
};

export default CheckUserDB;
