import React, { useState, useEffect } from 'react';

import { Container, Grid, Box } from '@material-ui/core';

import Rodape from '../../componentes/Rodape';
import Vaga from '../../componentes/Vaga';
import api from '../../api';

export default function VagasEstacionamento() {
	const [vagas, setVagas] = useState([]);
	const [vagasLivres, setVagasLivres] = useState(0);
	const id = localStorage.getItem('id')
	

	useEffect(() => {
			setTimeout( () => {
				pegaVagas()
				pegaVagasLivres()
			},5000)
	});
	
	async function pegaVagas(){
		try{
			const {data} = await api.get(`/api/vagas/listvaga?id=${id}`)
			setVagas(data)
		}catch(e){
			console.log(e)
		}
	}

	async function pegaVagasLivres(){
		try{
			const {data} = await api.get(`/api/vagas/vagaslivres?id=${id}`)
			setVagasLivres(data)
		}catch(e){
			console.log(e)
		}
	}

	return (
		<>
			<Container fixed>
				<Box mt={2}>
					<p>
					Vagas Livres : {vagasLivres}/{vagas.length}
					</p>
				</Box>

				<Grid container spacing={3}>
					{vagas &&
						vagas.map((dados) => (						
							<Vaga
								key={dados.id}
								idVaga={dados.id}
								status={dados.situacao}
								numeroVaga={dados.numeroVaga}
								placaOcupante={dados.veiculo != null ? dados.veiculo.placa : '' }
							/>
						))}
				</Grid>
			</Container>
			<Rodape />
		</>
	);
}
