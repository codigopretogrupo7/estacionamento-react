import React, { createContext, useEffect, useState } from 'react';
import api from '../api';
const Context = createContext();

function AuthProvider({ children }) {
	const [authenticated, setAuthenticated] = useState(false);
	const [nome, setNome] = useState('');
	const [mode, setMode] = useState('');
	const [id , setId] = useState('')

	useEffect(() => {
		const info = localStorage.getItem('data');
		if(info) {
			doEffect(info)
		}
	}, []);

	async function doEffect(info){
		const result = JSON.parse(atob(info.split('.')[1]));
		const {data} = await api.get(`/api/usuarios/list/name?username=${result.sub}`)
		api.defaults.headers.Authorization = `${info}`;
		setAuthenticated(true);
		setMode(data.mode);

		setNome(data.nome);
		setId(data.id)
	}

	async function handleLogin(email, senha) {
		const usuario = {
			nome: email,
			senha: senha,
		};
		const datas = await api.post('/login', usuario);
		const token = datas.headers.token
		const result = JSON.parse(atob(token.split('.')[1]));

		pegaDadosDoUsuario(result, token)
		
	}

	async function pegaDadosDoUsuario(result, token){
		const {data} = await api.get(`/api/usuarios/list/name?username=${result.sub}`)
		const dados = JSON.stringify(data);

		if (dados.length > 0) {
			localStorage.setItem('data', token);


			api.defaults.headers.Authorization = `${token}`;

			
			setAuthenticated(true);
			setMode(data.mode);
			setNome(data.nome);
			setId(data.id);

			await localStorage.setItem('mode',data.mode)
			await localStorage.setItem('Authenticated',true)

		} else {
			return;
		}
	}

	async function handleLogout() {
		setAuthenticated(false);

		localStorage.removeItem('data');
		localStorage.removeItem('mode')
		localStorage.removeItem('Authenticated')
		delete api.defaults.headers.Authorization;
		setNome('');
		setMode('');
	}

	return (
		<Context.Provider
			value={{
				authenticated,
				handleLogin,
				handleLogout,
				nome,
				mode,
				id,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, AuthProvider };
