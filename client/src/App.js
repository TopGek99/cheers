import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignUp from "./components/LoginSignUp";
import Title from "./components/Title";

function App() {
  return (
    <Router>
      <Container id="container" fluid>
        <Switch>
          <Route exact path={["/", "/login"]}>
            <Title />
            <LoginSignUp />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
