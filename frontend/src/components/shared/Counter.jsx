import '../../assets/css/Counter.css';

export function Counter({
	qty,
	countInStock,
	handleIncrement,
	handleDecrement,
	variant,
}) {
	const itemQty =
		qty >= countInStock && (countInStock === 0 || qty < 1) ? '0' : qty;

	return (
		<div className='qty-container'>
			{variant === 'left' ? (
				<>
					<span>{itemQty}</span>
					<div>
						<button disabled={qty >= countInStock} onClick={handleIncrement}>
							+
						</button>
						<button disabled={qty <= 1} onClick={handleDecrement}>
							-
						</button>
					</div>
				</>
			) : (
				<>
					<div className='qty-btn-container'>
						<button disabled={qty >= countInStock} onClick={handleIncrement}>
							+
						</button>
						<span style={{ width: '100%', textAlign: 'center' }}>
							{itemQty}
						</span>
						<button disabled={qty <= 1} onClick={handleDecrement}>
							-
						</button>
					</div>
				</>
			)}
		</div>
	);
}
