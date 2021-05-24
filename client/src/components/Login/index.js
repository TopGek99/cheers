import { Card, Form, Button } from 'react-bootstrap';
import './style.css';

function Login() {
	return (
		<Card id='login-sign-up'>
			<Card.Body>
				<div id='login'>
					<h3>Login</h3>
					<Form>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
							<Form.Text className='text-muted'>
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
						<Button variant='primary' type='submit'>
							Login
						</Button>
					</Form>
				</div>
				<div id='sign-up'>
					<h3>Sign Up</h3>
					<Form>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
							<Form.Text className='text-muted'>
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
						<Button variant='primary' type='submit'>
							Sign Up
						</Button>
					</Form>
				</div>
			</Card.Body>
		</Card>
	);
}

export default Login;
