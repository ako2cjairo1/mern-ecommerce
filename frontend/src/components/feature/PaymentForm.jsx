import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export function PaymentForm({ input, handleInput, error }) {
	const { cardName, cardNumber, expDate, cvv, saveCard } = input;

	const { cardNameError, cardNumberError, expDateError, cvvError } =
		error || '';
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Payment method
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id='cardName'
						name='cardName'
						label={cardNameError ? cardNameError : 'Name on card'}
						error={cardNameError ? true : false}
						helperText='Exact card holder name on your card.'
						fullWidth
						autoComplete='cc-name'
						value={cardName}
						onChange={handleInput}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id='cardNumber'
						name='cardNumber'
						label={cardNumberError ? cardNumberError : 'Card number'}
						error={cardNumberError ? true : false}
						helperText='Sixteen (16) digits on your card'
						fullWidth
						autoComplete='cc-number'
						value={cardNumber}
						onChange={handleInput}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id='expDate'
						name='expDate'
						label={expDateError ? expDateError : 'Expiry date'}
						error={expDateError ? true : false}
						helperText='(MM/YYYY)'
						fullWidth
						autoComplete='cc-exp'
						value={expDate}
						onChange={handleInput}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id='cvv'
						name='cvv'
						label={cvvError ? cvvError : 'CVV'}
						error={cvvError ? true : false}
						helperText='Last three digits on signature strip'
						fullWidth
						autoComplete='cc-csc'
						value={cvv}
						onChange={handleInput}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Checkbox
								color='secondary'
								name='saveCard'
								checked={saveCard}
								onClick={handleInput}
							/>
						}
						label='Remember credit card details for next time'
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
