import React, {useContext} from 'react';
import { Context } from '../../Context/AuthContext'

import {
	Box,
	Card,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default function Infos(props) {

  const { authenticated, mode } = useContext(Context)

	return (
		<Card >
			<Box m={5} style={{ textAlign: 'justify' }}>

        <p>Nome: {props.nomeDoEstacionamento}</p>
        <p>Numero de vagas livres: 10 / {props.numeroDeVagas}</p>

				<p>
					Serviços do local:<br/> <CheckBoxIcon style={{ color: 'green' }} />{' '}
					Lava-Rapido <br/><CheckBoxIcon style={{ color: 'green' }} /> Estacionamento
					coberto{' '}
				</p>
				<p>Valores </p>
        <Box mr={4}>

				<TableContainer component={Paper} style={{ marginBottom: '30px' }}>
					<Table aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>1 hora</TableCell>
								<TableCell>2 horas</TableCell>
								<TableCell>3 horas</TableCell>
								<TableCell>Diaria</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>15,00</TableCell>
								<TableCell>16,00</TableCell>
								<TableCell>17,00</TableCell>
								<TableCell>25,00</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
        </Box>

				<Box mb={5}>
          {
            authenticated && mode === "client" ?
            <Button
						variant='contained'
						color='primary'
						onClick={() => {
              alert(
                'Uma vaga em seu nome esta reservada Pelo periodo de 2 horas'
							);
						}}
					>
						Reservar Vaga
					</Button>
            :
          " "
          }
				</Box>
			</Box>
		</Card>
	);
}
