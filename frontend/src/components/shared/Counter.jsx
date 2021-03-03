import '../../assets/css/Counter.css';

export function Counter({
	qty,
	countInStock,
	handleIncrement,
	handleDecrement,
}) {
	return (
		<div className='qty__container'>
			<span>{qty}</span>
			<div>
				<button disabled={qty >= countInStock} onClick={handleIncrement}>
					+
				</button>
				<button disabled={qty <= 1} onClick={handleDecrement}>
					-
				</button>
			</div>
		</div>
	);
}
