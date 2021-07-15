import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';



export default class Navbar extends Component {
    
    state = {clicked:false}
    

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    


    render() {
        return (
            
            <nav className="NavbarItems">
                <Link className="navbar-logo" to={'/'}>
                    <h1><img className="topo-logo" src="assets/park.png" alt="logo estacionamento" title="logo estacionamento"/>Tem Vaga </h1>
                </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    
                </div>   
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <Link className="nav-links" to={'/'} onClick={this.handleClick}>
                                 Home
                            </Link>   
                        </li>

                        <li>
                            <Link className="nav-links" to={'/Estacionamentos-Parceiros'}onClick={this.handleClick}>
                               Estacionamentos Parceiros
                            </Link>
                        </li>

                        <li>
                            <Link className="nav-links" to={'/contato'} onClick={this.handleClick}>
                                Contato
                            </Link>                                  
                        </li>

                        <li>                                       
                            <Link className="nav-links" to={'/login'} onClick={this.handleClick}>
                                Login
                            </Link>
                        </li>
                    </ul>
                    
            </nav>
        )
    }
}



