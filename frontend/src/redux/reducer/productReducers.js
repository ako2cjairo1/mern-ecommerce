import * as actionTypes from '../../constants/productConstants';

const getProductsInitialState = {
	products: [],
	loading: false,
	error: null,
	isSearch: false,
	searchCriteria: '',
};

const getProductsReducer = (state = getProductsInitialState, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS.REQUEST:
			return {
				...state,
				products: [],
				loading: true,
			};
		case actionTypes.GET_PRODUCTS.SUCCESS:
			return {
				...state,
				products: action.payload,
				loading: false,
			};
		case actionTypes.GET_PRODUCTS.FAIL:
			return {
				...state,
				products: [],
				loading: false,
				error: action.payload,
			};
		case actionTypes.SEARCH_PRODUCTS:
			return {
				...state,
				isSearch: true,
				searchCriteria: action.payload,
			};
		default:
			return state;
	}
};

const getProductDetailInitialState = {
	product: {},
	loading: false,
	error: null,
};

const getProductDetailReducer = (
	state = getProductDetailInitialState,
	action
) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCT_DETAIL.REQUEST:
			return {
				...state,
				product: {},
				loading: true,
			};
		case actionTypes.GET_PRODUCT_DETAIL.SUCCESS:
			return {
				...state,
				product: action.payload,
				loading: false,
			};
		case actionTypes.GET_PRODUCT_DETAIL.FAIL:
			return {
				...state,
				product: {},
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export { getProductsReducer, getProductDetailReducer };
