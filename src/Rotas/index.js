import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';
import Login from '../paginas/Login';
import CadastroEstacionamento from '../componentes/FormulariosCadastro/Estacionamento/index';
import CadastroVeiculo from '../componentes/FormulariosCadastro/Veiculo/index';
import VagasEstacionamento from '../paginas/VagasEstacionamento/';
import Cadastro from '../paginas/Cadastro';
import PagesParkingSearch from '../paginas/Search/Search';
import EstacionamentoEspecifico from '../paginas/EstacionamentoEspecifico';
import Checkin from '../paginas/Checkin';
import Checkout from '../paginas/Checkout'
import Navbar from '../componentes/Navbar/Navbar';
import VeiculosCadastrados from '../paginas/VeiculosCadastrados';

const Rotas = () => (
	<>
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/Estacionamentos-Parceiros'
					component={PagesParkingSearch}
				/>
				<Route exact path='/contato' component={Contato} />
				<Route exact path='/Login' component={Login} />
				<Route exact path='/Cadastro' component={Cadastro} />
				<Route
					exact
					path='/CadastroEstacionamento'
					component={CadastroEstacionamento}
				/>
				<Route exact path='/Vagas' component={VagasEstacionamento} />
				<Route
					exact
					path='/Estacionamento:id'
					component={EstacionamentoEspecifico}
				/>
				<Route exact path='/Checkin:id' component={Checkin} />
				<Route exact path='/CadastroVeiculo' component={CadastroVeiculo} />
				<Route exact path='/Checkout:id' component={ Checkout } />
				<Route exact path='/veiculoscadastrados' component={VeiculosCadastrados} />
			</Switch>
		</BrowserRouter>
	</>
);

export default Rotas;
