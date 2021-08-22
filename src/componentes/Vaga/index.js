import React from 'react';

import {
	Card,
	CardActions,
	CardContent,
	Typography,
	Grid,
	Box,
} from '@material-ui/core/';
import Checkins from '@material-ui/icons/Add';

import Checkout from '@material-ui/icons/IndeterminateCheckBox';
import { Link } from 'react-router-dom';

export default function Vaga(props) {
	function cor(status) {
		switch (status) {
			case 'ocupada':
				return 'error.main';
			case 'reservada':
				return 'yellow';
			default:
				return 'limegreen';
		}
	}

	return (
		<Grid item key={props.idVaga}>
			<Box
				mt={1}
				border={2}
				mb={4}
				borderRadius='borderRadius'
				borderColor={cor(props.status)}
			>
				<Card style={{ width: '140px', height: '120px' }}>
					<CardContent>
						{props.placaOcupante ? (
							<Typography>Placa: {props.placaOcupante}</Typography>
						) : (
							<Box mt={1}>
								<Typography>Vaga {props.numeroVaga}</Typography>
							</Box>
						)}
					</CardContent>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						mt={
							props.status === 'vazia' || props.status === 'reservada' ? 0 : -2
						}
					>
						<CardActions>
							{props.status === 'vazia' || props.status === 'reservada' ? (
								<>
									<Link to={{ pathname: `/Checkin${props.idVaga}` }}>
										<Checkins
											color='primary'
											fontSize='large'
											style={{ cursor: 'pointer' }}
										/>
									</Link>
								</>
							) : (
								<>
									<Link to={{ pathname: `/Checkout${props.idVaga}` }}>
										<Checkout
											style={{ cursor: 'pointer' }}
											color='secondary'
											fontSize='large'
										/>
									</Link>
								</>
							)}
						</CardActions>
					</Box>
				</Card>
			</Box>
		</Grid>
	);
}
