import React,{ useState } from 'react'
import { 
  Container, 
  Button, 
  Grid, 
  FormControl, 
  InputLabel, 
  Input, 
  InputAdornment,
  IconButton,
  Box
} from '@material-ui/core/'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


import FormVeiculo from '../Veiculo'


export default function CadastroUsuario(){

  const [ senha, setSenha ]       = useState('')
  const [ enviar, setEnviar ]     = useState(false)
  const [ numeroCarros, setNumeroCarros ] = useState(2)
  const [ veiculos, setVeiculos ] = useState([1])

  const [ values, setValues ] = React.useState({
    password: '',
    ConfirmaSenha:'',
    showPassword: false,
  });


  function enviarFormulario(event){
    event.preventDefault()
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
  
  function adicionaVeiculo(){
    setNumeroCarros(numeroCarros + 1)
  }

  function retiraVeiculo(id){
    const NovaLista = veiculos.filter(item=>item !== id)
    setVeiculos(NovaLista)
    setNumeroCarros(numeroCarros-1)
  }

  return(
    <Container fixed style={{textAlign: 'left'}}>
      <Box mt={7} ml={2} mb={3}>
        <p>Precisamos de algumas informações sobre você para efetuar um cadastro eficiente.</p>
      </Box>
      <form  onSubmit={enviarFormulario}>
        <Grid container spacing={6}>  

          {/* Dados Pessoais */}
          <> 
            <Grid item xs={12} md={3}>
              <FormControl fullWidth >
                <InputLabel htmlFor="nome">Nome</InputLabel>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth >
                <InputLabel htmlFor="sobrenome">Sobrenome</InputLabel>
                <Input
                  id="sobrenome"
                  name="sobrenome"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth >
                <InputLabel htmlFor="telefone">Telefone</InputLabel>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth >
                <InputLabel htmlFor="cnh">CNH</InputLabel>
                <Input
                  id="cnh"
                  name="cnh"
                  type="text"
                />
              </FormControl>
            </Grid>
          </>
          <>
            <Grid item xs={12} md={12} >
              <Box mt={1} ml={2} mb={-2}>
                <p>Cadastre os veiculos que você gostaria que estivessem conectados a sua conta.</p>           
              </Box>
            </Grid>

            {

              veiculos && veiculos.map((n) => (
                <FormVeiculo numero={n} key={n} />
              ))
              
            }
            <Box mt={6} ml={1} >
              <span 
                style={{marginRight:'5px',cursor:'pointer'}}
                onClick={ ()=>{
                  setVeiculos([...veiculos, numeroCarros])
                  adicionaVeiculo()}
                }>
                <AddCircleIcon color='primary'/>
              </span>
              <span 
                style={{ marginLeft:'5px',cursor:'pointer'}} 
                onClick={ ()=>{
                  retiraVeiculo(numeroCarros-1)}
                }>
                <RemoveCircleIcon color='secondary'/>
              </span>
            </Box>
          </>


          
          {/* Email senha */}
          <>
            <Grid item xs={12} md={12} >
              <Box mt={1} ml={2} mb={-2}>
                <p>Cadastre um email para que possamos entrar em contato e uma senha para logar na nossa plataforma</p>
              </Box>
            </Grid>          
            
            
            <Grid item xs={12} md={4} >
              <FormControl fullWidth >
                <InputLabel htmlFor="Email">Email</InputLabel>
                <Input
                  id="Email"
                  name="Email"
                  type="email"
                 
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4} >
              <FormControl fullWidth >
                <InputLabel htmlFor="Senha">Senha</InputLabel>
                  <Input
                    id="Senha"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    onKeyUp={comparaSenha}
                  />
              </FormControl>
            </Grid>


            <Grid item xs={12} md={4} >
              <FormControl fullWidth >
                  <InputLabel htmlFor="ConfirmarSenha">Confirmar Senha</InputLabel>
                    <Input
                      id="ConfirmarSenha"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.ConfirmaSenha}
                      onChange={handleChange('ConfirmaSenha')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
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
            <Grid item xs={12} md={12} >
              <Box mt={1} ml={2} mb={-2}>
                <p>O botao de cadastro mudara de cor se as suas senhas coincidirem</p>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} >

              {
                enviar 
                ? 
                <Button type="submit" variant='contained' color='primary' >Cadastrar</Button>
                : 
                <Button type="submit" variant='contained' disabled>Cadastrar</Button>
              }
            </Grid>
          </>
        </Grid>
      </form>

    </Container>
  )
}