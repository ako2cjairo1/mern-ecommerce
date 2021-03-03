import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../assets/css/Root.css';

//redux store provider component
import ReduxStoreProvider from '../redux/store';

// import components
import Navbar from '../components/layout/nav/Navbar';
import {
	HomeScreen,
	CartScreen,
	ProductScreen,
	Backdrop,
	SideDrawer,
} from '../components/layout/content';
import { NotFoundScreen } from '../components/shared';

export default function Root() {
	const [sideToggle, setSideToggle] = useState(false);

	const closeSideDrawer = () => setSideToggle(false);
	return (
		<ReduxStoreProvider>
			<Router>
				<Navbar click={() => setSideToggle(true)} />
				<SideDrawer show={sideToggle} click={closeSideDrawer} />
				<Backdrop show={sideToggle} click={closeSideDrawer} />
				<main>
					<Switch>
						<Route exact path='/' component={HomeScreen} />
						<Route path='/cart' component={CartScreen} />
						<Route exact path='/product/:id' component={ProductScreen} />
						<Route component={NotFoundScreen} />
					</Switch>
				</main>
			</Router>
		</ReduxStoreProvider>
	);
}
