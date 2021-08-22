import React,{useState} from 'react';
import { Redirect } from 'react-router';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import api from '../../api'

export default function VeiculosCadastradosComponent(props) {
  const [redirect , setRedirect] = useState(false)

  async function apagaVeiculo(){
    try{
      await api.delete(`/api/veiculos/delete?id=${props.id}`)
		}catch(e){
			console.log(e)
		}
  }

  function confirmacao(){
    let pergunta = window.confirm("Voce quer apagar esse veiculo?")
    if(pergunta){
      apagaVeiculo()
      setRedirect(true)
    }
  }

  if (redirect) {
		return <Redirect to='/veiculoscadastrados' />;
	} else {
	return (
			<TableRow >
				<TableCell component='th' align="center">
					{props.modelo}
				</TableCell>
				<TableCell align="center">{props.cor}</TableCell>
				<TableCell align="center">{props.placa}</TableCell>
				<TableCell align="center" onClick={confirmacao}><Button variant='contained' color='secondary'>Remover Veiculo</Button></TableCell>
			</TableRow>
	);
}
}