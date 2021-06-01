import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

function Login({ loggedIn, setLoggedIn }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    API.logIn({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }).then(() => {
      setLoggedIn(true);
    });
  };
  return (
    <div>
      <h3>Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        {loggedIn ? <Redirect to="/user" /> : ""}
      </Form>
    </div>
  );
}

export default Login;
