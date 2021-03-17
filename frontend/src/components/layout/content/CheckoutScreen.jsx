import '../../../assets/css/CheckoutScreen.css';
import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreditCard from '@material-ui/icons/CreditCard';
import { AddressForm, PaymentForm, ReviewCheckout } from '../../feature';

import { useAddressForm, usePaymentForm } from '../../../hooks';
import { checkOutCart } from '../../../controllers';
import { InCurrency } from '../../../utils';

const addressFormInitialState = {
	firstName: '',
	lastName: '',
	address1: '',
	address2: '',
	city: '',
	state: '',
	zip: '',
	country: '',
	saveAddress: false,
};
const paymentFormInitialState = {
	cardName: '',
	cardNumber: '',
	expDate: '',
	cvv: '',
	saveCard: false,
};

export function CheckoutScreen({ history }) {
	const dispatch = useDispatch();
	const [activeStep, setActiveStep] = useState(0);
	const [countDownCounter, setCountDownCounter] = useState(30);
	const [placingOrder, setPlacingOrder] = useState(false);

	const cartItems = useSelector((state) => state.cart.cartItems);
	// custom hooks
	const [
		addressFormInput,
		handleAddressFormInput,
		addressFormError,
	] = useAddressForm(addressFormInitialState);

	const [
		paymentFormInput,
		handlePaymentFormInput,
		paymentFormError,
	] = usePaymentForm(paymentFormInitialState);

	// Event handlers
	const handleBack = () => setActiveStep(activeStep - 1);
	const handleNext = () => {
		switch (activeStep) {
			case 0:
				if (!addressFormError) {
					setActiveStep(1);
				}
				break;
			case 1:
				if (!paymentFormError) {
					setActiveStep(2);
				}
				break;
			case 2:
				if (!addressFormError && !paymentFormError) {
					placeOrder();
				}
				break;
			default:
				break;
		}
	};
	const handleContinueShopping = () => {
		disposeTimeout();
		history.push('/');
	};

	// Utility functions
	const placeOrder = () => {
		// const requestUpdates = cartItems.map((product) => ({
		// 	id: product._id,
		// 	qty: product.qty,
		// }));

		setPlacingOrder(true);
		console.log('(simulate!!!) Processing payment...');

		setTimeout(() => {
			setActiveStep(3);
			setPlacingOrder(false);
			countdownRedirection();
			// simulate checkout - by clearing contents of cart
			// dispatch(patchProducts(requestUpdates));
			// in global state and local storage
			dispatch(checkOutCart());
		}, 5000);
	};
	let countdownInterval = useRef(null);
	let countdownTimeout = useRef(null);
	const disposeTimeout = () => {
		clearInterval(countdownInterval.current);
		clearTimeout(countdownTimeout.current);
	};
	const countdownRedirection = () => {
		countdownInterval.current = setInterval(() => {
			setCountDownCounter((counter) => counter - 1);
		}, 1000);

		countdownTimeout.current = setTimeout(() => {
			disposeTimeout();
			history.push('/');
		}, 30000);
	};

	const subTotal = cartItems.reduce(
		(total, item) => total + item.price * item.qty,
		0
	);

	// conditional rendering of CheckoutScreen content (steps 1 - 3)
	const steps = ['Shipping address', 'Payment details', 'Review your order'];
	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return (
					<AddressForm
						input={addressFormInput}
						handleInput={handleAddressFormInput}
						error={addressFormError}
					/>
				);
			case 1:
				return (
					<PaymentForm
						input={paymentFormInput}
						handleInput={handlePaymentFormInput}
						error={paymentFormError}
					/>
				);
			case 2:
				const itemCount = cartItems.reduce(
					(total, item) => total + item.qty,
					0
				);
				return (
					<ReviewCheckout
						shippingInfo={addressFormInput}
						paymentInfo={paymentFormInput}
						cartItems={cartItems}
						subTotal={subTotal}
						itemCount={itemCount}
					/>
				);
			case 3:
				return (
					<React.Fragment>
						<Typography variant='h5' gutterBottom>
							Thank you for your order.
						</Typography>
						<Typography variant='subtitle1'>
							Your order number is #2001539. We have emailed your order
							confirmation, and will send you an update when your order has
							shipped.
						</Typography>
					</React.Fragment>
				);
			default:
				throw new Error('Unknown step');
		}
	};

	return (
		<div className='container mt'>
			<div style={{ width: '648px' }}>
				<CssBaseline />
				<main>
					<Paper className='checkout'>
						<Typography component='h1' variant='h4' align='center'>
							Checkout
						</Typography>
						<Stepper activeStep={activeStep}>
							{steps.map((label) => (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
						<React.Fragment>
							{getStepContent(activeStep)}
							<div className='action-buttons'>
								{activeStep === 0 && (
									<Button
										variant='outlined'
										onClick={() => history.push('/cart')}>
										Go back to Cart
									</Button>
								)}
								{activeStep < steps.length ? (
									<div>
										{activeStep !== 0 && !placingOrder && (
											<Button variant='outlined' onClick={handleBack}>
												Back
											</Button>
										)}
										<Button
											variant='contained'
											color='primary'
											startIcon={
												placingOrder && (
													<CreditCard className='animate-circle' />
												)
											}
											disabled={placingOrder}
											onClick={handleNext}>
											{activeStep === steps.length - 1
												? placingOrder
													? 'Processing...'
													: `Pay ${InCurrency(subTotal)}`
												: 'Next'}
										</Button>
									</div>
								) : (
									<Button
										variant='contained'
										color='primary'
										onClick={handleContinueShopping}>
										Continue Shopping ({countDownCounter})
									</Button>
								)}
							</div>
						</React.Fragment>
					</Paper>
				</main>
			</div>
		</div>
	);
}
