import "./App.css";
import { useState } from "react";
import API from "./utils/API";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginSignUp from "./components/LoginSignUp";
import User from "./pages/User";
import NavContainer from "./components/NavContainer";
import UserContext from "./utils/Context";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const renderNav = () => {
    if (loggedIn) {
      return <NavContainer />;
    }
  };

  API.getSession().then((session) => {
    setLoggedIn(session.loggedIn);
  });
  return (
    <Router>
      <UserContext.Provider value={userId}>
        {renderNav()}
        <Switch>
          <Route exact path={["/"]}>
            {loggedIn ? <Redirect to="/user" /> : <LoginSignUp />}
          </Route>
          <Route exact path={["/user"]}>
            <User loggedIn={loggedIn} />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
