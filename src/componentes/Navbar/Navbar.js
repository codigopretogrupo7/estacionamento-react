import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../../Context/AuthContext';


import './Navbar.css';



export default function Navbar () {
    const [clicked,setClicked] = useState(false);
     
 
    const handleClick = () =>{
         setClicked(!clicked)
     }

     const { authenticated, handleLogout } = useContext(Context);
 


        return (
            
            <nav className="NavbarItems">
                <Link className="navbar-logo" to={'/'}>
                    <h1><img className="topo-logo" src="assets/park.png" alt="logo estacionamento" title="logo estacionamento"/>Tem Vaga </h1>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    
                </div>   
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <Link className="nav-links" to={'/'} onClick={handleClick}>
                                 Home
                            </Link>   
                        </li>

                        <li>
                            <Link className="nav-links" to={'/Estacionamentos-Parceiros'}onClick={handleClick}>
                               Estacionamentos Parceiros
                            </Link>
                        </li>

                        <li>
                            <Link className="nav-links" to={'/contato'} onClick={handleClick}>
                                Contato
                            </Link>                                  
                        </li>

                        <li>
                            {authenticated  ?  
                                <span className="nav-links" onClick={handleLogout}>Sair</span>:                                   
                                <Link className="nav-links" to={'/login'} onClick={handleClick}>
                                    Login
                                </Link>
                            }
                        </li>
                    </ul>
                    
            </nav>
        )
    }




