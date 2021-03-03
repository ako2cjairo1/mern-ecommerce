import React from 'react';
import { useSelector } from 'react-redux';

export function CartBadgeIcon({ badgeStyle }) {
	const cartItems = useSelector((state) => state.cart.cartItems);

	const getCartItemCount = () =>
		cartItems.reduce((qty, item) => qty + item.qty, 0);

	return (
		<>
			<i className='fas fa-shopping-cart'></i>
			<span>Cart</span>
			<span className={badgeStyle}>{getCartItemCount()}</span>
		</>
	);
}
