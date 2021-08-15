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

function CustomRoute({ isPrivate, modes, ...rest }){
    const { mode, authenticated } = useContext(Context)

    if(isPrivate && !authenticated){
        return <Redirect to="/"/>
    }else if(isPrivate && mode !== "Estacionamento"){
        return <Redirect to="/"/>
    }
    
    else{
        return <Route {...rest}/>
    }


}

const Rotas = () => (
    
    <>
    
        <BrowserRouter>
            <Navbar/>
                <Switch>
                    <CustomRoute exact path='/' component={ Home } />
                    <CustomRoute exact path='/Estacionamentos-Parceiros' component={ PagesParkingSearch } />
                    <CustomRoute exact path='/contato' component={ Contato } />
                    <CustomRoute exact path='/Login' component={ Login } />
                    {/* <CustomRoute exact path='/Search' component={ PagesParkingSearch } /> */}
                    <CustomRoute exact path='/Cadastro' component={Cadastro}/>
                    <CustomRoute exact path='/CadastroEstacionamento' component={ CadastroEstacionamento } />
                    <CustomRoute isPrivate exact path='/Vagas' component={ VagasEstacionamento } />
                    <CustomRoute exact path='/Estacionamento:id' component={ EstacionamentoEspecifico } />
                    <CustomRoute exact path='/Checkin' component={ Checkin } />
                    <CustomRoute exact path='/CadastroVeiculo' component={ CadastroVeiculo } />
                    {/* <Route exact path='/Checkout' component={ Checkout } /> */}

                    
                  

                </Switch>
        </BrowserRouter>
    
    </>
);

export default Rotas;