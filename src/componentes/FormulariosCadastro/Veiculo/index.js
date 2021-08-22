import React, { useContext, useState } from 'react';
import { Context } from '../../../Context/AuthContext';
import { Redirect } from 'react-router';
import api from '../../../api';


import {
	Container,
	Button,
	Grid,
	FormControl,
	InputLabel,
	Input,
	Box,
} from '@material-ui/core/';

import './estilo.css';

export default function CadastroVeiculo() {
	const { id } = useContext(Context);
	const [redirect, setRedirect] = useState(false);

	async function enviarFormulario(event) {
		event.preventDefault();

		const dados = {
			modelo: event.target.modelo.value,
			placa: event.target.placa.value,
			cor: event.target.cor.value,
			usuario: {
				id: id,
			},
		};

		try{
			await api.post('/api/veiculos/add', dados);
	
			alert('veiculo cadastrado')
			setRedirect(true)
		}catch(e){
			console.log(e)
		}
	}

	if (redirect) {
		return <Redirect to='/' />;
	} else {
		return (
			<div className='tamanho'>
				<Container fixed style={{ textAlign: 'left' }}>
					<Box mt={7} ml={2} mb={3}>
						<p> Preencha as informações do seu veiculo</p>
					</Box>
					<form onSubmit={enviarFormulario}>
						<Grid container spacing={6}>
							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='modelo'>Modelo</InputLabel>
									<Input id='modelo' name='modelo' type='text' />
								</FormControl>
							</Grid>

							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='cor'>Cor</InputLabel>
									<Input id='cor' name='cor' type='text' />
								</FormControl>
							</Grid>

							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='placa'>Placa</InputLabel>
									<Input id='placa' name='placa' type='text' />
								</FormControl>
							</Grid>

							<Grid
								item
								xs={12}
								md={12}
								style={{
									display: 'flex',
									justifyContent: 'left',
									alignItems: 'left',
									marginBottom: '15px',
								}}
							>
								<Button type='submit' variant='contained' color='primary'>
									Cadastrar
								</Button>
							</Grid>
						</Grid>
					</form>
				</Container>
			</div>
		);
	}
}
