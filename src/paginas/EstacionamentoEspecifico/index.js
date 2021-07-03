import { Button, Box, Grid, Card, Container } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rodape from '../../componentes/Rodape';

export default function EstacionamentoEspecifico() {
	return (
		<>
			<Container>
				<Card style={{ width: '800px', marginTop: '20px' }}>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						flexDirection='column'
					>
						<Box mt={5} style={{ textAlign: 'justify' }}>
							<p>
								<LocationOnIcon color='primary' /> Endereço: Av Afonso de
								Sampaio e Sousa, 951 São Paulo-SP
							</p>
						</Box>
						<Grid XS={6}>
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
							<p>Estacionamento dos sonhos</p>

							<p>Numero de vagas livres: 630/1300</p>

							<hr />
							<p>
								Serviços do local: <CheckBoxIcon style={{ color: 'green' }} />{' '}
								Lava-Rapido <CheckBoxIcon style={{ color: 'green' }} />{' '}
								Estacionamento coberto{' '}
							</p>
							<Box mb={5}>
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
							</Box>
						</Box>
					</Box>
				</Card>
			</Container>
			<Rodape />
		</>
	);
}
