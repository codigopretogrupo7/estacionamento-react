import React,{ useState } from 'react'
import { 
  Container, 
  Button, 
  Grid, 
  FormControl, 
  InputLabel, 
  Input, 
  InputAdornment, 
  TextareaAutosize,
  TextField,
  IconButton,
  Box
} from '@material-ui/core/'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './estilo.css';
import api from '../../../api'


export default function CadastroEstacionamento(){

  const [ estado, setEstado ]     = useState('')
  const [ cidade,setCidade ]      = useState('')
  const [ bairro, setBairro ]     = useState('')
  const [ endereco, setEndereco ] = useState('')
  const [ senha, setSenha ]       = useState('')
  const [ enviar, setEnviar ]     = useState(false)
  const [ Ativado, setAtivado ]    = useState(false)


  const [values, setValues] = React.useState({
    password: '',
    ConfirmaSenha:'',
    showPassword: false,
  });


  async function buscaCep(cep){
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(json => {
      setEstado(json.uf)
      setCidade(json.localidade)
      setBairro(json.bairro)
      setEndereco(json.logradouro)
      setAtivado(true)
    })
  }

  function verificaCep(event){
    const cep = event.target.value
    if(cep.length === 8 ){
      buscaCep(cep)
    }else{
      setEstado('')
      setCidade('')
      setBairro('')
      setEndereco('')
      setAtivado(false)
    }
  }


  async function enviarFormulario(event){
    event.preventDefault()

    let arquivo = event.target.foto[0]
		let encoded = btoa(arquivo)
    
    const dados = {
			nomeEstacionamento: event.target.nomeDoEstacionamento.value,
			telefone: event.target.telefone.value,
			foto: encoded,
			cep: event.target.cep.value,
			estado: estado,
			cidade: cidade,
			bairro: bairro,
			logadouro: endereco,
			numero: event.target.numero.value,
			diasFuncionamento: null,
			hrAbertura: event.target.horarioDeAbertura.value,
			hrFechamento: event.target.horarioFechamento.value,
			numVagas: event.target.numeroDeVagas.value,
			ValorDaHora: event.target.ValorDaHora.value,
			DemaisHoras: event.target.DemaisHoras.value,
			Diaria: event.target.Diaria.value,
			descricao: event.target.descricao.value,
			emailEstacionamento: event.target.Email.value,
			senhaEstacionamento: event.target.Senha.value,
			mode: 'Estacionamento',
			"lat": "-16.586043139144625",
			"lng": "-49.33854118694673",
			"usuario": {
				"id": 1
			}
    }

    await api.post("/api/estacionamentos/add", {
      dados,headers:{
        'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWR2aWFzbmFhYWEiLCJleHAiOjE2MjkwNjQyMzZ9.6z-pCxNUVe7alu9CJdOy82vDjpzNCjqQiTgbyvap7pYbq0rPO9B4MEYn84-z2Sp5IodwE1qHhvs1uxwhEBrgrw'
      }
    })

    alert('Formulario Enviado, aguarde nosso email de confirmação!')
  }

  function comparaSenha(event){
    if(event.target.id === 'Senha'){
      setSenha(event.target.value)
    }else{
      if(event.target.value === senha){
        setEnviar(true)
      }else{
        setEnviar(false)
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

  return(
    <div className='tamanho'>
			<Container fixed style={{ textAlign: 'left' }}>
				<Box mt={7} ml={2} mb={3}>
					<p>
						Para melhor atende-lo precisamos de informações sobre seu
						estacionamento, preencha o formulario a seguir.
					</p>
				</Box>
				<form onSubmit={enviarFormulario}>
					<Grid container spacing={6}>
						{/* nome do estacionamento */}
						<>
							<Grid item xs={12} md={4}>
								<br />
								<FormControl fullWidth>
									<InputLabel htmlFor='nomeDoEstacionamento'>
										Nome do estacionamento
									</InputLabel>

									<Input
										id='nomeDoEstacionamento'
										name='nomeDoEstacionamento'
										type='text'
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4}>
								<br />
								<FormControl fullWidth>
									<InputLabel htmlFor='telefone'>Telefone</InputLabel>

									<Input id='telefone' name='telefone' type='tel' />
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<p>Imagem do estacionamento</p>
									<input id='foto' name='foto' type='file' accept='image/*' />
								</FormControl>
							</Grid>
						</>

						{/* Endereço do estacionamento */}
						<>
							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='cep'>Cep</InputLabel>
									<Input
										id='cep'
										name='cep'
										type='number'
										placeholder='ex.: 01001000'
										onChange={verificaCep}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='estado'>Estado</InputLabel>
									<Input
										id='estado'
										name='estado'
										type='text'
										startAdornment={
											Ativado ? <InputAdornment>{estado}</InputAdornment> : ''
										}
										defaultValue={estado}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='cidade'>Cidade</InputLabel>
									<Input
										id='cidade'
										name='cidade'
										type='text'
										startAdornment={
											Ativado ? <InputAdornment>{cidade}</InputAdornment> : ''
										}
										defaultValue={cidade}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='bairro'>Bairro</InputLabel>
									<Input
										id='bairro'
										name='bairro'
										type='text'
										startAdornment={
											Ativado ? <InputAdornment>{bairro}</InputAdornment> : ''
										}
										defaultValue={bairro}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='endereco'>Logradouro</InputLabel>
									<Input
										id='endereco'
										name='endereco'
										type='text'
										startAdornment={
											Ativado ? <InputAdornment>{endereco}</InputAdornment> : ''
										}
										defaultValue={endereco}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={2}>
								<FormControl fullWidth>
									<InputLabel htmlFor='numero'>Nº</InputLabel>
									<Input id='numero' name='numero' type='number' />
								</FormControl>
							</Grid>
						</>

						{/* Horarios de funcionamento, numero de vagas*/}
						<>
							<Grid item xs={12} md={6}>
								<Box mt={6} mb={6}>
									<Grid
										container
										direction='column'
										justifycontent='space-evenly'
										alignItems='center'
									>
										<>
											<Grid
												container
												direction='row'
												justify='center'
												alignItems='center'
											>
												<Grid item xs={3}>
													<FormControl>
														<TextField
															id='horarioDeAbertura'
															name='horarioDeAbertura'
															label='Abertura'
															type='time'
															defaultValue='00:00'
														/>
													</FormControl>
												</Grid>

												<Grid item>
													<FormControl>
														<TextField
															id='horarioFechamento'
															name='horarioFechamento'
															label='Fechamento'
															type='time'
															defaultValue='18:00'
														/>
													</FormControl>
												</Grid>
											</Grid>
										</>
									</Grid>
								</Box>
							</Grid>
						
							<Grid item xs={12} md={6}>
							<br/>
								<FormControl>
									<InputLabel htmlFor='numeroDeVagas'>
										Número de vagas
									</InputLabel>
									<Input
										id='numeroDeVagas'
										name='numeroDeVagas'
										type='number'
									/>
								</FormControl>
							</Grid>
						</>

						{/* Valores */}
						<>
								<Grid item xs={12} md={4}>
									<FormControl fullWidth>
										<InputLabel htmlFor='ValorDaHora'>
											Valor de 1 hora
										</InputLabel>
										<Input id='ValorDaHora' name='ValorDaHora' type='number' />
									</FormControl>
								</Grid>
								<Grid item xs={12} md={4}>
									<FormControl fullWidth>
										<InputLabel htmlFor='DemaisHoras'>
											Acréscimo por hora
										</InputLabel>
										<Input id='DemaisHoras' name='DemaisHoras' type='number' />
									</FormControl>
								</Grid>
								<Grid item xs={12} md={4}>
									<FormControl fullWidth>
										<InputLabel htmlFor='Diaria'>Valor da Diária</InputLabel>
										<Input id='Diaria' name='Diaria' type='number' />
									</FormControl>
								</Grid>
						</>

						{/* Descrição */}

						<>
							<Grid item xs={12} md={12}>
								<Box mt={1} ml={2} mb={-2}>
									<p>Conte-nos um pouco sobre o seu estacionamento</p>
								</Box>
							</Grid>

							<Grid item xs={12} md={12}>
								<FormControl fullWidth>
									<TextareaAutosize
										aria-label='maximum height'
										rows='5'
										placeholder='Estacionamento fundado em ...'
										name='descricao'
										id='descricao'
									/>
								</FormControl>
							</Grid>
						</>

						{/* Email senha*/}
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
										name='Senha'
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

						{/* Botao*/}
						<>
							<Grid item xs={12} md={12}>
								{enviar ? (
									<Button type='submit' variant='contained' color='primary'>
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
		</div>
  )
}
