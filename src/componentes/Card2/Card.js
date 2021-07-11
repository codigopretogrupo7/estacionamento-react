import React from 'react';
import './Card.css';



  const ParkingCard = ({parking}) => {
  return (
    <div className='card' >
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
    </div>
  );
}

export default ParkingCard;