import React from 'react';
import { Link } from 'react-router-dom';


import './estilo.css';

const Login = () => {
    // const[email,setEmail] = useState("")
    // const[password, setPassword] = useState("");
    // const[show, setShow] =useState(false)

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     setPassword(!show);
    // }

    return (
        <div>
            <div className="Login">
                <div className ="Login-right">
                    <h1> Acessar </h1>

                    <div className="Login-loginInputEmail">
                        <input
                            type="email"
                            placeholder="Digite um email"
                            // value={email}
                            // onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="Login-loginInputPassword">
                        <input
                            placeholder="Digite sua senha"
                            // type={show ? "text" : "password"}
                            // value={password}
                            // onChange={e => setPassword=(e.target.value)}
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
                    <Link 
                        to='/Cadastro' 
                        style={
                            {color:'white',textDecoration:'none'}
                        }
                    > 
                        <button id="cadastrar-se">
                            Cadastra-se 
                        </button>
                    </Link>



                </div>

            </div>
        </div>
    )
}

export default Login;