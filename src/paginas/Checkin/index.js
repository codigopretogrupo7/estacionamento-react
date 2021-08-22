import React,{useState} from 'react';
import { Redirect } from 'react-router';
import {
	Button,
	Grid,
	FormControl,
	InputLabel,
	Input,
} from '@material-ui/core/';

import api from '../../api';

export default function Checkin(props) {
	const [redirect, setRedirect] = useState(false);

	async function InsereUsuario(event) {
		event.preventDefault();
		const dados = {
			nome: event.target.nome.value,
			sobrenome: event.target.sobrenome.value,
			telefone: event.target.telefone.value,
			cnh: event.target.cnh.value,
			senha: '.',
			email: '.',
			veiculo: [],
			estacionamentos: [],
		};
		try{
			const user = await api.post('/api/usuarios/add', dados);
			await cadastraVeiculo(
				user.data.id,
				event.target.modelo.value,
				event.target.cor.value,
				event.target.placa.value
			);

		}catch(e){
			console.log(e)
		}
	}

	async function cadastraVeiculo(idUser, modelo, cor, placa) {
		const dados = {
			modelo: modelo,
			cor: cor,
			placa: placa,
			usuario: {
				id: idUser,
			},
		};
		try{
			const veiculo = await api.post('/api/veiculos/add', dados);
			Check(veiculo.data.id);

		}catch(e){
			console.log(e)
		}
	}

	async function Check(id) {
		try{
			await api.post(
				`/api/vagas/insertveiculo?id=${props.match.params.id}&situacao=ocupada`,
				{ id: id }
			);
			setRedirect(true);

		}catch(e){
			console.log(e)
		}
	}

	if (redirect) {
	return	<Redirect to='/vagas' />;
	} else {
		return (
			<div>
				<form
					style={{
						width: '600px',
						height: '280px',
						background: '#fff',
						padding: '15px',
					}}
					onSubmit={InsereUsuario}
				>
					<Grid container spacing={6}>
						<Grid item xs={12} md={3}>
							<FormControl fullWidth>
								<InputLabel htmlFor='nome'>Nome</InputLabel>
								<Input id='nome' name='nome' type='text' />
							</FormControl>
						</Grid>

						<Grid item xs={12} md={3}>
							<FormControl fullWidth>
								<InputLabel htmlFor='sobrenome'>Sobrenome</InputLabel>
								<Input id='sobrenome' name='sobrenome' type='text' />
							</FormControl>
						</Grid>

						<Grid item xs={12} md={3}>
							<FormControl fullWidth>
								<InputLabel htmlFor='telefone'>Telefone</InputLabel>
								<Input id='telefone' name='telefone' type='text' />
							</FormControl>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControl fullWidth>
								<InputLabel htmlFor='cnh'>CNH</InputLabel>
								<Input id='cnh' name='cnh' type='text' />
							</FormControl>
						</Grid>

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
								color: 'white',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<Button variant='contained' color='primary' type='submit'>
								Check-in
							</Button>
						</Grid>
					</Grid>
				</form>
			</div>
		);
	}
}
