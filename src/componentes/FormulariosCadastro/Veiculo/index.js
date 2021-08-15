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


export default function CadastroVeiculo(){

  return(
    <div className='tamanho'>
			<Container fixed style={{ textAlign: 'left' }}>
				<Box mt={7} ml={2} mb={3}>
					<p>	Preencha as informações do seu veiculo</p>
				</Box>
				<form>
					<Grid container spacing={6}>
						
							<Grid item xs={12} md={3}>
								<FormControl fullWidth>
									<InputLabel htmlFor='modelo'>Modelo</InputLabel>
									<Input id='modelo' name='modelo' type='text' />
								</FormControl>
							</Grid>


							<Grid item xs={12} md={4}>
								<FormControl fullWidth>
									<InputLabel htmlFor='placa'>Placa</InputLabel>
									<Input id='placa' name='placa' type='text' />
								</FormControl>
							</Grid>


							<Grid item xs={12} md={2}>
								<FormControl fullWidth>
									<InputLabel htmlFor='cor'>Cor</InputLabel>
									<Input id='cor' name='cor' type='text' />
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

									<Button type='submit' variant='contained'>
										Cadastrar
									</Button>
								
							</Grid>
					</Grid>
				</form>
			</Container>
		</div>
  )
}
