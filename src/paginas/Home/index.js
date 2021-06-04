import React from 'react';
import { Link } from 'react-router-dom';

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

import './estilo.css';

const Home = (  ) => {
  return (
    <section>
      <Topo />

      <div className="home-apresentacao">
        <div className="limitar-container">
          <h1>Os melhores <span>estacionamentos do pais</span>!</h1>

          <p>
            Reserve online e estacione com desconto.
          </p>

          <ul className="lista-servicos">
            <li>
              <img src="assets/park.png" alt="logo" title="logo"/>
              <p>Lorem ipsum</p>
            </li>

            <li>
              <img src="assets/park.png" alt="logo" title="logo"/>
              <p>Lorem ipsum</p>
            </li>

            <li>
              <img src="assets/park.png" alt="logo" title="logo"/>
              <p>Lorem ipsum</p>
            </li>

            <li>
              <img src="assets/park.png" alt="logo" title="logo"/>
              <p>Lorem ipsum</p>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="titulo-sessao">Por que contratar nossos <b>estacionamentos</b>?</h2>

      <img className="img-estacionamento" src="assets/estacionamento.jpg" alt="Imagem do uso de um estacionamento" title="Imagem do uso de um estacionamento"/>

      <ul className="lista-sobre-estacionamento limitar-container">
        <li>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet. Ut odio totam hic doloribus totam eos nobis eveniet id eaque voluptas. Et consectetur itaque est commodi provident eum quia temporibus aut aliquam optio.</p>
        </li>
        <li>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet. Ut odio totam hic doloribus totam eos nobis eveniet id eaque voluptas. Et consectetur itaque est commodi provident eum quia temporibus aut aliquam optio.</p>
        </li>
        <li>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet. Ut odio totam hic doloribus totam eos nobis eveniet id eaque voluptas. Et consectetur itaque est commodi provident eum quia temporibus aut aliquam optio.</p>
        </li>
      </ul>      
      
      <div className="home-depoimentos">
        <h2 className="titulo-sessao">Veja o que nossos <b>clientes</b> estão falando...</h2>

        <ul className="lista-depoimentos">
          <li>
            <img className="img-estacionamento" src="assets/cliente01.png" alt="Cliente Alberto" title="Cliente Alberto"/>
            <p>Alberto</p>
            <p>A tranquilidade de encontrar um estacionamento de confiança sempre que preciso.</p>
          </li>

          <li>
            <img className="img-estacionamento" src="assets/cliente02.png" alt="Cliente Eliana" title="Cliente Eliana"/>
            <p>Eliana</p>
            <p>Sempre me preocupava em ter que estacionar meu carro na rua, mas agora consigo deixa-lo em estacionamentos próximos e não me preocupar.</p>
          </li>

          <li>
            <img className="img-estacionamento" src="assets/cliente03.png" alt="Cliente Carla" title="Cliente Carla"/>
            <p>Carla</p>
            <p>Começei a usar ano passado e estou adorando.</p>
          </li>
        </ul>
      </div>

      <div>
        <Link to="/contato" className="btn-contato">Entrar em contato</Link>

      </div>
      <Rodape />
    </section>
  );
}

export default Home;