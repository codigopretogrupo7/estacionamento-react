import React from 'react';
import './estilo.css';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core'

const Rodape = () => {
  return (
<<<<<<< HEAD
    <Box mt={3}>
=======
    <Box id="footer" mt={5}>
>>>>>>> ab81903129f89f615cfc9ea7e1939e973202b485
      <footer className="rodape">
        <div className="limitar-container">
        <p className ="limitador"> 
          © Copyright 2021   |   Estacionamentos Lorem
        </p>
        <Link to='/CadastroEstacionamento' style={{color:"white", textDecoration:"none"}}>Trabalhe conosco | Cadastre seu estacionamento</Link>
        </div>
      </footer>
    </Box>
  );
}

export default Rodape;