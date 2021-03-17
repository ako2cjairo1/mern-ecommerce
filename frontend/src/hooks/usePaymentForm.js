import { useState, useEffect, useRef } from 'react';

const errorInitialState = {
	cardNameError: '',
	cardNumberError: '',
	expDateError: '',
	cvvError: '',
};

export function usePaymentForm(initialState) {
	const [input, setInput] = useState(initialState);
	const [paymentFormError, setPaymentFormError] = useState(errorInitialState);
	const validate = useRef(() => null);

	const handleInput = (evt) => {
		const { name, value, checked, type } = evt.target;

		if (type === 'checkbox') {
			setInput({ ...input, [name]: checked });
		} else {
			setInput({ ...input, [name]: value });
		}
	};

	validate.current = () => {
		let validationErrors = {};
		let isValidData = true;
		const { cardName, cardNumber, expDate, cvv } = input;

		if (cardName.length < 1) {
			validationErrors = { cardNameError: 'Card name is required.' };
			isValidData = false;
		}
		if (cardNumber.length !== 16) {
			validationErrors = {
				...validationErrors,
				cardNumberError: 'Invalid Card number (16 digits).',
			};
			isValidData = false;
		}
		if (cardNumber.length < 1) {
			validationErrors = {
				...validationErrors,
				cardNumberError: 'Card number is required.',
			};
			isValidData = false;
		}
		if (expDate.length < 1) {
			validationErrors = {
				...validationErrors,
				expDateError: 'Expiry date is required.',
			};
			isValidData = false;
		}
		if (cvv.length < 3) {
			validationErrors = { ...validationErrors, cvvError: 'Invalid CVV.' };
			isValidData = false;
		}
		if (cvv.length < 1) {
			validationErrors = { ...validationErrors, cvvError: 'CVV is required.' };
			isValidData = false;
		}

		if (isValidData) {
			setPaymentFormError(null);
		} else {
			setPaymentFormError({
				...validationErrors,
			});
		}

		return isValidData;
	};

	useEffect(() => {
		validate.current();
	}, [input]);

	return [input, handleInput, paymentFormError];
}
