import { Link } from 'react-router-dom';
import '../../../assets/css/SideDrawer.css';
import { CartBadgeIcon } from '../../shared/CartBadgeIcon';

export function SideDrawer({ show, click }) {
	const sideDrawerClass = ['sidedrawer'];

	if (show) {
		sideDrawerClass.push('show');
	}
	return (
		<div className={sideDrawerClass.join(' ')}>
			<ul className='sidedrawer__links' onClick={click}>
				<li>
					<Link to='/cart'>
						<CartBadgeIcon badgeStyle='sidedrawer__cartbadge' />
					</Link>
				</li>
				<li>
					<Link to='/'>Shop</Link>
				</li>
			</ul>
		</div>
	);
}
