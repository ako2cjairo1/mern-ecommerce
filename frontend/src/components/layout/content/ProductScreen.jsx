import '../../../assets/css/ProductScreen.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProductDetail, addToCart } from '../../../redux/actions';
import { Counter, Spinner } from '../../shared';
import { InCurrency } from '../../../utils';

export function ProductScreen({ match, history }) {
	const dispatch = useDispatch();
	const { isLogIn } = useSelector((state) => state.login);

	// local state(s)
	const [qty, setQty] = useState(1);
	const productId = match.params.id;

	useEffect(() => {
		if (isLogIn) {
			// fetch details from API async
			dispatch(getProductDetail(productId));
		} else {
			history.push('/login');
		}
	}, [dispatch, productId, isLogIn, history]);

	// Selectors
	const cartItems = useSelector((state) => state.cart.cartItems);
	const {
		product: { name, description, imageUrl, price, countInStock },
		loading,
		error,
	} = useSelector((state) => state.getProductDetail);

	const itemCountInCart = () => {
		const product = cartItems.find((item) => item._id === productId);

		return product ? product.qty : 0;
	};
	const subtotalPrice = price * qty;
	const countInCart = itemCountInCart();
	const totalCountInCart = countInStock - countInCart;

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
					<img src={imageUrl} alt={name} loading='lazy' />
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
							countInStock={totalCountInCart}
							handleIncrement={() => setQty((qty) => qty + 1)}
							handleDecrement={() => setQty((qty) => qty - 1)}
						/>
					</div>
					{countInCart > 0 && (
						<div className='cart__warning'>
							<span>You already have ({countInCart}) this in your cart.</span>
						</div>
					)}
					{countInStock !== countInCart ? (
						<p>
							<button type='button' onClick={handleAddToCart}>
								<i className='fas fa-shopping-cart cart__icon cart__animate'></i>
								Add To Cart
							</button>
						</p>
					) : (
						<p>
							<button type='button' onClick={() => history.push('/')}>
								<i className='fas fa-store cart__animate'></i>
								Continue Shopping
							</button>
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
