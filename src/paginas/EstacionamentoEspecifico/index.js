import React, { useState, useEffect } from 'react';

import Rodape from '../../componentes/Rodape';
import api from '../../api';

import EstacionamentoIdComponent from '../../componentes/EstacionamentosEspecificos/EstacionamentoIdComponent'

export default function EstacionamentoEspecifico(props) {
	const [estacionamento, setEstacionamento] = useState([]);
	const [url] = useState(`/api/estacionamentos/list/id?id=${props.match.params.id}`)

	useEffect(() => {	
		async function pegaEstacionamento() {
			const { data } = await api.get(url);
			setEstacionamento(data)
		}
		pegaEstacionamento()
	}, [url]);

	return(
		<>
			<EstacionamentoIdComponent e={estacionamento}/>
			<Rodape />
		</>
	);
}
