import React from 'react';
import './estilo.css';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core'

const Rodape = () => {
  return (
    <Box id="footer" mt={5}>
      <footer className="rodape">
        <div className="limitar-container">
        <p className ="limitador"> 
          © Copyright 2021   |   Tem Vaga!
        </p>
        <Link to='/CadastroEstacionamento' style={{color:"white", textDecoration:"none"}}>Trabalhe conosco | Cadastre seu estacionamento</Link>
        </div>
      </footer>
    </Box>
  );
}

export default Rodape;