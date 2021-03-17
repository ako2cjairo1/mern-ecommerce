import '../../../assets/css/LoginBadge.css';
import { useSelector } from 'react-redux';

function LoginBadge({ isPlain }) {
	const { user, isLogIn } = useSelector((state) => state.login);

	return isLogIn ? (
		isPlain ? (
			<span className='loginbadge'>
				<p>Hello, {user}</p>
				<div>Logout</div>
			</span>
		) : (
			<span>Logout</span>
		)
	) : (
		'Sign in'
	);
}

export { LoginBadge };
