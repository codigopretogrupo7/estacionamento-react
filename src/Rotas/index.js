import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';
//import Login from '../paginas/Login';


const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/contato' component={ Contato } />
            {/*<Route exact path='/Login' component={ Login } />*/}
        </Switch>
    </BrowserRouter>
);

export default Rotas;