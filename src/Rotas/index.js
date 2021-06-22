import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';
import Login from '../paginas/Login';
import CadastroEstacionamento from '../componentes/FormulariosCadastro/Estacionamento/index';
import VagasEstacionamento from '../paginas/VagasEstacionamento/'
import Cadastro from '../paginas/Cadastro'

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
                    <Route exact path='/Cadastro' component={Cadastro}/>
                    <Route exact path='/CadastroEstacionamento' component={ CadastroEstacionamento } />
                    <Route exact path='/Vagas' component={ VagasEstacionamento } />
                </Switch>
            <Rodape />
        </BrowserRouter>
    
    </>
);

export default Rotas;