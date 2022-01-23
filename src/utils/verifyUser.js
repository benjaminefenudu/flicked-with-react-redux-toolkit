const VerifyUser = async (email, password, res) => {
  let result = await fetch("http://localhost:4000/users/")
    .then((res) => res.json())
    .then((users) => {
      let userExists = users.filter((user) => {
        return user.email === email;
      });
      if (userExists.length !== 0) {
        // if user already exists, check password
        let message, verified, user;

        // if password is incorrect
        if (userExists[0].password !== password) {
          message = "Invalid password";
          verified = false;
        } else {
          // if password is correct
          message = "Logged in successfully";
          verified = true;
          user = userExists[0];
        }
        return { message, verified, user };
      } else {
        // if user doesn't exist, return false
        let message = "User doesn't exist";
        let verified = false;
        return { message, verified };
      }
    });
  return result;
};

export default VerifyUser;
