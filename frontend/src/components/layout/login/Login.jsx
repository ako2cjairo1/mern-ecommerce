import '../../../assets/css/Login.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// login action creator
import { logInAction, logOutAction } from '../../../redux/actions';

export default function Login({ history }) {
	const dispatch = useDispatch();
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const { isLogIn } = useSelector((state) => state.login);

	useEffect(() => {
		if (isLogIn) dispatch(logOutAction());
	}, [isLogIn, dispatch]);

	const handleInput = (evt) => {
		const { name, value } = evt.target;

		if (name === 'username') setUserName(value);
		else if (name === 'password') setPassword(value);
	};

	const handleOnSubmit = (evt) => {
		evt.preventDefault();

		if (username && password) {
			dispatch(logInAction(username));
			history.push('/');
		} else {
			alert('Username or password is not valid!');
		}
	};

	return (
		<div className='container'>
			<div className='card'>
				<form onSubmit={handleOnSubmit}>
					<header>
						<h2>Login</h2>
					</header>
					<input
						type='text'
						placeholder='Username'
						name='username'
						value={username}
						onChange={handleInput}
					/>
					<input
						type='text'
						placeholder='Password'
						name='password'
						value={password}
						onChange={handleInput}
					/>
					<button type='submit' hidden></button>
				</form>
			</div>
		</div>
	);
}
