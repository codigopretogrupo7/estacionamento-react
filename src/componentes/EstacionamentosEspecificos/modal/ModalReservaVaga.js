import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ModalConteudo from './ModalConteudo';

export default function ModalReservaVaga(props) {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant='contained' color='primary' onClick={handleOpen}>
				Reservar Vaga
			</Button>

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
				<ModalConteudo vaga={props.vaga} />
			</Modal>
		</div>
	);
}
