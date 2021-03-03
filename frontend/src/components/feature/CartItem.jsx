import { Link } from 'react-router-dom';
import '../../assets/css/CartItem.css';
import { Counter } from '../shared';

export function CartItem({
	item: { imageUrl, name, _id: id, price, qty, countInStock },
	handleIncrement,
	handleDecrement,
	handleRemove,
}) {
	return (
		<div className='cartitem'>
			<div className='cartitem__image'>
				<img src={imageUrl} alt={name} />
			</div>
			<Link to={`/product/${id}`} className='cartItem__name'>
				<p>{name}</p>
			</Link>
			<div className='cartitem__price'>
				<p>${price}</p>
				<span>x</span>
				<Counter
					qty={qty}
					countInStock={countInStock}
					handleIncrement={handleIncrement}
					handleDecrement={handleDecrement}
				/>
			</div>

			<button className='cartItem__deleteBtn' onClick={handleRemove}>
				<i className='fas fa-trash'></i>
			</button>
		</div>
	);
}
