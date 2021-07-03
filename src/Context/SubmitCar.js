import React, { createContext, useState } from 'react'
const Context = createContext();

function SubmitCar( { children } ){

  const [ Modelo, setModelo ] = useState('')
  const [ Cor, setCor ] = useState('')
  const [ Placa, setPlaca ] = useState('')

  function getCar(modelo, cor, placa){
      setModelo(modelo)
      setCor(cor)
      setPlaca(placa)    
  }


  
  return(
    <Context.Provider value={{getCar, Modelo, Cor, Placa}}>
      { children }
    </Context.Provider>
  )


}


export { Context, SubmitCar }
