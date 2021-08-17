import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';



import Home from '../paginas/Home';
import Contato from '../paginas/Contato';
import Login from '../paginas/Login';
import CadastroEstacionamento from '../componentes/FormulariosCadastro/Estacionamento/index';
import CadastroVeiculo from '../componentes/FormulariosCadastro/Veiculo/index';
import VagasEstacionamento from '../paginas/VagasEstacionamento/';
import Cadastro from '../paginas/Cadastro';
import PagesParkingSearch from '../paginas/Search/Search';
// import Estacionamentos from '../paginas/Estacionamentos';
import EstacionamentoEspecifico from '../paginas/EstacionamentoEspecifico';
import Checkin from '../paginas/Checkin';

// import Checkout from '../paginas/Checkout'

import Navbar from '../componentes/Navbar/Navbar';


import { Context } from '../Context/AuthContext'


const Rotas = () => (
    
    <>
    
        <BrowserRouter>
            <Navbar/>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/Estacionamentos-Parceiros' component={ PagesParkingSearch } />
                    <Route exact path='/contato' component={ Contato } />
                    <Route exact path='/Login' component={ Login } />
                    {/* <CustomRoute exact path='/Search' component={ PagesParkingSearch } /> */}
                    <Route exact path='/Cadastro' component={Cadastro}/>
                    <Route exact path='/CadastroEstacionamento' component={ CadastroEstacionamento } />
                    <Route exact path='/Vagas' component={ VagasEstacionamento } />
                    <Route exact path='/Estacionamento:id' component={ EstacionamentoEspecifico } />
                    <Route exact path='/Checkin' component={ Checkin } />
                    <Route exact path='/CadastroVeiculo' component={ CadastroVeiculo } />
                    {/* <Route exact path='/Checkout' component={ Checkout } /> */}

                    
                  

                </Switch>
        </BrowserRouter>
    
    </>
);

export default Rotas;