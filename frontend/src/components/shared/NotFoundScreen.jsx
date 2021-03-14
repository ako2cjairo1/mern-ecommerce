import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function NotFoundScreen({ history }) {
	const { isLogIn } = useSelector((state) => state.login);

	return (
		<div className='container'>
			<h1>Ooop! Page not found.</h1>
			{isLogIn ? <Link to='/'>Go Shopping</Link> : null}
		</div>
	);
}
