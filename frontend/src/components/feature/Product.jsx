import '../../assets/css/Product.css';
import { Link } from 'react-router-dom';

import { InCurrency } from '../../utils';

export function Product({
	_id,
	imageUrl,
	name,
	description,
	price,
	isMaxInCart,
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
				<p className='info__price'>{InCurrency(price)}</p>

				<div className='info__button-container'>
					<Link to={`/product/${_id}`}>See details</Link>
					{!isMaxInCart && (
						<button
							type='button'
							className='info__button'
							onClick={() => handleAddToCart(_id, name)}>
							<i className='fas fa-cart-plus cart__icon'></i>
							Add To Cart
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
