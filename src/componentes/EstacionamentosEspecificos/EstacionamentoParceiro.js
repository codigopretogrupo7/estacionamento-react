import {
	Box,
	Grid,
	Card,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function EstacionamentoParceiro(props) {
	const diaSemana = [
		{ id: 1, nome: 'Domingo' },
		{ id: 2, nome: 'Segunda-feira' },
		{ id: 3, nome: 'Terça-feira' },
		{ id: 4, nome: 'Quarta-feira' },
		{ id: 5, nome: 'Quinta-feira' },
		{ id: 6, nome: 'Sexta-feira' },
		{ id: 7, nome: 'Sabado' },
	];

	return (
		<>
			<Card style={{ width: '800px'}}>
				<Box
					display='flex'
					justifycontent='center'
					alignItems='center'
					flexDirection='column'
				>
					<div>
						<Box mt={5} style={{ textAlign: 'center' }}>
							<p>
								<LocationOnIcon color='primary' /> Endereço: {props.endereco},{' '}
								{props.numero} {props.cidade}-{props.estado} | CEP: {props.cep}
							</p>
						</Box>
						<Grid item xs={6}>
							<Box mt={5}>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29259.75911221713!2d-46.45479875216064!3d-23.55156160997244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66f7ff08b47d%3A0xc9338bd114602a0f!2sParque%20do%20Carmo%20%E2%80%93%20Olavo%20Egydio%20Set%C3%BAbal!5e0!3m2!1sen!2sbr!4v1624408931175!5m2!1sen!2sbr'
									width='600'
									height='450'
									title='Mapa'
								></iframe>
							</Box>
						</Grid>
						<Box mt={5} ml={6} style={{ textAlign: 'justify' }}>


							<p>Horário de funcionamento</p>
							<Box mr={5}>
								<TableContainer
									component={Paper}
									style={{ marginBottom: '30px' }}
								>
									<Table aria-label='simple table'>
										<TableHead>
											<TableRow>
												<TableCell>Dia</TableCell>
												<TableCell align='right'>Horario</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{diaSemana.map((dia) => (
												<TableRow key={dia.id}>
													<TableCell component='th'>{dia.nome}</TableCell>
													<TableCell align='right'>
														{props.horarioDeAbertura} |{' '}
														{props.horarioFechamento}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</Box>
						</Box>
					</div>
				</Box>
			</Card>
		</>
	);
}
