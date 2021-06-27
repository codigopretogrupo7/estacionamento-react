import React, { createContext, useEffect, useState } from 'react'
import api from '../api';
const Context = createContext();

function AuthProvider({ children }){
  const [ authenticated, setAuthenticated ] = useState(false)
  const [ redirect, setRedirect ] = useState(false)
  const [ nome, setNome ] = useState('')
  const [ mode, setMode ] = useState('')

  useEffect(()=>{
    const dados = localStorage.getItem('data')
    
    if(dados){
      const json = JSON.parse(dados)
      
      api.defaults.headers.Authorization = `Bearer ${json}`
      
      console.log(json)

      setNome(json[0].name)
      setMode(json[0].mode)
      setAuthenticated(true)
    }
  },[])


  async function handleLogin(email, senha){
    const { data } = await api.get(`users?email=${email}&&senha=${senha}`)
    const dados = JSON.stringify(data)
    
    localStorage.setItem('data', dados)
    api.defaults.headers.Authorization = `Bearer ${data}`
    
    console.log(data)

    setNome(data[0].name)
    setMode(data[0].mode)
    setAuthenticated(true)
    alterRedirect(true)
  }

  async function handleLogout(){
    setAuthenticated(false)
    
    localStorage.removeItem('data')
    api.defaults.headers.Authorization = undefined
    
    alterRedirect(true)
  }


  async function alterRedirect(parametro){
    await setRedirect(parametro)
  }


  return(
    <Context.Provider value={{ 
      authenticated, 
      handleLogin, 
      handleLogout, 
      redirect, 
      alterRedirect, 
      nome,
      mode
    }}>
      { children }
    </Context.Provider>
  )

}

export { Context, AuthProvider }