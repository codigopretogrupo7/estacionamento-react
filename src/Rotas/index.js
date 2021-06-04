import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';
import Login from '../paginas/Login';
import CadastroEstacionamento from '../paginas/cadastros/estacionamento/index';
import CadastroUsuario from '../paginas/cadastros/usuarioComum/index';

import Topo from '../componentes/Topo';
import Rodape from '../componentes/Rodape';


const Rotas = () => (
    <>
    
        <BrowserRouter>
            <Topo />
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/contato' component={ Contato } />
                    <Route exact path='/Login' component={ Login } />
                    <Route exact path='/CadastroEstacionamento' component={ CadastroEstacionamento } />
                    <Route exact path='/CadastroUsuario' component={ CadastroUsuario } />
                </Switch>
            <Rodape />
        </BrowserRouter>
    
    </>
);

export default Rotas;