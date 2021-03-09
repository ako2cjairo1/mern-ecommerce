import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function NotFoundScreen({ history }) {
	const { isLogIn } = useSelector((state) => state.login);

	if (!isLogIn) {
		history.push('/login');
	}

	return (
		<div>
			<h2>Ooop! Page not found.</h2>
			<Link to='/'>
				<i>go back to home</i>
			</Link>
		</div>
	);
}
