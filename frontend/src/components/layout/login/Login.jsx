import '../../../assets/css/Login.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// custom hook(s)
import { useLoginForm } from '../../../hooks';

// login action creator
import {
	logInUser,
	logOutUser,
	resetCart,
	getCachedCart,
} from '../../../controllers';

const initialState = {
	email: '',
	password: '',
	remember: false,
};

export default function Login({ history }) {
	const dispatch = useDispatch();
	const { isLogIn } = useSelector((state) => state.login);

	useEffect(() => {
		// logout the current user (if there is)
		if (isLogIn) {
			dispatch(logOutUser());
			dispatch(resetCart());
		}
	}, [isLogIn, dispatch]);

	const handleLogin = () => {
		dispatch(logInUser(email));
		dispatch(getCachedCart());
		history.push('/');
	};

	const [input, handleInput, handleSubmit, error] = useLoginForm(
		initialState,
		handleLogin
	);
	const { email, password, remember } = input;
	const { emailError, passwordError } = error;

	return (
		<div className='loginscreen'>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className='card'>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							marginBottom: '10px',
						}}>
						<Avatar style={{ backgroundColor: '#dc024e' }}>
							<LockOutlinedIcon style={{ backgroundColor: '#dc024e' }} />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Sign in
						</Typography>
					</div>
					<form noValidate onSubmit={handleSubmit}>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label={emailError ? emailError : 'Email Address'}
							name='email'
							autoComplete='email'
							autoFocus
							error={emailError ? true : false}
							value={email}
							onChange={handleInput}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label={passwordError ? passwordError : 'Password'}
							type='password'
							id='password'
							autoComplete='current-password'
							error={passwordError ? true : false}
							value={password}
							onChange={handleInput}
						/>
						<FormControlLabel
							control={
								<Checkbox
									name='remember'
									color='primary'
									checked={remember}
									onClick={handleInput}
								/>
							}
							label='Remember me'
						/>
						<Button type='submit' fullWidth variant='contained' color='primary'>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href='#' variant='body2'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</div>
	);
}
