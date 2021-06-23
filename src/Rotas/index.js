import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';
import Login from '../paginas/Login';
import CadastroEstacionamento from '../componentes/FormulariosCadastro/Estacionamento/index';
import VagasEstacionamento from '../paginas/VagasEstacionamento/'
import Cadastro from '../paginas/Cadastro'
import Estacionamentos from '../paginas/Estacionamentos'
import EstacionamentoEspecifico from '../paginas/EstacionamentoEspecifico'
import Checkin from '../paginas/Checkin'
// import Checkout from '../paginas/Checkout'

import Topo from '../componentes/Topo';
import Rodape from '../componentes/Rodape';

const Rotas = () => (
    <>
    
        <BrowserRouter>
            <Topo />
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/Estacionamentos' component={ Estacionamentos } />
                    <Route exact path='/contato' component={ Contato } />
                    <Route exact path='/Login' component={ Login } />
                    <Route exact path='/Cadastro' component={Cadastro}/>
                    <Route exact path='/CadastroEstacionamento' component={ CadastroEstacionamento } />
                    <Route exact path='/Vagas' component={ VagasEstacionamento } />
                    <Route exact path='/EstacionamentoEspecifico' component={ EstacionamentoEspecifico } />
                    <Route exact path='/Checkin' component={ Checkin } />
                    {/* <Route exact path='/Checkout' component={ Checkout } /> */}

                </Switch>
            <Rodape />
        </BrowserRouter>
    
    </>
);

export default Rotas;