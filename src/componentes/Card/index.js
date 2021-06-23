import React from 'react';
import './estilo.css';



  const Card = (props) => {
  return (
    <div className='card' >
        <img className="img-estacionamento" src={props.imagem} alt={props.estacionamento}/>
          <div className='container'>
            <h4>{props.titulo}</h4>
            <b>{props.descricao}</b>
          </div>      
    </div>
  );
}

export default Card;