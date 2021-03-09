import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../assets/css/ProductScreen.css';

import { getProductDetail, addToCart } from '../../../redux/actions';
import { Counter, Spinner } from '../../shared';
import { InCurrency } from '../../../utils';

export function ProductScreen({ match, history }) {
	const dispatch = useDispatch();
	const { isLogIn } = useSelector((state) => state.login);

	useEffect(() => {
		if (!isLogIn) {
			history.push('/login');
		}
	}, [isLogIn, history]);

	// local state(s)
	const [qty, setQty] = useState(1);
	const productId = match.params.id;

	// Selectors
	const cartItems = useSelector((state) => state.cart.cartItems);
	const alreadyInCartItem = () => {
		const product = cartItems.find((item) => item._id === productId);

		return product ? (
			<div className='cart__warning'>
				<span>You already have ({product.qty}) this in your cart.</span>
			</div>
		) : null;
	};

	const {
		product: { name, description, imageUrl, price, countInStock },
		loading,
		error,
	} = useSelector((state) => state.getProductDetail);
	const subtotalPrice = price * qty;

	useEffect(() => {
		// fetch details from API async
		dispatch(getProductDetail(productId));
	}, [dispatch, productId]);

	const handleAddToCart = () => {
		dispatch(addToCart(productId, qty));
		history.push('/cart');
	};

	if (loading) {
		return <Spinner />;
	} else if (error) {
		return (
			<div>
				<h2>Error while fetching item details.</h2>
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div className='productscreen'>
			<div className='productscreen__left'>
				<div className='left__image'>
					<img src={imageUrl} alt={name} />
				</div>
				<div className='left__info'>
					<p className='left__name'>{name}</p>
					<p>
						Price: <span className='left__price'>{InCurrency(price)}</span>
					</p>
					<p>{description}</p>
				</div>
			</div>
			<div className='productscreen__right'>
				<div className='right__info'>
					<p>
						Subtotal Price:
						<span>{InCurrency(subtotalPrice)}</span>
					</p>
					<p>
						Status:
						{countInStock > 0 ? (
							<span>({countInStock}) In Stock</span>
						) : (
							<span style={{ color: 'red' }}>'Out of Stock'</span>
						)}
					</p>
					<div className='qty__button'>
						<p>Qty: </p>
						<Counter
							qty={qty}
							countInStock={countInStock}
							handleIncrement={() => setQty((qty) => qty + 1)}
							handleDecrement={() => setQty((qty) => qty - 1)}
						/>
					</div>
					{alreadyInCartItem()}
					<p>
						<button type='button' onClick={handleAddToCart}>
							<i className='fas fa-shopping-cart cart__icon cart__animate'></i>
							Add To Cart
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}
