import { Link } from 'react-router-dom';
import '../../../assets/css/Navbar.css';

import { CartBadgeIcon } from '../../shared/CartBadgeIcon';

export default function Navbar({ click }) {
	return (
		<nav className='navbar'>
			<div className='navbar__logo'>
				<Link to='/'>
					<h2>MERN eCommerce</h2>
				</Link>
			</div>

			<ul className='navbar__links'>
				<li>
					<Link to='/cart' className='cart__link'>
						<CartBadgeIcon badgeStyle='cartlogo__badge' />
					</Link>
				</li>
				<li>
					<Link to='/'>Shop</Link>
				</li>
			</ul>

			<div className='hamburger__menu' onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}
