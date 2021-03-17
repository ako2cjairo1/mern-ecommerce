import axios from 'axios';
import {
	getProductsRequestAction,
	getProductsSuccessAction,
	getProductsFailAction,
	getProductDetailRequestAction,
	getProductDetailSuccessAction,
	getProductDetailFailAction,
	searchProductAction,
} from '../redux/actions';

// async action creator(s)
const getProducts = () => async (dispatch) => {
	try {
		dispatch(getProductsRequestAction());

		const { data: products } = await axios.get('/api/products');

		if (products) {
			dispatch(getProductsSuccessAction(products));
		}
	} catch (error) {
		dispatch(getProductsFailAction(error.message));
	}
};

const getProductDetailById = (id) => async (dispatch) => {
	try {
		dispatch(getProductDetailRequestAction());

		const { data: product } = await axios.get(`/api/products/${id}`);

		if (product) {
			dispatch(getProductDetailSuccessAction(product));
		}
	} catch (error) {
		dispatch(getProductDetailFailAction(error.message));
	}
};

const searchProducts = (searchCriteria) => async (dispatch) => {
	try {
		// update global state for searchCriteria
		dispatch(searchProductAction(searchCriteria));

		dispatch(getProductsRequestAction());
		const { data: products } = await axios.get(
			`/api/products/search/${searchCriteria}`
		);
		if (products) {
			dispatch(getProductsSuccessAction(products));
		}
	} catch (error) {
		dispatch(getProductsFailAction(error.message));
	}
};

// TODO: implement updating of qunatityInStocks calculation update in DB
const patchProducts = (updates) => async (dispatch) => {
	try {
		// const { data } = await axios.patch('/api/products', updates);
	} catch (error) {
		console.log('PRODUCT ACTIONS ERROR', error);
	}
};

export { getProducts, getProductDetailById, patchProducts, searchProducts };
