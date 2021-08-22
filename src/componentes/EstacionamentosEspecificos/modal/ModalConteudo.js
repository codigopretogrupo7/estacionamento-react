import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../../Context/AuthContext';
import api from '../../../api';
import Button from '@material-ui/core/Button';

export default function ModalConteudo(props) {
	const [veiculos, setVeiculos] = useState([]);
	const [ids, setIds] = useState('');
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

	async function reservaVaga(event) {
		event.preventDefault();
    try{
      if(ids > 0){
        const resp = await api.post(`/api/vagas/reservavaga?id=${props.vaga}`,{"id":ids})
        console.log(resp.status)
        alert(`A vaga ${resp.data.numeroVaga} esta reservada em seu nome`);
      }

    }catch(e){
        alert('Sinto muito todas as vagas estão Ocupadas')
    }


	}

	const Forms = (props) => {
		return (
			<>
				<input
					type='radio'
					id={props.id}
					name='veiculos'
					onChange={() => {
						setIds(props.id);
					}}
				/>
				<label htmlFor={props.id} style={{marginTop:"15px"}}>
					Modelo: {props.modelo} | Placa: {props.placa}
				</label>
        <br/>
				
			</>
		);
	};

	return (
		<form
			onSubmit={reservaVaga}
			style={{ width: '35vw', height: '35vh', backgroundColor: 'white', textAlign:"center", borderRadius:"10px"}}
		>
      <h6 style={{marginTop:"20px"}}>Qual veiculo vai ocupar essa vaga ?</h6>
			{veiculos &&
				veiculos.map((veiculo) => (
					<Forms
						key={veiculo.id}
						id={veiculo.id}
						modelo={veiculo.modelo}
						placa={veiculo.placa}
					/>
				))}
			<Button variant='contained' color='primary' type="submit" style={{marginTop:"20px"}}>
				Reservar Vaga
			</Button>
		</form>
	);
}
