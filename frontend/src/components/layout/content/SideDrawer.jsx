import '../../../assets/css/SideDrawer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartBadgeIcon } from '../../shared/CartBadgeIcon';
import { LoginBadge } from '../../layout/login/LoginBadge';

export function SideDrawer({ show, click }) {
	const { isLogIn } = useSelector((state) => state.login);

	const sideDrawerClass = ['sidedrawer'];

	if (show) {
		sideDrawerClass.push('show');
	}
	return (
		<div className={sideDrawerClass.join(' ')}>
			<ul className='sidedrawer__links' onClick={click}>
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
						<Link to='/cart'>
							<CartBadgeIcon badgeStyle='sidedrawer__cartbadge' />
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
}
