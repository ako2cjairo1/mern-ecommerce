import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function NotFoundScreen({ history }) {
	const { isLogIn } = useSelector((state) => state.login);

	return (
		<div
			className='container mt'
			style={{ display: 'flex', flexDirection: 'column' }}>
			<h1>Oops! We can't find the page you were looking for.</h1>
			{isLogIn ? (
				<p>
					If you're experiencing a critical issue, please email support.{' '}
					<Link to='/'>Go Shopping</Link>
				</p>
			) : null}
		</div>
	);
}
