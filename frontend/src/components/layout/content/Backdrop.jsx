import '../../../assets/css/Backdrop.css';

export function Backdrop({ show, click }) {
	return show && <div className='backdrop' onClick={click}></div>;
}
