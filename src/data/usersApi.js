import axios from "axios";

export default class usersApi {
  static getAllUsers = () => {
    return axios
      .get("http://localhost:3001/users")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  static addUser = (user) => {
    return axios
      .post("http://localhost:3001/users", user)
      .then((res) => {
          console.log("res",res,"user",user)
          return res.data})
      .catch((err) => console.log(err));
  };
}
