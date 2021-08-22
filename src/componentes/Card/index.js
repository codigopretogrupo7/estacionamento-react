import React from 'react';
import './estilo.css';



  const Card = (props) => {

  const diaria = props.diaria

  return (
    <div className='card' >
        <img className="img-estacionamentocard"  src={props.imagem} alt={props.estacionamento}/>
          <div className='container'>
            <div className='titulo'>
              <h4>{props.titulo}</h4>
            </div>
            <div className='endereco'>
              <p className='rua'>{props.rua}</p>
              <span>{props.bairro} - {props.cidade}</span>
            </div>
            <div className='valor'>
              <span>Diaria {diaria.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div className='descricao'>
              <b>{props.descricao}</b>             
            </div>
          </div>      
    </div>
  );
}

export default Card;