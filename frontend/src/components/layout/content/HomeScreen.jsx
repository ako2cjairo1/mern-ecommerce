import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../assets/css/HomeScreen.css';
import { Product } from '../../feature';

//import product action service
import { getProducts } from '../../../redux/actions';
import { Spinner } from '../../shared';

export function HomeScreen() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const { products, loading, error } = useSelector(
		(state) => state.getProducts
	);

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

			<div className='homescreen__products'>
				{products.map((product) => {
					return <Product key={product._id} {...product} />;
				})}
			</div>
		</div>
	);
}
