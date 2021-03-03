import { Link } from 'react-router-dom';
import '../../assets/css/Product.css';

export function Product({ _id, imageUrl, name, description, price }) {
	return (
		<div className='product'>
			<img src={imageUrl} alt={name} />

			<div className='product__info'>
				<p className='info__name'>{name}</p>
				<p className='info__description'>{description}</p>
				<p>${price}</p>

				<Link to={`/product/${_id}`} className='info__button'>
					View
				</Link>
			</div>
		</div>
	);
}
