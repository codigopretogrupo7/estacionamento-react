import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import Carrossel from '../../componentes/Carrossel';

import './estilo.css';

const Home = (  ) => {
  const { redirect, alterRedirect } = useContext(Context)
  
  useEffect(()=>{
    if(redirect){
      alterRedirect(false)
    }
  },[redirect,alterRedirect])
  
  return (
    <section>

      <div className="home-apresentacao">
        <div className="limitar-container">
          <Carrossel/>
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
    </section>
  );
}

export default Home;