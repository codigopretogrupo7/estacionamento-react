import React,{ useState } from 'react'

export default function CadastroEstacionamento(){

  const [ estado, setEstado ]     = useState('')
  const [ cidade,setCidade ]      = useState('')
  const [ bairro, setBairro ]     = useState('')
  const [ endereco, setEndereco ] = useState('')
  const [ senha, setSenha ]       = useState('')
  const [ enviar, setEnviar ]     = useState(false)

  async function buscaCep(cep){
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(json => {
      setEstado(json.uf)
      setCidade(json.localidade)
      setBairro(json.bairro)
      setEndereco(json.logradouro)
    })
  }

  function verificaCep(event){
    const cep = event.target.value
    if(cep.length === 8 ){
      buscaCep(cep)
    }
  }


  function enviarFormulario(event){
    event.preventDefault()
    alert('Formulario Enviado, aguarde nosso email de confirmação!')
  }

  function comparaSenha(event){
    if(event.target.id === 'Senha'){
      setSenha(event.target.value)
    }else{
      if(event.target.value === senha){
        setEnviar(true)
      }else{
        setEnviar(false)
      }
    }
    
  }

  return(
    <div 
      className="container " 
      style={{textAlign: 'left'}}
    >
      <p className="mt-5 mb-4">
      Para melhor atende-lo precisamos de informações sobre seu estacionamento, preencha o formulario a seguir.
      </p>
      
      <form 
        className="row g-3" 
        onSubmit={enviarFormulario}
      >

        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="nomeEstacionamento" className="form-label">Nome do estacionamento</label>
            <input 
              type="text" 
              className="form-control" 
              id="nomeEstacionamento" 
            />
          </div>
        </div>

        <div className="row g-3 ">  
          <div className="col-4">
            <label htmlFor="cep" className="form-label">Cep</label>
            <input 
              type="number" 
              className="form-control" 
              id="cep"  
              placeholder="ex.: 00000-000" 
              onChange={verificaCep}
            />
          </div>
          <div className="col-4">
            <label htmlFor="estado" className="form-label">Estado</label>
            <input 
              type="text" 
              className="form-control" 
              id="estado" 
              placeholder="ex.: SP" 
              defaultValue={estado}
            />
          </div>
          <div className="col-4">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input 
              type="text" 
              className="form-control" 
              id="cidade" 
              placeholder="ex.: São Paulo" 
              defaultValue={cidade}
            />
          </div>
          <div className="col-5">
            <label htmlFor="bairro" className="form-label">Bairro</label>
            <input 
              type="text"
              className="form-control" 
              id="bairro" 
              placeholder="ex.: sé" 
              defaultValue={bairro}
            />
          </div>
          <div className="col-5">
            <label htmlFor="endereco" className="form-label">Endereço</label>
            <input 
              type="text" 
              className="form-control" 
              id="endereco" 
              placeholder="ex.: Praça da Sé" 
              defaultValue={endereco}
            />
          </div>
          <div className="col-1">
            <label htmlFor="numero" className="form-label">n°</label>
            <input 
              type="number" 
              className="form-control" 
              id="numero" 
              placeholder="ex.: 10"
            />
          </div>
        </div>


        <div className=" row g-3">
          <div className="col-3">
            <label htmlFor="horarioAbertura" className="form-label">Horario de Abertura</label>
            <input 
              type="time" 
              className="form-control" 
              id="horarioAbertura"
            />
          </div>
          <div className="col-3 ">
            <label htmlFor="horarioFechamento" className="form-label">Horario de Fechamento</label>
            <input 
              type="time" 
              className="form-control" 
              id="horarioFechamento"
            />
          </div>
          <div className="col-3">
            <label htmlFor="modeloVaga" className="form-label">Modelo de vaga</label>
            <select id="modeloVaga" className="form-select">
              <option >1,2,3...</option>
              <option >A1,A2,B3...</option>
            </select>
          </div>
          <div className="col-3">
            <label htmlFor="numeroDeVagas" className="form-label">Numero de vagas</label>
            <input 
              type="number" 
              className="form-control" 
              placeholder="ex.: 100" 
              id="numeroDeVagas"
            />
          </div>
        </div>


        <div className=" row g-3">
          <div className="col-4">
            <label htmlFor="ValorDaHora" className="form-label">Valor de 1 hora</label>
            <input 
              type="number" 
              className="form-control" 
              id="ValorDaHora" 
              placeholder="ex.: R$ 10,00 a hora"
            />
          </div>
          <div className="col-4">
            <label htmlFor="AteHora" className="form-label">Até</label>
            <input 
              type="number" 
              className="form-control" 
              id="AteHora" 
              placeholder="ex.: 3 horas"
            />
          </div>
          <div className="col-4">
            <label htmlFor="DemaisHoras" className="form-label">Demais horas</label>
            <input 
              type="number" 
              className="form-control" 
              id="DemaisHoras" 
              placeholder="ex.: R$ 1,00 a hora"
            />
          </div>
        </div>

        <hr className="mt-5"/>

        <div className="row g-3">
          <p>Cadastre um email para que possamos entrar em contato e uma senha para Logar na nossa plataforma</p>
          
          <div className="col-4">
            <label htmlFor="Email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="ex.: email@gmail.com" 
              id="Email"
            />
          </div>
          <div className="col-4">
            <label htmlFor="Senha" className="form-label">Senha</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="******" 
              id="Senha" 
              onChange={comparaSenha}
            />
          </div>
          <div className="col-4">
            <label htmlFor="ConfirmarSenha" className="form-label">Confirmar Senha</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="******" 
              id="ConfirmarSenha" 
              onChange={comparaSenha}
            />
          </div>
        </div>

        <div className="col-12">
          {
            enviar 
            ? 
            <button type="submit" className="btn btn-success" >Cadastrar</button>
            : 
            <button type="submit" className="btn btn-secondary" disabled>Cadastrar</button>
          }
        </div>
      </form>

    </div>
  )
}