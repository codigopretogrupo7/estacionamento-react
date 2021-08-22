import React, { useState } from 'react';
import Rodape from '../../Rodape';
import {
	Container,
	Button,
	Grid,
	FormControl,
	InputLabel,
	Input,
	InputAdornment,
	IconButton,
	Box,
} from '@material-ui/core/';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import './style.css';

import api from '../../../api';

export default function CadastroUsuario() {
	const [senha, setSenha] = useState('');
	const [enviar, setEnviar] = useState(false);

	const [values, setValues] = React.useState({
		password: '',
		ConfirmaSenha: '',
		showPassword: false,
	});

	async function enviarFormulario(event) {
		event.preventDefault();
		const dados = {
			nome: event.target.nome.value,
			sobrenome: event.target.sobrenome.value,
			telefone: event.target.telefone.value,
			cnh: event.target.cnh.value,
			email: event.target.Email.value,
			senha: event.target.Senha.value,
			mode: 'estacionamento',
			veiculo: [],
			estacionamentos: [],
		};
		try{
			await api.post('/api/usuarios/add', dados);
			alert('Cadastro concluido');
		}catch(e){
			console.log(e)
		}
	}

	function comparaSenha(event) {
		if (event.target.id === 'Senha') {
			setSenha(event.target.value);
		} else {
			if (event.target.value === senha) {
				setEnviar(true);
			} else {
				setEnviar(false);
			}
		}
	}

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className='tamanho'>
			<Container fixed style={{ textAlign: 'left' }}>
				<Box mt={7} ml={2} mb={3}>
					<p>
						Precisamos de algumas informações sobre você para efetuar um
						cadastro eficiente.
					</p>
				</Box>
				<form onSubmit={enviarFormulario}>
					<Grid container spacing={6}>
						{/* Dados Pessoais */}
						<>
							<Grid item xs={12} md={3}>
								<FormControl fullWidth>
									<InputLabel htmlFor='nome'>Nome</InputLabel>
									<Input id='nome' name='nome' type='text' />
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='sobrenome'>Sobrenome</InputLabel>
									<Input id='sobrenome' name='sobrenome' type='text' />
								</FormControl>
							</Grid>
							<Grid item xs={12} md={2}>
								<FormControl fullWidth>
									<InputLabel htmlFor='telefone'>Telefone</InputLabel>
									<Input id='telefone' name='telefone' type='tel' />
								</FormControl>
							</Grid>
							<Grid item xs={12} md={3}>
								<FormControl fullWidth>
									<InputLabel htmlFor='cnh'>CNH</InputLabel>
									<Input id='cnh' name='cnh' type='text' />
								</FormControl>
							</Grid>
						</>
						{/* Email senha */}
						<>
							<Grid item xs={12} md={12}>
								<Box mt={1} ml={2} mb={-2}>
									<p>
										Cadastre um email para que possamos entrar em contato e uma
										senha para logar na nossa plataforma
									</p>
								</Box>
							</Grid>

							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='Email'>Email</InputLabel>
									<Input id='Email' name='Email' type='email' />
								</FormControl>
							</Grid>

							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='Senha'>Senha</InputLabel>
									<Input
										id='Senha'
										type={values.showPassword ? 'text' : 'password'}
										value={values.password}
										onChange={handleChange('password')}
										endAdornment={
											<InputAdornment position='end'>
												<IconButton
													aria-label='toggle password visibility'
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
												>
													{values.showPassword ? (
														<Visibility />
													) : (
														<VisibilityOff />
													)}
												</IconButton>
											</InputAdornment>
										}
										onKeyUp={comparaSenha}
									/>
								</FormControl>
							</Grid>

							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='ConfirmarSenha'>
										Confirmar Senha
									</InputLabel>
									<Input
										id='ConfirmarSenha'
										type={values.showPassword ? 'text' : 'password'}
										value={values.ConfirmaSenha}
										onChange={handleChange('ConfirmaSenha')}
										endAdornment={
											<InputAdornment position='end'>
												<IconButton
													aria-label='toggle password visibility'
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
												>
													{values.showPassword ? (
														<Visibility />
													) : (
														<VisibilityOff />
													)}
												</IconButton>
											</InputAdornment>
										}
										onKeyUp={comparaSenha}
									/>
								</FormControl>
							</Grid>
						</>

						{/* Botao */}
						<>
							<Grid item xs={12} md={12}>
								<Box mt={1} ml={2} mb={-2}>
									<p>
										O botao de cadastro mudara de cor se as suas senhas
										coincidirem
									</p>
								</Box>
							</Grid>
							<Grid
								item
								xs={12}
								md={12}
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									marginBottom: '15px',
								}}
							>
								{enviar ? (
									<Button
										type='submit'
										variant='contained'
										color='primary'
									>
										Cadastrar
									</Button>
								) : (
									<Button type='submit' variant='contained' disabled>
										Cadastrar
									</Button>
								)}
							</Grid>
						</>
					</Grid>
				</form>
			</Container>
			<Rodape />
		</div>
	);
}
