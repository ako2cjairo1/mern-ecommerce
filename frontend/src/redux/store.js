import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import root reducer
import reducers from './reducer';

const middlewares = [thunk];

const composeWithDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export default function ReduxStoreProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
