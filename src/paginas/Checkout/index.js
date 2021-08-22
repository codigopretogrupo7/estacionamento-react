import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import api from '../../api';
import Button from '@material-ui/core/Button';

export default function Checkout(props) {
	const [valorHora, setValorHora] = useState(0);
	const [valorAdicional, setValorAdicional] = useState(0);
	const [horaDeEntrada, setHoraDeEntrada] = useState([]);
	const [diaDeEntrada, setDiaDeEntrada] = useState([]);
	const [total, setTotal] = useState(0);
	const [ok, setok] = useState(false);
	const [redirect, setRedirect] = useState(false)
	const data = new Date();
	const url = `/api/vagas/listid?id=${props.match.params.id}`;

	useEffect(() => {
		async function pegaVagaOcupada() {
			try {
				const vaga = await api.get(url);

				setHoraDeEntrada(vaga.data.hora_entrada.split(':'));
				setDiaDeEntrada(vaga.data.dia_entrada);
			} catch (e) {
				console.log(e);
			}
		}

		async function pegaEstacionamento() {
			try {
				const estacionamento = await api.get(
					`/api/estacionamentos/list/id?id=1`
				);
				setValorHora(estacionamento.data.vlHora);
				setValorAdicional(estacionamento.data.vlAdicional);
			} catch (e) {
				console.log(e);
			}
		}

		const tempo = () => {
			setTimeout(() => {
				setok(true);
			}, 1500);
		};
		pegaVagaOcupada();
		pegaEstacionamento();
		tempo();
	}, [url]);

	function pegaDias() {
		const diaAtual = data.getDay();
		let diasCorridos = 0;
		if (diaAtual > diaDeEntrada) {
			diasCorridos = diaAtual - diaDeEntrada;
		}
		return diasCorridos;

  }

	function contaHoras() {
		const horaAtual = data.getHours();
		const diasCorridos = pegaDias();

		let horasCorridas = 0;

		if (diasCorridos === 0) {
			horasCorridas = horaAtual - horaDeEntrada[0];
		} else if (diasCorridos > 0) {
			let horasDoDiaAnterior = diasCorridos * 24 - horaDeEntrada[0];
			horasCorridas = horasDoDiaAnterior + horaAtual;
		}

		return horasCorridas;
	}

	function TotalAPagar() {
		const horasOcupando = contaHoras();
		let valorAPagar = 0;

		for (let i = 0; i <= horasOcupando; i++) {
			if (i === 0) {
				valorAPagar += valorHora;
			} else if (i > 0) {
				valorAPagar += valorAdicional;
			}
		}

		setTotal(valorAPagar);
		setok(false);
	}

  async function funcaoCheckout(){
    try {
      await api.post(
        `/api/vagas/checkout?id=${props.match.params.id}`
      );
			setRedirect(true)
      
    } catch (e) {
      console.log(e);
    }
  }


	if (ok) {
		TotalAPagar();
	}
	if(redirect){
		return <Redirect to="/Vagas"/>
	}else{

	return (
		<>
			<p style={{ marginTop: '25px' }}>O Cliente deve</p>
			<p>
				{total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
			</p>
			<Button variant='contained' color='primary' style={{ marginTop: '20px' }} onClick={funcaoCheckout}>
				Pago
			</Button>
		</>
	);
}
}
