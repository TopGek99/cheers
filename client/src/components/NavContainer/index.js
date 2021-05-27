import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

function NavContainer() {
	return (
		<Navbar id='navbar' bg='dark' expand='lg'>
			<Navbar.Brand id='brand'>Beer Buddy Clone</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav id='nav' className='mr-auto'>
					<Nav.Link id='beer-link' href='/user'>
						Profile
					</Nav.Link>
					<Nav.Link id='beer-link-1' href='/'>
						Feed
					</Nav.Link>
					<Nav.Link id='beer-link-2' href='/'>
						Log Out
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavContainer;
