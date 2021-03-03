import { Link } from 'react-router-dom';

export function NotFoundScreen() {
	return (
		<div>
			<h2>Ooop! Page not found.</h2>
			<Link to='/'>
				<i>go back to home</i>
			</Link>
		</div>
	);
}
