import './App.css';
import { useState } from 'react';
import API from './utils/API';
import { Container } from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import LoginSignUp from './components/LoginSignUp';
import User from './pages/User';

function App() {
	const [loggedIn, setLoggedIn] = useState([]);
	// const [userId, setUserId] = useState([]);

	API.getSession().then((session) => {
		setLoggedIn(session.loggedIn);
		// setUserId(session.userId);
	});
	return (
		<Router>
			<Container id='container' fluid>
				<Switch>
					<Route exact path={['/', '/login']}>
						{loggedIn ? <Redirect to='/user' /> : <LoginSignUp />}
					</Route>
					<Route exact path={['/user']}>
						<User />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
