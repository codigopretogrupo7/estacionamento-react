import React from 'react';
import './estilo.css';
import { Link } from 'react-router-dom';


const Rodape = () => {
  return (
    <footer className="rodape">
      <Link to='/CadastroEstacionamento'>Trabalhe conosco</Link>
      <div className="limitar-container">
        © Copyright 2021   |   Estacionamentos Lorem
      </div>
    </footer>
  );
}

export default Rodape;