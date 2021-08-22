import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../Context/AuthContext';
import api from '../../api';
import VeiculosCadastradosComponent from '../../componentes/VeiculosCadastradosComponent';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

export default function VeiculosCadastrados() {
	const [veiculos, setVeiculos] = useState([]);
	const { id } = useContext(Context);
	const url = `api/veiculos/list/iduser?id=${id}`;

	useEffect(() => {
		async function pegaVeiculos() {
			try {
				let { data } = await api.get(url);
				setVeiculos(data);
			} catch (e) {
				console.log(e);
			}
		}
		pegaVeiculos();
	}, [url]);

	const useStyles = makeStyles({
		table: {
			minWidth: 650,
		},
	});

	const classes = useStyles();

	return (
		<>
			<Container style={{ marginTop: '20px' }}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell align='center'>Modelo</TableCell>
								<TableCell align='center'>Cor</TableCell>
								<TableCell align='center'>Placa</TableCell>
								<TableCell align='center'>- veiculo</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{veiculos &&
								veiculos.map((veiculo) => (
									<VeiculosCadastradosComponent
										key={veiculo.id}
										id={veiculo.id}
										modelo={veiculo.modelo}
										cor={veiculo.cor}
										placa={veiculo.placa}
									/>
								))}
						</TableBody>
					</Table>
				</TableContainer>
				<Link to='/cadastroveiculo'>
					<Button
						variant='contained'
						color='primary'
						style={{ marginTop: '20px' }}
					>
						Adicionar veiculo
					</Button>
				</Link>
			</Container>
		</>
	);
}
