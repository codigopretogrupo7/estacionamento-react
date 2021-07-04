import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import './estilo.css';

const Topo = () => {
  const { authenticated, handleLogout } = useContext(Context);
  
  return (
    <header className="topo">
      <div className="topo-conteudo">
        <Link className="topo-logo-box" to="/">
          <img className="topo-logo" src="assets/park.png" alt="logo estacionamento" title="logo estacionamento"/>
          <p className="topo-nome-empresa">Tem Vaga</p>
        </Link>        
        <nav className="topo-links">
          <Link className="topo-link" to="/">Home</Link>
          <Link className="topo-link" to="/Estacionamentos-Parceiros">Estacionamentos Parceiros</Link>
          <Link className="topo-link" to="/contato">Contato</Link>
          {authenticated ? 
            <span className="topo-link" onClick={handleLogout}>Sair</span>
            : 
            <Link className="topo-link" to="/login">Login</Link>
          }
        </nav>
      </div>
    </header>
  );
}

export default Topo;