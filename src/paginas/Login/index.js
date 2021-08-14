import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';
import Rodape from '../../componentes/Rodape';

import './estilo.css';


const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const { redirect, handleLogin, mode } = useContext(Context);

	if (redirect && mode === 'client') {
		return <Redirect to='/' />;
	} else if (redirect && mode === 'Estacionamento') {
		return <Redirect to='/Vagas' />;
	}

	return (
		<>
			<div>
				<div className='Login'>
					<div className='Login-right'>
						<h1> Acessar </h1>

						<div className='Login-loginInputEmail'>
							
							<input
								type='email'
								placeholder='Digite um email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							
						</div>

						<div className='Login-loginInputPassword'>
							
							<input
								placeholder='Digite sua senha'
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							
						</div>

						<button
							type='submit'
							id='entrar'
							onClick={() => {
								handleLogin(email, password);
							}}
						>
							Entrar
						</button>
						<p className='Login-separador'>OU</p>
						<button type='submit' id='Facebook'>
						<i class="fab fa-facebook"></i>
							Entrar com Facebook
						</button>
						<button type='submit' id='Google'>
						<i class="fab fa-google"></i>
							Entrar com Google
						</button>
						<div className="footerLogin">Não tem uma conta? <Link to='/Cadastro'>Registre-se</Link></div>
						
					</div>
				</div>
			</div>
			<Rodape />
		</>
	);
};

export default Login;
