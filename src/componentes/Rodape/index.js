import React from 'react';
import './estilo.css';
import { Link } from 'react-router-dom';


const Rodape = () => {
  return (
    
      <footer className="rodape">
        <div className="limitar-container">
        <p className ="limitador"> 
          © Copyright 2021   |   Tem Vaga!
        </p>
        <Link to='/CadastroEstacionamento' style={{color:"white", textDecoration:"none"}}>Trabalhe conosco | Cadastre seu estacionamento</Link>
        </div>
      </footer>
    
  );
}

export default Rodape;