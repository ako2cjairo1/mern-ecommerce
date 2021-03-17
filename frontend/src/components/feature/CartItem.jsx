import { Link } from 'react-router-dom';
import '../../assets/css/CartItem.css';

import { Counter } from '../shared';
import { InCurrency } from '../../utils';

export function CartItem({
	item: { imageUrl, name, description, _id: id, price, qty, countInStock },
	handleIncrement,
	handleDecrement,
	handleRemove,
}) {
	return (
		<div className='cartitem animate'>
			<div className='cartitem__image'>
				<img src={imageUrl} alt={name} loading='lazy' />
			</div>
			<div className='cartItem__name'>
				<Link to={`/product/${id}`}>
					<p>{name}</p>
				</Link>
				<p>{description}</p>
			</div>
			<div className='cartitem__price'>
				<p>{InCurrency(price)}</p>
				<span>x</span>
				<Counter
					variant='left'
					qty={qty}
					countInStock={countInStock}
					handleIncrement={handleIncrement}
					handleDecrement={handleDecrement}
				/>
			</div>

			<button className='cartItem__deleteBtn' onClick={handleRemove}>
				delete
			</button>
		</div>
	);
}
