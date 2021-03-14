import '../../../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartBadgeIcon } from '../../shared/CartBadgeIcon';
import { LoginBadge } from '../../layout/login/LoginBadge';

export default function Navbar({ click }) {
	const { isLogIn } = useSelector((state) => state.login);

	return (
		<nav className='navbar'>
			<div className='navbar__logo'>
				<Link to='/'>
					<h2>MERN eCommerce</h2>
				</Link>
			</div>

			<ul className='navbar__links'>
				{isLogIn && (
					<li>
						<Link to='/'>Shop</Link>
					</li>
				)}
				<li>
					<Link to='/login'>
						<LoginBadge />
					</Link>
				</li>
				{isLogIn && (
					<li>
						<Link to='/cart' className='cart__link'>
							<CartBadgeIcon badgeStyle='cartlogo__badge' />
						</Link>
					</li>
				)}
			</ul>

			<div className='hamburger__menu' onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}
