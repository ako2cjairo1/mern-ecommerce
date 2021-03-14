import {
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';
import React from 'react';

export function AddressForm({ input, handleInput, error }) {
	const {
		firstName,
		lastName,
		address1,
		address2,
		city,
		state,
		zip,
		country,
		saveAddress,
	} = input;

	const {
		firstNameError,
		lastNameError,
		address1Error,
		cityError,
		zipError,
		countryError,
	} = error || '';

	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Shipping address
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='firstName'
						name='firstName'
						label={firstNameError ? `${firstNameError}` : 'First Name'}
						fullWidth
						autoComplete='given-name'
						value={firstName}
						onChange={handleInput}
						error={firstNameError ? true : false}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='lastName'
						name='lastName'
						label={lastNameError ? lastNameError : 'Last Name'}
						fullWidth
						autoComplete='family-name'
						value={lastName}
						onChange={handleInput}
						error={lastNameError ? true : false}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id='address1'
						name='address1'
						label={address1Error ? address1Error : 'Address line 1'}
						fullWidth
						autoComplete='shipping address-line1'
						value={address1}
						onChange={handleInput}
						error={address1Error ? true : false}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id='address2'
						name='address2'
						label='Address line 2'
						fullWidth
						autoComplete='shipping address-line2'
						value={address2}
						onChange={handleInput}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='city'
						name='city'
						label={cityError ? cityError : 'City'}
						fullWidth
						autoComplete='shipping address-level2'
						value={city}
						onChange={handleInput}
						error={cityError ? true : false}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id='state'
						name='state'
						label='State/Province/Region'
						fullWidth
						value={state}
						onChange={handleInput}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='zip'
						name='zip'
						label={zipError ? zipError : 'Zip / Postal code'}
						fullWidth
						autoComplete='shipping postal-code'
						value={zip}
						onChange={handleInput}
						error={zipError ? true : false}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='country'
						name='country'
						label={countryError ? countryError : 'Country'}
						fullWidth
						autoComplete='shipping country'
						value={country}
						onChange={handleInput}
						error={countryError ? true : false}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Checkbox
								color='secondary'
								name='saveAddress'
								checked={saveAddress}
								onClick={handleInput}
							/>
						}
						label='Use this address for payment details'
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
