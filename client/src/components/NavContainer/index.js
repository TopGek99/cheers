import { Navbar, Nav } from "react-bootstrap";
import API from "../../utils/API";

function NavContainer({ setLoggedIn }) {
  const logOut = () => {
    API.logOut();
    setLoggedIn("");
  };

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand className="px-3">Cheers!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 mr-auto justify-content-between">
          <div className="d-flex">
            <Nav.Link href="/user">Profile</Nav.Link>
          </div>
          <div>
            <Nav.Link onClick={logOut}>Log Out</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavContainer;
