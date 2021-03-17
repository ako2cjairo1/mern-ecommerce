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

const searchProductAction = (searchCriteria) => {
	return {
		type: actionTypes.SEARCH_PRODUCTS,
		payload: searchCriteria,
	};
};

export {
	getProductsRequestAction,
	getProductsSuccessAction,
	getProductsFailAction,
	getProductDetailRequestAction,
	getProductDetailSuccessAction,
	getProductDetailFailAction,
	searchProductAction,
};
