import React, { useContext, useState } from 'react';

import { Contexts } from '../../Context/AuthEstacionamentoContext';
import Rodape from '../../componentes/Rodape';

import './estilo.css';
import { Redirect } from 'react-router-dom';

export default function LoginEstacionamento() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { redirect, LoginDeEstacionamento } = useContext(Contexts);

	if (redirect) {
		return <Redirect to='/Vagas' />;
	} else {
		return (
			<>
				<div>
					<div className='loginEstacionamento'>
						<div className='Login-right'>
							<h1> Acessar </h1>

							<div className='Login-loginInputEmail'>
								<input
									type='email'
									placeholder='Digite seu email'
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
									LoginDeEstacionamento(email, password);
								}}
							>
								Entrar
							</button>
						</div>
					</div>
				</div>
				<Rodape />
			</>
		);
	}
}
