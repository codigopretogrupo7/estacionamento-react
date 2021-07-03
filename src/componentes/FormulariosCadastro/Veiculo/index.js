import React, { useContext, useState } from 'react';

import { Grid, FormControl, InputLabel, Input } from '@material-ui/core/';

import { Context } from '../../../Context/SubmitCar';

export default function FormularioVeiculo(props) {
	const [modelo, setModelo] = useState('');
	const [cor, setCor] = useState('');
	const [placa, setPlaca] = useState('');
	const { getCar } = useContext(Context);

	getCar(modelo, cor, placa);

	return (
		<>
			<Grid item xs={12} md={4}>
				<FormControl fullWidth>
					<InputLabel htmlFor={'modelo' + props.numero}>
						Modelo {props.numero}
					</InputLabel>
					<Input
						id={'modelo' + props.numero}
						name={'modelo' + props.numero}
						type='text'
						onChange={(event) => setModelo(event.target.value)}
					/>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={4}>
				<FormControl fullWidth>
					<InputLabel htmlFor={'cor' + props.numero}>Cor</InputLabel>
					<Input
						id={'cor' + props.numero}
						name={'cor' + props.numero}
						type='text'
						onChange={(event) => setCor(event.target.value)}
					/>
				</FormControl>
			</Grid>
			<Grid item xs={9} md={3}>
				<FormControl fullWidth>
					<InputLabel htmlFor={'placa' + props.numero}>Placa</InputLabel>
					<Input
						id={'placa' + props.numero}
						name={'placa' + props.numero}
						type='text'
						onChange={(event) => {setPlaca(event.target.value)}}
					/>
				</FormControl>
			</Grid>
		</>
	);
}
