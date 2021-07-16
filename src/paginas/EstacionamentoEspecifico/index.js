import React, { useState, useEffect } from 'react';

import { Container, Grid, Box } from '@material-ui/core';
import EstacionamentoParceiro from '../../componentes/EstacionamentosEspecificos/EstacionamentoParceiro';
import Infos from '../../componentes/EstacionamentosEspecificos/Infos';
import Rodape from '../../componentes/Rodape';
import api from '../../api';

export default function EstacionamentoEspecifico(props) {
	const [estacionamento, setEstacionamento] = useState([]);

	useEffect(() => {
		pegaEstacionamento();
	}, []);

	async function pegaEstacionamento() {
		const { data } = await api.get(`/parkings/${props.match.params.id}`);
		setEstacionamento(...estacionamento, [data]);
	}

	return (
		<>
		{estacionamento && estacionamento.map(e => (
			<Container key={e.id} style={{ marginBottom: '30px', marginTop: '20px'}} >
				<Grid container spacing={8}>
					<Grid item xs={12} md={7}>
						<Box display='flex' justifyContent='center' alignItems='center'>
							<EstacionamentoParceiro
								endereco={e.Rua}
								numero={e.Numero}
								cidade={e.Cidade}
								estado={e.Bairro}
								cep={e.cep}
								horarioDeAbertura={e.horarioDeAbertura}
								horarioFechamento={e.horarioFechamento}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={5}>
						<Box display='flex' justifyContent='flex-start' alignItems='center'>
							<Infos 
								nomeDoEstacionamento={e.nomeDoEstacionamento}
								numeroDeVagas={e.numeroDeVagas}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		))}
			<Rodape />
		</>
	);
}
