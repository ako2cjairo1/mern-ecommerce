import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import { InCurrency } from '../../utils';
import CreditCard from '@material-ui/icons/CreditCardTwoTone';

export function ReviewCheckout({
	shippingInfo,
	paymentInfo,
	cartItems,
	subTotal,
	itemCount,
}) {
	const {
		firstName,
		lastName,
		address1,
		address2,
		city,
		state,
		zip,
		country,
	} = shippingInfo;
	const { cardName, cardNumber, expDate } = paymentInfo;

	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Order summary
			</Typography>
			<List disablePadding>
				{cartItems.map(({ _id: id, name, description, price, qty }) => (
					<ListItem key={id}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignContent: 'center',
								flex: 1,
							}}>
							<ListItemText
								primary={name}
								secondary={description}
								style={{
									textAlign: 'justify',
									width: '90%',
									marginRight: '20px',
								}}
							/>
							<Typography
								variant='body2'
								style={{
									paddingTop: '10px',
									textAlign: 'right',
								}}>
								{InCurrency(price)}
								<br />
								{`x ${qty}`}
							</Typography>
						</div>
					</ListItem>
				))}
				<div className='horizontal_line' />
				<ListItem>
					<ListItemText primary='Total' />
					<Typography
						style={{ fontWeight: '700', textAlign: 'right' }}
						variant='subtitle1'>
						{InCurrency(subTotal)}
						<br />
						<div style={{ fontSize: 'smaller' }}>
							{itemCount > 1 ? `(${itemCount} items)` : null}
						</div>
					</Typography>
				</ListItem>
			</List>
			<div className='horizontal_line' />
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Typography variant='h6' gutterBottom>
						Shipping
					</Typography>
					<Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
					<Typography
						gutterBottom>{`${address1} ${address2} ${city} ${state} ${country} ${zip}`}</Typography>
				</Grid>
				<Grid item container direction='column' xs={12} sm={6}>
					<Typography variant='h6' gutterBottom>
						Payment details
					</Typography>
					<Grid container>
						<React.Fragment>
							<Grid item xs={5}>
								<Typography gutterBottom>Card Holder</Typography>
							</Grid>
							<Grid item xs={7}>
								<Typography
									variant='subtitle2'
									style={{ textTransform: 'uppercase' }}
									gutterBottom>
									{cardName}
								</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment>
							<Grid item xs={5}>
								<Typography gutterBottom>Card Number</Typography>
							</Grid>
							<Grid item xs={7}>
								<Typography
									variant='subtitle2'
									style={{
										textTransform: 'uppercase',
										letterSpacing: '0.08rem',
									}}
									gutterBottom>
									●●●● ●●●● ●●●●{' '}
									{cardNumber.substring(
										cardNumber.length - 4,
										cardNumber.length
									)}
								</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment>
							<Grid item xs={5}>
								<Typography gutterBottom>Type, Exp. Date</Typography>
							</Grid>
							<Grid item xs={7}>
								<div
									style={{ display: 'flex', justifyContent: 'space-between' }}>
									<div style={{ display: 'flex' }}>
										<CreditCard style={{ marginRight: '5px' }} />
										<Typography
											variant='subtitle2'
											style={{ textTransform: 'uppercase', marginTop: '2px' }}
											gutterBottom>
											Visa
										</Typography>
									</div>
									<Typography variant='subtitle2' gutterBottom>
										{expDate}
									</Typography>
								</div>
							</Grid>
						</React.Fragment>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
