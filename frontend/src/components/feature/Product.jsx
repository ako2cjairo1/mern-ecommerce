import '../../assets/css/Product.css';
import { Link } from 'react-router-dom';

import { InCurrency } from '../../utils';

export function Product({
	_id,
	imageUrl,
	name,
	description,
	price,
	isInCart,
	handleAddToCart,
}) {
	const imageWrapperStyle = isInCart
		? 'cards__item__pic-wrap'
		: 'cards__item__pic';

	return (
		<div className='product'>
			<figure className={imageWrapperStyle} data-category='In Cart'>
				<img
					alt={name}
					src={imageUrl}
					loading='lazy'
					className='cards__item__img'
				/>
			</figure>

			<div className='product__info'>
				<p className='info__name'>{name}</p>
				<p className='info__description'>{description}</p>
				<p className='info__price'>{InCurrency(price)}</p>

				<p style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Link to={`/product/${_id}`} className='info__button'>
						See details
					</Link>
					<button
						type='button'
						className='info__button'
						onClick={() => handleAddToCart(_id, name)}>
						<i className='fas fa-shopping-cart cart__icon'></i>
						Add To Cart
					</button>
				</p>
			</div>
		</div>
	);
}
