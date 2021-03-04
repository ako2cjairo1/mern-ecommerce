import { Link } from 'react-router-dom';
import '../../assets/css/Product.css';

import { InCurrency } from '../../utils';

export function Product({ _id, imageUrl, name, description, price, isInCart }) {
	const imageWrapperStyle = isInCart
		? 'cards__item__pic-wrap'
		: 'cards__item__pic';

	return (
		<div className='product'>
			<figure className={imageWrapperStyle} data-category='In Cart'>
				<img alt={name} src={imageUrl} className='cards__item__img' />
			</figure>

			<div className='product__info'>
				<p className='info__name'>{name}</p>
				<p className='info__description'>{description}</p>
				<p>{InCurrency(price, 'USD')}</p>

				<Link to={`/product/${_id}`} className='info__button'>
					View
				</Link>
			</div>
		</div>
	);
}
