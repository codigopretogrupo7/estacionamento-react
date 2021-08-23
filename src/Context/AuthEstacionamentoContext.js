import React, { createContext, useEffect, useState } from 'react';
import api from '../api';
const Contexts = createContext();

function AuthEstacionamento({ children }) {
	const [id , setId] = useState('')
  const [mode, setMode] = useState('')
  const [nomeEstacionamento, setNomeEstacionamento] = useState('')
	const [redirect, setRedirect] = useState(false)

  useEffect(() => {
		const id = localStorage.getItem('id');
	  const mode = localStorage.getItem("mode");
	  const nomeEstacionamento = localStorage.getItem("nomeEstacionamento");
	  
    if(infos){
      setMode(mode);	
      setId(id)
      setNomeEstacionamento(nomeEstacionamento)
    }
	}, [id,mode]);

	

	async function LoginDeEstacionamento(email, senha) {
		const usuario = {
			emailEstacionamento: email,
			senhaEstacionamento: senha,
		};
		try {
			const { data } = await api.post('/api/estacionamentos/login', usuario);
      setId(data.id)
      setMode(data.mode)
      setNomeEstacionamento(data.nomeEstacionamento)

		
		await localStorage.setItem('id',data.id);
		await localStorage.setItem('mode',data.mode);
		await localStorage.setItem('nomeEstacionamento',data.nomeEstacionamento);

			setRedirect(true)
		} catch (e) {
			console.log(e);
		}
	}

  async function Logout() {
		
		localStorage.removeItem('id');
		localStorage.removeItem('mode');
		localStorage.removeItem('nomeEstacionamento');
    setMode('')
    setId('')
		setRedirect(false)
	}


  return (
		<Contexts.Provider
			value={{
        LoginDeEstacionamento,
			  Logout,
				mode,
				id,
        nomeEstacionamento,
				redirect,
			}}
		>
			{children}
		</Contexts.Provider>
	);
}
export { Contexts, AuthEstacionamento };
