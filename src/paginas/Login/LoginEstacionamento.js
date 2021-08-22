import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';
import Rodape from '../../componentes/Rodape';

import './estilo.css';

export default function LoginEstacionamento(){
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { authenticated, handleLogin } = useContext(Context);

	if (authenticated) {
		return <Redirect to='/' />;
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
								type='password'
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
						<div className='footerLogin'>
							Não tem uma conta? <Link to='/Cadastro'>Registre-se</Link>
						</div>
					</div>
				</div>
			</div>
			<Rodape />
		</>
	);
}