import { Card } from "react-bootstrap";
import "./style.css";
import Login from "../Login";
import SignUp from "../SignUp";

function LoginSignUp() {
  return (
    <Card id="login-sign-up">
      <Card.Body>
        <Login />
        <SignUp />
      </Card.Body>
    </Card>
  );
}

export default LoginSignUp;
