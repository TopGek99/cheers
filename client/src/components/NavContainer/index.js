import { Navbar, Nav } from "react-bootstrap";
import API from "../../utils/API";

function NavContainer() {
  const logOut = () => {
    API.logOut();
  };

  return (
    <Navbar id="navbar" bg="dark" expand="lg">
      <Navbar.Brand id="brand">Cheers!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="nav" className="mr-auto justify-content-between">
          <div className="d-flex">
            <Nav.Link id="beer-link" href="/user">
              Profile
            </Nav.Link>
            <Nav.Link id="beer-link-1" href="/">
              Feed
            </Nav.Link>
          </div>
          <div>
            <Nav.Link onClick={logOut} id="beer-link-2" href="/">
              Log Out
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavContainer;
