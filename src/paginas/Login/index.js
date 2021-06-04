import React,{useState} from 'react';

// import Topo from '../../componentes/Topo';
// import Rodape from '../../componentes/Rodape';

import './estilo.css';

const Login = () => {
    const[email,setEmail] = useState("")
    const[password, setPassword] = useState("");
    const[show, setShow] =useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setPassword(!show);
    }

    return (
        <div>
            <div className="Login">
                <div className ="Login-right">
                    <h1> Acessar </h1>

                    <div className="Login-loginInputEmail">
                        <input
                            type="email"
                            placeholder="Digite um email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="Login-loginInputPassword">
                        <input
                            placeholder="Digite sua senha"
                            type={show ? "text" : "password"}
                            value={password}
                            onChange={e => setPassword=(e.target.value)}
                        />
                        {/* escolher biblioteca de icones antes de liberar.
                         <div className="login-eye">
                            {show ? (
                                <componete de icone senha
                                size={20}
                                onClick ={handleClick}
                                />
                            ): (
                                <componente de icone senha escondida
                                size={20}
                                onClick ={handleClick}
                                />
                            )}

                        </div>
                            */}
                    </div>
                    
                    <button type="submit" id="entrar">
                        Entrar
                    </button>
                    
                    <button type="submit" id="Facebook">
                        Entrar com Facebook
                    </button>
                    <button type="submit" id="Google">
                        Entrar com Google
                    </button>
                    <h4>Ainda não tem uma conta?</h4>
                    <button type="submit" id="cadastrar-se">
                        Cadastra-se
                    </button>



                </div>

            </div>
        </div>
    )
}

export default Login;