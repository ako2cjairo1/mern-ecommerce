import '../../../assets/css/Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { CartBadgeIcon } from '../../shared/CartBadgeIcon';
import { LoginBadge } from '../../layout/login/LoginBadge';

import { SearchBar } from '../../shared';

import { searchProducts, getProducts } from '../../../controllers';

export default function Navbar({ click }) {
	const dispatch = useDispatch();
	const [searchCriteria, setSearchCriteria] = useState('');
	const { isLogIn } = useSelector((state) => state.login);

	const handleSearch = (evt) => {
		if (evt.key === 'Enter') {
			if (searchCriteria) {
				dispatch(searchProducts(searchCriteria));
			} else {
				dispatch(getProducts());
			}
		}
	};

	return (
		<nav className='navbar'>
			<div className='navbar__logo'>
				<Link to='/'>
					<h2>MERN eCommerce</h2>
				</Link>
			</div>
			{isLogIn && (
				<SearchBar
					searchCriteria={searchCriteria}
					handleInput={(e) => setSearchCriteria(e.target.value)}
					handleSearch={handleSearch}
				/>
			)}
			<ul className='navbar__links'>
				{isLogIn && (
					<li>
						<Link to='/'>Shop</Link>
					</li>
				)}
				<li>
					<Link to='/login'>
						<LoginBadge isPlain />
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
