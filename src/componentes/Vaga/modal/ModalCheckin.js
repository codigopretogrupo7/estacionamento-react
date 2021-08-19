import React from 'react';
import Modal from '@material-ui/core/Modal';
import Checkins from '@material-ui/icons/Add';

import Checkin from '../../../paginas/Checkin';

export default function ModalCheckin(props) {
	const [open, setOpen] = React.useState(false);
 
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Checkins
				onClick={handleOpen}
				color='primary'
				fontSize='large'
				style={{ cursor: 'pointer' }}
			/>
			<Modal
				open={open}
				onClose={handleClose}
        style={{
          width: '100vw',
          height: '100vh',
          background: 'rgba(999,999,999,0.4)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
			>
				<Checkin id={props.id}/>
			</Modal>
		</div>
	);
}
