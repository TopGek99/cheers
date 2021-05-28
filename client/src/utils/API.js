import axios from "axios";

const API = {
  // Gets all Users
  getSession: function () {
    return axios.get("api/users/session");
  },
  // Gets the User with the given id
  getUser: function (userData) {
    return axios
      .post("api/users/login/", userData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  logOut: function () {
    return axios
      .post("api/users/logout")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  saveUser: function (user) {
    console.log(user);
    return axios
      .post("api/users/", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default API;
