import React from 'react';
import './estilo.css';
import { Link } from 'react-router-dom';


const Rodape = () => {
  return (
    
      <footer className="rodape">
        <div className="limitar-container">
        
        <Link to='/CadastroEstacionamento' style={{color:"white", textDecoration:"none"}}>Trabalhe conosco | Cadastre seu estacionamento</Link>
        <p className ="limitador"> 
          © Copyright 2021 - Tem Vaga!
        </p>
        </div>
      </footer>
    
  );
}

export default Rodape;