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
				<img src={imageUrl} alt={name} />
			</div>
			<Link to={`/product/${id}`} className='cartItem__name'>
				<p>{name}</p>
				<p style={{ fontSize: '0.7rem', textAlign: 'justify' }}>
					{description}
				</p>
			</Link>
			<div className='cartitem__price'>
				<p>{InCurrency(price)}</p>
				<span>x</span>
				<Counter
					qty={qty}
					countInStock={countInStock}
					handleIncrement={handleIncrement}
					handleDecrement={handleDecrement}
				/>
			</div>

			<button className='cartItem__deleteBtn' onClick={handleRemove}>
				{/* <i className='fas fa-trash'></i> */}
				delete
			</button>
		</div>
	);
}
