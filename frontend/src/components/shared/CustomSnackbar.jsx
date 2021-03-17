import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';

export function CustomSnackbar({ open, setOpen, name }) {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={open}
				TransitionComponent={Slide}
				autoHideDuration={3000}
				onClose={handleClose}>
				<MuiAlert
					onClose={handleClose}
					severity='success'
					elevation={6}
					variant='filled'>
					'{name}' was added to your cart.
				</MuiAlert>
			</Snackbar>
		</div>
	);
}
