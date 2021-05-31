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
import User from "./components/User";
import NavContainer from "./components/NavContainer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  //   const [userId, setUserId] = useState(null);

  //   useEffect(() => {
  API.getAuth().then((session) => {
    if (session.userId) {
      setLoggedIn(true);
    }
  });
  //   }, []);

  const renderNav = () => {
    if (loggedIn) {
      return <NavContainer />;
    }
  };

  return (
    <Router>
      {renderNav()}
      <Switch>
        <Route exact path={["/"]}>
          {loggedIn ? <Redirect to="/user" /> : <LoginSignUp />}
        </Route>
        <Route exact path={["/user"]}>
          <NavContainer />
          <User />
          {/* {loggedIn ? <User /> : <Redirect to="/" />} */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
