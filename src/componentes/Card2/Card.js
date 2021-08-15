import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'


  const ParkingCard = ({parking}) => {
  return (
    <div className='card' >
      <Link style={{textDecoration:"none", color:"black"}} to={{pathname:`/Estacionamento${parking.id}`}} >

        <img className="img-estacionamentocard"  src={parking.imageUrl} alt={parking.Nome_Estacionamento} />
          <div className='container'>
            <div className='titulo'>
              <h4>{parking.Nome_Estacionamento}</h4>
            </div>
            <div className='endereco'>
              <p className='rua'>{parking.Rua}</p>
              <span>{parking.Bairro} - {parking.Cidade}</span>
            </div>
            <div className='valor'>
              <span>Diaria R${parking.Valor_hora}</span>
            </div>
            <div className='descricao'>
              <b>{parking.Descricao}</b>             
            </div>
          </div>      
      </Link>
    </div>
  );
}

export default ParkingCard;