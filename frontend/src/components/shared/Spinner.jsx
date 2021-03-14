import '../../assets/css/Spinner.css';

export function Spinner() {
	return (
		<div className='container mt'>
			<div className='spinner'></div>
			<h2 className='spinner__label'>Loading...</h2>
		</div>
	);
}
