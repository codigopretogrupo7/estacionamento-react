import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import {
	Button,
	Grid,
	FormControl,
	InputLabel,
	InputAdornment,
	Input,
} from '@material-ui/core/';

import api from '../../api';

export default function Checkin(props) {
	const [redirect, setRedirect] = useState(false);
	const [nomeUsuario, setNomeUsuario] = useState('');
	const [sobrenome, setSobrenome] = useState('');
	const [telefone, setTelefone] = useState('');
	const [cnh, setCnh] = useState('');
	const [modelo, setModelo] = useState('');
	const [cor, setCor] = useState('');
	const [placa, setPlaca] = useState('');
	const [idVeiculo, setIdVeiculo] = useState('')
	const [Ativado, setAtivado] = useState(false);


	useEffect(() => {
		async function pegaDadosDeQuemEstaNaVaga() {
			try {
				const { data } = await api.get(
					`/api/vagas/listid?id=${props.match.params.id}`
				);

				if (data.veiculo) {
					setModelo(data.veiculo.modelo);
					setCor(data.veiculo.cor);
					setPlaca(data.veiculo.placa);
					setIdVeiculo(data.veiculo.id)
					const dados = await api.get(`/api/usuarios/list/id?id=${data.veiculo.usuario}`)
					setCnh(dados.data.cnh);
					setNomeUsuario(dados.data.nome);
					setSobrenome(dados.data.sobrenome);
					setTelefone(dados.data.telefone);
					setAtivado(true);
				}
			} catch (e) {
				console.log(e);
			}
		}
		pegaDadosDeQuemEstaNaVaga();
	}, [props.match.params.id]);

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
		try {
			const user = await api.post('/api/usuarios/add', dados);
			await cadastraVeiculo(
				user.data.id,
				event.target.modelo.value,
				event.target.cor.value,
				event.target.placa.value
			);
		} catch (e) {
			console.log(e);
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
		try {
			const veiculo = await api.post('/api/veiculos/add', dados);
			Check(veiculo.data.id);
		} catch (e) {
			console.log(e);
		}
	}

	async function Check(id) {
		try {
			await api.post(
				`/api/vagas/insertveiculo?id=${props.match.params.id}&situacao=ocupada`,
				{ id: id }
			);
			setRedirect(true);
		} catch (e) {
			console.log(e);
		}
	}
	
	async function Checks(event) {
		event.preventDefault()
		setAtivado(false)
		try {
			await api.post(
				`/api/vagas/insertveiculo?id=${props.match.params.id}&situacao=ocupada`,
				{ id: idVeiculo }
			);
			setRedirect(true);
		} catch (e) {
			console.log(e);
		}
	}
	

	if (redirect) {
		return <Redirect to='/vagas' />;
	} else {
		return (
			<div style={{display:"flex", justifyContent:"center", marginTop:"25px"}}>
				<form
					style={{
						width: '600px',
						height: '280px',
						background: '#fff',
						padding: '15px',
					}}
					onSubmit={Ativado ? Checks : InsereUsuario}
				>
					<Grid container spacing={6}>
						<Grid item xs={12} md={3}>
							<FormControl fullWidth>
								<InputLabel htmlFor='nome'>Nome</InputLabel>
								<Input
									id='nome'
									name='nome'
									type='text'
									startAdornment={
										Ativado ? (
											<InputAdornment>{nomeUsuario}</InputAdornment>
										) : (
											''
										)
									}
									defaultValue={nomeUsuario}
								/>
							</FormControl>
						</Grid>

						<Grid item xs={12} md={3}>
							<FormControl fullWidth>
								<InputLabel htmlFor='sobrenome'>Sobrenome</InputLabel>
								<Input
									id='sobrenome'
									name='sobrenome'
									type='text'
									startAdornment={
										Ativado ? <InputAdornment>{sobrenome}</InputAdornment> : ''
									}
									defaultValue={sobrenome}
								/>
							</FormControl>
						</Grid>

						<Grid item xs={12} md={3}>
							<FormControl fullWidth>
								<InputLabel htmlFor='telefone'>Telefone</InputLabel>
								<Input
									id='telefone'
									name='telefone'
									type='text'
									startAdornment={
										Ativado ? <InputAdornment>{telefone}</InputAdornment> : ''
									}
									defaultValue={telefone}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControl fullWidth>
								<InputLabel htmlFor='cnh'>CNH</InputLabel>
								<Input
									id='cnh'
									name='cnh'
									type='text'
									startAdornment={
										Ativado ? <InputAdornment>{cnh}</InputAdornment> : ''
									}
									defaultValue={cnh}
								/>
							</FormControl>
						</Grid>

						<Grid item xs={12} md={4}>
							<FormControl fullWidth>
								<InputLabel htmlFor='modelo'>Modelo</InputLabel>
								<Input
									id='modelo'
									name='modelo'
									type='text'
									startAdornment={
										Ativado ? <InputAdornment>{modelo}</InputAdornment> : ''
									}
									defaultValue={modelo}
								/>
							</FormControl>
						</Grid>

						<Grid item xs={12} md={4}>
							<FormControl fullWidth>
								<InputLabel htmlFor='cor'>Cor</InputLabel>
								<Input
									id='cor'
									name='cor'
									type='text'
									startAdornment={
										Ativado ? <InputAdornment>{cor}</InputAdornment> : ''
									}
									defaultValue={cor}
								/>
							</FormControl>
						</Grid>

						<Grid item xs={12} md={4}>
							<FormControl fullWidth>
								<InputLabel htmlFor='placa'>Placa</InputLabel>
								<Input
									id='placa'
									name='placa'
									type='text'
									startAdornment={
										Ativado ? <InputAdornment>{placa}</InputAdornment> : ''
									}
									defaultValue={placa}
								/>
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
