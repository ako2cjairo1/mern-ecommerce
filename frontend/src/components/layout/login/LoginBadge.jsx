import { useSelector } from 'react-redux';

function LoginBadge() {
	const { user, isLogIn } = useSelector((state) => state.login);

	return isLogIn ? (
		<span className='loginbadge'>Hello, {user}</span>
	) : (
		'Sign in'
	);
}

export { LoginBadge };
