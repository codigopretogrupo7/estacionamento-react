import MiniEstacionamento from '../../componentes/MiniEstacionamento'
import { Container, Box } from '@material-ui/core'
import { useState } from 'react'




export default function Estacionamentos(){

  const [ estacionamento ] = useState([
    {
      Imagem:'./Estacionamento.jpg',
      Nome:"Estacionamento dos sonhos",
      Endereco:"Av Afonso de Sampaio e Sousa, 951",
      Estado:"São Paulo - SP"
    },
    {
      Imagem:'./Estacionamento.jpg',
      Nome:"Estacionamento dos sonhos",
      Endereco:"Av Afonso de Sampaio e Sousa, 951",
      Estado:"São Paulo - SP"
    },
    {
      Imagem:'./Estacionamento.jpg',
      Nome:"Estacionamento dos sonhos",
      Endereco:"Av Afonso de Sampaio e Sousa, 951",
      Estado:"São Paulo - SP"
    },
    {
      Imagem:'./Estacionamento.jpg',
      Nome:"Estacionamento dos sonhos",
      Endereco:"Av Afonso de Sampaio e Sousa, 951",
      Estado:"São Paulo - SP"
    },
    {
      Imagem:'./Estacionamento.jpg',
      Nome:"Estacionamento dos sonhos",
      Endereco:"Av Afonso de Sampaio e Sousa, 951",
      Estado:"São Paulo - SP"
    },
  ])


  return(
    <>
      <Container maxWidth>
        <Box display="flex" flexWrap="wrap" justifyContent="center" >
          {estacionamento && estacionamento.map(elemento => (
            <MiniEstacionamento imagem={elemento.Imagem} nome={elemento.Nome} Endereco={elemento.Endereco} estado={elemento.Estado} />
          ))}
        
        </Box>
      </Container>
    </>
  )
}