import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import { Contexts } from '../../Context/AuthEstacionamentoContext'

import { Menu, Button, MenuItem } from '@material-ui/core/';

import './Navbar.css';

export default function Navbar() {
	const [clicked, setClicked] = useState(false);
	const handleClicks = () => {
		setClicked(!clicked);
	};

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const { authenticated, handleLogout, nome } = useContext(Context);
	const { Logout } = useContext(Contexts)

	if(localStorage.getItem("id") && localStorage.getItem("id") !== undefined ){
		return (
			<nav className='NavbarItems'>
				<Link className='navbar-logo' to={'/Vagas'}>
					<h1>
						<img
							className='topo-logo'
							src='assets/park.png'
							alt='logo estacionamento'
							title='logo estacionamento'
						/>
						Tem Vaga{' '}
					</h1>
				</Link>
	
				<div className='menu-icon' onClick={handleClicks}>
					<i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={clicked ? 'nav-menu active' : 'nav-menu'}>	
					<li>
							<>
								<Button
									aria-controls='simple-menu'
									aria-haspopup='true'
																	style={{color:"white"}}
									onClick={handleClick}
								>
									<span
										
									>
					
										{localStorage.getItem("nomeEstacionamento")}
									</span>
								</Button>
								<Menu
									id='simple-menu'
									anchorEl={anchorEl}
									keepMounted
									open={Boolean(anchorEl)}
									onClose={handleClose}
								>
									<MenuItem>
										<Link to='/Vagas'>
											<span>Vagas</span>
										</Link>
									</MenuItem>
									<MenuItem onClick={Logout}>
										<Link to='/'>
											<span>Sair</span>
										</Link>
									</MenuItem>
								</Menu>
							</>
					</li>
				</ul>
			</nav>
		)
	}else{

	return (
		<nav className='NavbarItems'>
			<Link className='navbar-logo' to={'/'}>
				<h1>
					<img
						className='topo-logo'
						src='assets/park.png'
						alt='logo estacionamento'
						title='logo estacionamento'
					/>
					Tem Vaga{' '}
				</h1>
			</Link>

			<div className='menu-icon' onClick={handleClicks}>
				<i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
			</div>
			<ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
				<li>
					<Link className='nav-links' to={'/'}>
						Home
					</Link>
				</li>

				<li>
					<Link
						className='nav-links'
						to={'/Estacionamentos-Parceiros'}
						onClick={handleClicks}
					>
						Estacionamentos Parceiros
					</Link>
				</li>

				<li>
					<Link className='nav-links' to={'/contato'} onClick={handleClick}>
						Contato
					</Link>
				</li>

				<li>
					{authenticated ? (
						<>
							<Button
								aria-controls='simple-menu'
								aria-haspopup='true'
                                style={{color:"white"}}
								onClick={handleClick}
							>
								<span
									
								>
				
									{nome}
								</span>
							</Button>
							<Menu
								id='simple-menu'
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<Link to="/veiculoscadastrados">
									<MenuItem onClick={handleClose}>Veiculos</MenuItem>
								</Link>
								<MenuItem onClick={handleLogout}>
									<Link to='/'>
										<span>Sair</span>
									</Link>
								</MenuItem>
							</Menu>
						</>
					) : (
						<Link className='nav-links' to='/login' >
							Login
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
}
