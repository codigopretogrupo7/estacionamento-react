import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'


  const ParkingCard = ({parking}) => {
  
  const diaria = parking.vlDiaria
    return (
    <div className='card' >
      <Link style={{textDecoration:"none", color:"black"}} to={{pathname:`/Estacionamento${parking.id}`}} >

        <img className="img-estacionamentocard"  src={parking.foto} alt={parking.nomeEstacionamento} />
          <div className='container'>
            <div className='titulo'>
              <h4>{parking.nomeEstacionamento}</h4>
            </div>
            <div className='endereco'>
              <p className='rua'>{parking.logradouro}</p>
              <span>{parking.bairro} - {parking.cidade}</span>
            </div>
            <div className='valor'>
              <span>Diaria {diaria.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div className='descricao'>
              <b>{parking.descricao}</b>             
            </div>
          </div>      
      </Link>
    </div>
  );
}

export default ParkingCard;