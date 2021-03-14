import { useState, useEffect, useCallback, useRef } from 'react';

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

	validate.current = useCallback(() => {
		let isValidData = true;
		const { cardName, cardNumber, expDate, cvv } = input;

		setPaymentFormError(errorInitialState);

		if (cardName.length < 1) {
			setPaymentFormError({
				...paymentFormError,
				cardNameError: 'Card name is required.',
			});
			isValidData = false;
		}
		if (cardNumber.length < 1) {
			setPaymentFormError({
				...paymentFormError,
				cardNumberError: 'Card number is required.',
			});
			isValidData = false;
		}
		if (expDate.length < 1) {
			setPaymentFormError({
				...paymentFormError,
				expDateError: 'Expiry date is required.',
			});
			isValidData = false;
		}
		if (cvv.length < 1) {
			setPaymentFormError({
				...paymentFormError,
				cvvError: 'CVV is required.',
			});
			isValidData = false;
		}

		if (isValidData) {
			setPaymentFormError(null);
		}

		return isValidData;
	}, [input, paymentFormError]);

	useEffect(() => {
		validate.current();
	}, [input]);

	return [input, handleInput, paymentFormError];
}
