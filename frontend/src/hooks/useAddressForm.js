import { useState, useEffect, useCallback, useRef } from 'react';

const errorInitState = {
	firstNameError: '',
	lastNameError: '',
	address1Error: '',
	cityError: '',
	zipError: '',
	countryError: '',
};

export function useAddressForm(initialState) {
	const [input, setInput] = useState(initialState);
	const [addressError, setError] = useState(errorInitState);
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
		const { firstName, lastName, address1, city, zip, country } = input;

		setError(errorInitState);

		if (firstName.length < 1) {
			setError({ ...addressError, firstNameError: 'First name is required' });
			isValidData = false;
		}
		if (lastName.length < 1) {
			setError({ ...addressError, lastNameError: 'Last name is required' });
			isValidData = false;
		}
		if (address1.length < 1) {
			setError({ ...addressError, address1Error: 'Address is required' });
			isValidData = false;
		}
		if (city.length < 1) {
			setError({ ...addressError, cityError: 'City is required' });
			isValidData = false;
		}
		if (zip.length < 1) {
			setError({ ...addressError, zipError: 'Zip code is required' });
			isValidData = false;
		}
		if (country.length < 1) {
			setError({ ...addressError, countryError: 'Country code is required' });
			isValidData = false;
		}

		if (isValidData) {
			setError(null);
		}
		return isValidData;
	}, [input, addressError]);

	useEffect(() => {
		validate.current();
	}, [input]);

	return [input, handleInput, addressError];
}
