const InCurrency = (amount, currencyCode = 'USD') =>
	amount?.toLocaleString('en-US', {
		style: 'currency',
		currency: currencyCode,
	});

export { InCurrency };
