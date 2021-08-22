import MiniEstacionamento from '../../componentes/MiniEstacionamento'
import { Container, Box } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Rodape from '../../componentes/Rodape';

import api from '../../api'


export default function Estacionamentos(){

  const [ estacionamento, setEstacionamento ] = useState([])
  
  async function pegaEstacionamentos(){
    try{
      const {data} = await api.get('/api/estacionamentos/list')
      
      const Estacionamentos = []
      for( let i = 0 ; i < data.length ; i++ ){
        if(data[i].mode === "Estacionamento"){
          Estacionamentos.push(data[i])
        }
      }
      setEstacionamento(Estacionamentos)

		}catch(e){
			console.log(e)
		}
  }


  useEffect( () => {
    pegaEstacionamentos()
  },[])

  return(
    <>
      <Container maxWidth>
        <Box display="flex" flexWrap="wrap" justifyContent="center" >
          {estacionamento && estacionamento.map(elemento => (
            <MiniEstacionamento 
              id = {elemento.id}
              imagem = "./Estacionamento.jpg"
              nome={elemento.nomeDoEstacionamento} 
              Endereco={elemento.endereco} 
              num={elemento.numero}
              estado={elemento.estado} 
            />
          ))}
        </Box>
      </Container>
    <Rodape />

    </>
  )
}