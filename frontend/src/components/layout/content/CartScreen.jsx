import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../assets/css/CartScreen.css';

import { CartItem } from '../../feature';
import { InCurrency } from '../../../utils';

// import redux action creators
import { addToCart, removeFromCart } from '../../../redux/actions';

export function CartScreen({ history }) {
	const dispatch = useDispatch();
	const { isLogIn } = useSelector((state) => state.login);

	if (!isLogIn) {
		history.push('/login');
	}

	const cartItems = useSelector((state) => state.cart.cartItems);

	// SELECTORS
	const countTotalItems = cartItems.reduce(
		(itemCount, item) => itemCount + item.qty,
		0
	);
	const countSubTotalAmount = cartItems.reduce(
		(subTotal, item) => subTotal + item.price * item.qty,
		0
	);
	// HANDLERS
	const incrementHandler = (id) => dispatch(addToCart(id, 1));
	const decrementHandler = (id) => dispatch(removeFromCart(id, 1));
	const removeHandler = (id, qty) => dispatch(removeFromCart(id, qty));
	const handleCheckOut = () => {
		alert('TODO: handle Checkout feature.');
		history.push('/');
	};

	return (
		<div className='cartscreen'>
			<div className='cartscreen__left'>
				<h2>
					{countTotalItems > 0
						? 'Shopping Cart'
						: 'Your Shopping Cart is empty.'}
				</h2>
				{countTotalItems <= 0 && (
					<div>
						<p style={{ fontSize: '0.8rem' }}>
							Your Shopping Cart lives to serve. Give it purpose — fill it with
							groceries, clothing, household supplies, electronics, and more.
							Continue shopping on the homepage, learn about today's deals.{' '}
							<Link to='/'>Go Shopping</Link>
						</p>
					</div>
				)}
				{cartItems.map((cartItem) => {
					const { _id, qty } = cartItem;
					const handlers = {
						handleIncrement: () => incrementHandler(_id),
						handleDecrement: () => decrementHandler(_id),
						handleRemove: () => removeHandler(_id, qty),
					};

					return <CartItem key={cartItem._id} item={cartItem} {...handlers} />;
				})}
			</div>

			{countTotalItems > 0 && (
				<div className='cartscreen__right'>
					<div className='cartscreen__info'>
						<p>Subtotal ({countTotalItems} item(s))</p>
						<p>{InCurrency(countSubTotalAmount)}</p>
					</div>
					<div>
						<button onClick={handleCheckOut}>Proceed To Checkout</button>
					</div>
				</div>
			)}
		</div>
	);
}
