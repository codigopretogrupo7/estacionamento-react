import React, { useState, useEffect } from 'react';

import Vaga from '../../componentes/Vaga';

import { Container, Grid, Box } from '@material-ui/core';
import Rodape from '../../componentes/Rodape';

export default function VagasEstacionamento() {
	const [vagas, setVagas] = useState([]);
	const [pausa, setPausa] = useState(false);
	const [vagasOcupadas, setVagasOcupadas] = useState(0);

	useEffect(() => {
		carregaVagas();
	}, []);

	function carregaVagas() {
		let Vagas = [
			{
				idVaga: 1,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A1',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 2,
				idEstacionamento: 1,
				idOcupante: 1,
				numeroVaga: 'A2',
				vazia: false,
				nomeOcupante: 'Lucas Damasceno',
				placaOcupante: 'ABC-0000',
				modeloOcupante: 'BMW',
			},
			{
				idVaga: 3,
				idEstacionamento: 1,
				idOcupante: 2,
				numeroVaga: 'A3',
				vazia: false,
				nomeOcupante: 'Joyce Andrade',
				placaOcupante: 'DEF-1111',
				modeloOcupante: 'NOVO UNO',
			},
			{
				idVaga: 4,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A4',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 5,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A5',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 6,
				idEstacionamento: 1,
				idOcupante: 3,
				numeroVaga: 'A6',
				vazia: false,
				nomeOcupante: 'Boni',
				placaOcupante: 'JKL-1582',
				modeloOcupante: 'Carro do debiloide',
			},
			{
				idVaga: 1,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A1',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 2,
				idEstacionamento: 1,
				idOcupante: 1,
				numeroVaga: 'A2',
				vazia: false,
				nomeOcupante: 'Lucas Damasceno',
				placaOcupante: 'ABC-0000',
				modeloOcupante: 'BMW',
			},
			{
				idVaga: 3,
				idEstacionamento: 1,
				idOcupante: 2,
				numeroVaga: 'A3',
				vazia: false,
				nomeOcupante: 'Joyce Andrade',
				placaOcupante: 'DEF-1111',
				modeloOcupante: 'NOVO UNO',
			},
			{
				idVaga: 4,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A4',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 5,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A5',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 6,
				idEstacionamento: 1,
				idOcupante: 3,
				numeroVaga: 'A6',
				vazia: false,
				nomeOcupante: 'Boni',
				placaOcupante: 'JKL-1582',
				modeloOcupante: 'Carro do debiloide',
			},
			{
				idVaga: 1,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A1',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 2,
				idEstacionamento: 1,
				idOcupante: 1,
				numeroVaga: 'A2',
				vazia: false,
				nomeOcupante: 'Lucas Damasceno',
				placaOcupante: 'ABC-0000',
				modeloOcupante: 'BMW',
			},
			{
				idVaga: 3,
				idEstacionamento: 1,
				idOcupante: 2,
				numeroVaga: 'A3',
				vazia: false,
				nomeOcupante: 'Joyce Andrade',
				placaOcupante: 'DEF-1111',
				modeloOcupante: 'NOVO UNO',
			},
			{
				idVaga: 4,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A4',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 5,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A5',
				vazia: false,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 6,
				idEstacionamento: 1,
				idOcupante: 3,
				numeroVaga: 'A6',
				vazia: false,
				nomeOcupante: 'Boni',
				placaOcupante: 'JKL-1582',
				modeloOcupante: 'Carro do debiloide',
			},
			{
				idVaga: 1,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A1',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 2,
				idEstacionamento: 1,
				idOcupante: 1,
				numeroVaga: 'A2',
				vazia: false,
				nomeOcupante: 'Lucas Damasceno',
				placaOcupante: 'ABC-0000',
				modeloOcupante: 'BMW',
			},
			{
				idVaga: 3,
				idEstacionamento: 1,
				idOcupante: 2,
				numeroVaga: 'A3',
				vazia: false,
				nomeOcupante: 'Joyce Andrade',
				placaOcupante: 'DEF-1111',
				modeloOcupante: 'NOVO UNO',
			},
			{
				idVaga: 4,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A4',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 5,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A5',
				vazia: false,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 6,
				idEstacionamento: 1,
				idOcupante: 3,
				numeroVaga: 'A6',
				vazia: false,
				nomeOcupante: 'Boni',
				placaOcupante: 'JKL-1582',
				modeloOcupante: 'Carro do debiloide',
			},
			{
				idVaga: 1,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A1',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 2,
				idEstacionamento: 1,
				idOcupante: 1,
				numeroVaga: 'A2',
				vazia: false,
				nomeOcupante: 'Lucas Damasceno',
				placaOcupante: 'ABC-0000',
				modeloOcupante: 'BMW',
			},
			{
				idVaga: 3,
				idEstacionamento: 1,
				idOcupante: 2,
				numeroVaga: 'A3',
				vazia: false,
				nomeOcupante: 'Joyce Andrade',
				placaOcupante: 'DEF-1111',
				modeloOcupante: 'NOVO UNO',
			},
			{
				idVaga: 4,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A4',
				vazia: true,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 5,
				idEstacionamento: 1,
				idOcupante: '',
				numeroVaga: 'A5',
				vazia: false,
				nomeOcupante: '',
				placaOcupante: '',
				modeloOcupante: '',
			},
			{
				idVaga: 6,
				idEstacionamento: 1,
				idOcupante: 3,
				numeroVaga: 'A6',
				vazia: false,
				nomeOcupante: 'Boni',
				placaOcupante: 'JKL-1582',
				modeloOcupante: 'Carro do debiloide',
			},
		];

		setVagas(Vagas);

		setPausa(true);
	}

	function numeroVagasOcupadas() {
		let vagaocupadas = 0;
		let nomevagasocupadas = [];
		for (let i = 0; i < vagas.length; i++) {
			if (vagas[i].vazia === false) {
				vagaocupadas += 1;
			} else {
				nomevagasocupadas.push(vagas[i].nomeOcupante);
			}
		}
		setVagasOcupadas(vagaocupadas);
	}

	if (pausa) {
		numeroVagasOcupadas();
		setPausa(false);
	}

	return (
		<>
			<Container fixed>
				<Box mt={2}>
					<p>
						{' '}
						{vagasOcupadas} / {vagas.length} Vagas Ocupadas{' '}
					</p>
				</Box>

				<Grid container spacing={3}>
					{vagas &&
						vagas.map((dados) => (
							<Vaga
								key={dados.idVaga}
								vazia={dados.vazia}
								numeroVaga={dados.numeroVaga}
								placaOcupante={dados.placaOcupante}
							/>
						))}
				</Grid>
			</Container>
			<Rodape />
		</>
	);
}
