import React from 'react';

import { Container, Grid, Box } from '@material-ui/core';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

export default function oi (props){
  return(
    <>
    <Container key={props.e.id} style={{ marginBottom: '30px', marginTop: '20px'}} >
				<Grid container spacing={8}>
					<Grid item xs={12} md={7}>
						<Box display='flex' justifyContent='center' alignItems='center'>
							<LeftComponent
								endereco={props.e.logadouro}
								numero={props.e.numero}
								cidade={props.e.cidade}
								estado={props.e.bairro}
								cep={props.e.cep}
								horarioDeAbertura={props.e.hrAbertura}
								horarioFechamento={props.e.hrFechamento}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={5}>
						<Box display='flex' justifyContent='flex-start' alignItems='center'>
							<RightComponent 
								id={props.e.id}
								nomeDoEstacionamento={props.e.nomeEstacionamento}
								numeroDeVagas={props.e.numVagas}
                valorHora={props.e.vlHora}
                valorAdicional={props.e.vlAdicional}
                valorDiaria={props.e.vlDiaria}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
    </>
  )
}