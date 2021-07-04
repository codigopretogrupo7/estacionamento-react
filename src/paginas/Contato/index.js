import React from 'react';

import Mapa from '../../componentes/Mapa';
import Rodape from '../../componentes/Rodape';

import './estilo.css';

const Contato = () => {
  return (

    <>
      <section>

        <div className="contato-container">
          <div className="contato-mapa">
            <h2 className="titulo-sessao">Horários de <b>atendimento</b></h2>

            <p>Encontre o estacionamento mais perto de você: (99) 99999 - 9999</p>

            <ul className="lista-estacionamentos">
              <li>
                <img className="img-estacionamentos" src="assets/estacionamentos/estacionamento1.jpg" alt="Estacionamento Centro" title="Estacionamento Centro"/>
                <p>Estacionamento Centro</p>
                <p>Domingo a Sábado das 06:00 às 18:00</p>
              </li>

              <li>
                <img className="img-estacionamentos" src="assets/estacionamentos/estacionamento2.jpg" alt="Estacionamento Porto" title="Estacionamento Porto"/>
                <p>Estacionamento Porto</p>
                <p>Domingo a Sábado das 06:00 às 18:00</p>
              </li>

              <li>
                <img className="img-estacionamentos" src="assets/estacionamentos/estacionamento3.jpg" alt="Estacionamento Aeroporto" title="Estacionamento Aeroporto"/>
                <p>Estacionamento Aeroporto</p>
                <p>Domingo a Sábado das 06:00 às 22:00</p>
              </li>
            </ul>

          </div>
          
          <div className="contato-mapa">
            <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>

            <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904
            </p>

            <Mapa />
          </div>

        </div>

    </section>
    <Rodape />
  </>
  );
}

export default Contato;