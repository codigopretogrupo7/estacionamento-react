import React, {useContext, useEffect, useState} from 'react';
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

import api from '../../api';



export default function RightComponent(props) {
	const [totalVagasLivres , setTotalVagasLivres] = useState('')
	const ids = props.id

	useEffect(() => {
		if(ids !== undefined){
			vagasLivres()
		}
	})

	async function vagasLivres(){
		const { data } = await api.get(`/api/vagas/vagaslivres?id=${ids}`)
		setTotalVagasLivres(data)
	}

	async function reservaVaga(){
		const veiculo = {"id":1}
		const {data} = await api.post(`/api/vagas/reservavaga?id=${props.id}`,veiculo)	
		vagasLivres()	
		alert(`A vaga ${data.numeroVaga} esta reservada em seu nome pelo periodo de 2 horas`);
	}

  const { authenticated, mode } = useContext(Context)

	return (
		<Card >
			<Box m={5} style={{ textAlign: 'justify' }}>

        <p>Nome: {props.nomeDoEstacionamento}</p>
        <p>Numero de vagas livres: {totalVagasLivres} / {props.numeroDeVagas}</p>

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
								<TableCell>{props.valorHora}</TableCell>
								<TableCell>{props.valorHora + props.valorAdicional}</TableCell>
								<TableCell>{props.valorHora + props.valorAdicional + props.valorAdicional}</TableCell>
								<TableCell>{props.valorDiaria}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
        </Box>

				<Box mb={5}>
          {
            authenticated && mode === "cliente" ?
            <Button
						variant='contained'
						color='primary'
						onClick={reservaVaga}
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
