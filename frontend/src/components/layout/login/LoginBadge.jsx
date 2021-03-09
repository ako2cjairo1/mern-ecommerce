import { useSelector } from 'react-redux';

function LoginBadge() {
	const { user, isLogIn } = useSelector((state) => state.login);

	return isLogIn ? (
		<span className='loginbadge'>Logout ({user})</span>
	) : (
		'Login'
	);
}

export { LoginBadge };
