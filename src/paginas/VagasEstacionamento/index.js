import React,{ useState, useEffect } from 'react';

import Vaga from '../../componentes/Vaga'

import { Container, Grid } from '@material-ui/core'


export default function VagasEstacionamento(){

  const [ vagas, setVagas ] = useState([])
  const [ pausa, setPausa ] = useState(false)
  const [ vagasOcupadas, setVagasOcupadas ] = useState(0)
  
  useEffect(()=>{
    carregaVagas()
    
  },[])
  
  async function carregaVagas(){
    const resposta = await fetch('http://localhost/vagas.php')
    const dados = await resposta.json()
    await setVagas(dados.Vagas)  
    
    setPausa(true)
  }
  
  function numeroVagasOcupadas(){
    let vagaocupadas = 0
    let nomevagasocupadas = []
    for( let i = 0 ; i < vagas.length ; i++ ){
      if(vagas[i].vazia === true){
        vagaocupadas+=1
      }else{
        nomevagasocupadas.push(vagas[i].nomeOcupante)
      }
    }
    setVagasOcupadas(vagaocupadas)
  }
  
  if(pausa){
    numeroVagasOcupadas()
    setPausa(false)
  }
  
  return(
    <Container fixed>
      <p> {vagasOcupadas} / {vagas.length} Vagas Ocupadas </p>


      <Grid container spacing={3}>

        {
          vagas && vagas.map((dados)=>(
  
            <Vaga 
              key={dados.idVaga} 
              vazia={dados.vazia}
              numeroVaga = {dados.numeroVaga}
              placaOcupante = {dados.placaOcupante}
            />
  
          ))
        }

      </Grid>
    </Container>
  )
}