import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginSignUp from "./components/LoginSignUp";
import User from "./components/User";
import NavContainer from "./components/NavContainer";
import API from "./utils/API";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const setAuth = async () => {
    const user = await API.getAuth();
    setLoggedIn(user.data.userId);
  };

  useEffect(() => {
    setAuth();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <Redirect to="/user" />
          ) : (
            <LoginSignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          )}
        </Route>
        <Route exact path="/user">
          <NavContainer setLoggedIn={setLoggedIn} />
          {loggedIn ? <User /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
