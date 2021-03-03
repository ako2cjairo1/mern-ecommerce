import axios from 'axios';
import * as actionTypes from '../../constants/productConstants';

const getProducts = () => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCTS.REQUEST });

		const { data: products } = await axios.get('/api/products');

		if (products) {
			dispatch({ type: actionTypes.GET_PRODUCTS.SUCCESS, payload: products });
		}
	} catch (error) {
		dispatch({ type: actionTypes.GET_PRODUCTS.FAIL, payload: error.message });
	}
};

const getProductDetail = (id) => async (dispatch) => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCT_DETAIL.REQUEST });

		const { data: product } = await axios.get(`/api/products/${id}`);

		if (product) {
			dispatch({
				type: actionTypes.GET_PRODUCT_DETAIL.SUCCESS,
				payload: product,
			});
		}
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCT_DETAIL.FAIL,
			payload: error.message,
		});
	}
};

export { getProducts, getProductDetail };
