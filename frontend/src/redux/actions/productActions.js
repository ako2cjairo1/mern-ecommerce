import axios from 'axios';
import * as actionTypes from '../../constants/productConstants';

// Action creator(s)
const getProductsRequestAction = () => {
	return {
		type: actionTypes.GET_PRODUCTS.REQUEST,
	};
};

const getProductsSuccessAction = (products) => {
	return {
		type: actionTypes.GET_PRODUCTS.SUCCESS,
		payload: products,
	};
};

const getProductsFailAction = (error) => {
	return {
		type: actionTypes.GET_PRODUCTS.FAIL,
		payload: error,
	};
};

const getProductDetailRequestAction = () => {
	return {
		type: actionTypes.GET_PRODUCT_DETAIL.REQUEST,
	};
};

const getProductDetailSuccessAction = (product) => {
	return {
		type: actionTypes.GET_PRODUCT_DETAIL.SUCCESS,
		payload: product,
	};
};

const getProductDetailFailAction = (error) => {
	return {
		type: actionTypes.GET_PRODUCT_DETAIL.FAIL,
		payload: error,
	};
};

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

const getProductDetail = (id) => async (dispatch) => {
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

export { getProducts, getProductDetail };
