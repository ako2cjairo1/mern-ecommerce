import { useState, useEffect, useRef } from 'react';

const errorInitState = {
	emailError: '',
	passwordError: '',
};

export function useLoginForm(initialState, callback) {
	const [input, setInput] = useState(initialState);
	const [error, setError] = useState(errorInitState);
	const validate = useRef(() => null);

	const handleInput = (evt) => {
		const { name, value, checked, type } = evt.target;

		if (type === 'checkbox') {
			setInput({ ...input, [name]: checked });
		} else {
			setInput({ ...input, [name]: value });
		}
	};

	const { email, password } = input;
	validate.current = () => {
		let validationErrors = {};
		let isValidResult = true;

		setError(errorInitState);
		if (email.length <= 0) {
			validationErrors = { emailError: 'Email is required to log in.' };
			isValidResult = false;
		}

		if (password.length <= 0) {
			validationErrors = {
				...validationErrors,
				passwordError: 'Password is required to log in.',
			};
			isValidResult = false;
		}

		if (!isValidResult) {
			setError({ ...validationErrors });
		}

		return isValidResult;
	};

	useEffect(() => {
		validate.current();
	}, [input]);

	const handleReset = () => {
		setError(errorInitState);
		setInput(initialState);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		if (validate.current()) {
			callback();
			handleReset();
		}
	};
	return [input, handleInput, handleSubmit, error];
}
