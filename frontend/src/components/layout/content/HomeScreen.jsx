import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../assets/css/HomeScreen.css';
import { Product } from '../../feature';
import { CustomSnackbar } from '../../../components/shared';

//import product action service
import { addToCart, getProducts } from '../../../controllers';
import { Spinner } from '../../shared';

export function HomeScreen({ history }) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [addToCartProduct, setAddToCartProduct] = useState('');
	const { isLogIn } = useSelector((state) => state.login);

	useEffect(() => {
		if (isLogIn) {
			dispatch(getProducts());
		} else {
			history.push('/login');
		}
	}, [dispatch, isLogIn, history]);

	const { products, loading, error } = useSelector(
		(state) => state.getProducts
	);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const isInCart = (id) => cartItems.find((cartItem) => cartItem._id === id);
	const isMaxInCart = (id) => {
		const itemInCart = cartItems.find((cartItem) => cartItem._id === id);
		let itemCountInCart = 0;

		if (itemInCart) {
			itemCountInCart = itemInCart.qty;
		}
		const quantityInStock = products.find((item) => item._id === id)
			.countInStock;

		return itemCountInCart >= quantityInStock;
	};

	const handleAddToCart = (productId, productName) => {
		dispatch(addToCart(productId, 1));
		setAddToCartProduct(productName);
		setOpen(false);
		setOpen(true);
	};

	if (loading) {
		return <Spinner />;
	} else if (error) {
		return (
			<div>
				<h2>Something went wrong.</h2>
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div className='homescreen'>
			<h2 className='homescreen__title'>Latest Products</h2>
			<CustomSnackbar open={open} setOpen={setOpen} name={addToCartProduct} />
			<div className='homescreen__products'>
				{products.map((product) => {
					return (
						!isMaxInCart(product._id) && (
							<Product
								key={product._id}
								{...product}
								isMaxInCart={isMaxInCart(product._id)}
								isInCart={isInCart(product._id)}
								handleAddToCart={handleAddToCart}
							/>
						)
					);
				})}
			</div>
		</div>
	);
}
