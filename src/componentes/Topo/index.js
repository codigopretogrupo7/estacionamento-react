import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import Navbar from '../Topo2/Navbar';

import './estilo.css';




const Topo = () => {
  const { authenticated, handleLogout } = useContext(Context);

  
  
  
  return (
    <header className="topo">
      <div className="topo-conteudo">
        <Link className="topo-logo-box" to="/">
          <img className="topo-logo" src="assets/park.png" alt="logo estacionamento" title="logo estacionamento"/>
          <p className="topo-nome-empresa">Tem <span>Vaga</span></p>
        </Link>        
        <nav className="topo-links">
          <button className="btn-mobile">Menu</button>
          <div className="menu">
            <Link className="topo-link" to="/">Home</Link>
            <Link className="topo-link" to="/Estacionamentos-Parceiros">Estacionamentos Parceiros</Link>
            <Link className="topo-link" to="/contato">Contato</Link>
            {authenticated ? 
              <span className="topo-link" onClick={handleLogout}>Sair</span>
              : 
              <Link className="topo-link" to="/login">Login</Link>
            }
          </div>
        </nav>

      </div>
      <Navbar/>
    </header>
   
  );
}

export default Topo;

