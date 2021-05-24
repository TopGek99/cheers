import "./App.css";
import { Container } from "react-bootstrap";
import Login from "./components/Login";
import Title from "./components/Title";

function App() {
  return (
    <Container id="container" fluid>
      <Title />
      <Login />
    </Container>
  );
}

export default App;
