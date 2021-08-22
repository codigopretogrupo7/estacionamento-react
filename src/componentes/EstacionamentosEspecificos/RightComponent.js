import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../Context/AuthContext'
import ModalReservaVaga from './modal/ModalReservaVaga'

import {
	Box,
	Card,
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
		try{
			const { data } = await api.get(`/api/vagas/vagaslivres?id=${ids}`)
			setTotalVagasLivres(data)
		}catch(e){
			console.log(e)
		}
	}


  const { authenticated } = useContext(Context)

	const valorhora = props.valorHora + 0
	const duashoras = props.valorHora + props.valorAdicional
	const treshoras = props.valorHora + props.valorAdicional + props.valorAdicional
	const diaria = props.valorDiaria + 0

	return (
		<Card >
			<Box m={5} style={{ textAlign: 'justify' }}>

        <p>Nome: {props.nomeDoEstacionamento}</p>
        <p>Numero de vagas livres: {totalVagasLivres} / {props.numeroDeVagas}</p>

				<p>Telefone: {props.telefone}</p>

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
								<TableCell>{valorhora.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</TableCell>
								<TableCell>{duashoras.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</TableCell>
								<TableCell>{treshoras.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</TableCell>
								<TableCell>{diaria.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
        </Box>

				<Box mb={5}>
          {
            authenticated ?
						<ModalReservaVaga vaga={props.id}/>
            :
          " "
          }
				</Box>
			</Box>
		</Card>
	);
}
