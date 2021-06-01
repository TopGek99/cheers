import axios from "axios";

const API = {
  getAuth: function () {
    return axios.get("api/users/session");
  },
  logIn: function (userData) {
    return axios
      .post("api/users/login", userData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getUserById: function (userId) {
    return axios.get("api/users/" + userId);
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
    return axios.post("api/users/", user).then((response) => {
      console.log(response);
    });
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  saveDrink: function (drink) {
    return axios.post("api/users/drinks", drink).then((response) => {
      console.log(response);
    });
    //   .catch((error) => {
    //     console.error(error);
    //   });
  },
};

export default API;
