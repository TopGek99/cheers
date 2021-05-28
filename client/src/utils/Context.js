import React from "react";

const UserContext = React.createContext({
  userId: null,
  setUserId: function (newId) {
    this.userId = newId;
  },
});

export default UserContext;
