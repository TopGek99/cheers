import { Card, Container } from 'react-bootstrap';
import './style.css';
import Title from '../Title';
import Login from '../Login';
import SignUp from '../SignUp';

function LoginSignUp() {
	return (
		<Container fluid>
			<Title />
			<Card id='login-sign-up'>
				<Card.Body>
					<Login />
					<SignUp />
				</Card.Body>
			</Card>
		</Container>
	);
}

export default LoginSignUp;
