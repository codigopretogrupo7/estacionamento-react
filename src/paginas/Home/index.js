import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import Carrossel from '../../componentes/Carrossel';
import Rodape from '../../componentes/Rodape';

import './estilo.css';

const Home = () => {
	const { redirect, alterRedirect } = useContext(Context);

	useEffect(() => {
		if (redirect) {
			alterRedirect(false);
		}
	}, [redirect, alterRedirect]);

	return (
		<>
			<section>
				<h1>Aproveite a liberdade de chegar onde e quando você quiser.</h1>

				<ul className='lista-sobre-estacionamento limitar-container'>
					<li>
						<div className='icons'>
							<img 
							src="assets/icons/phone.svg"
							classname="icons"/>
						</div>

						<h3>Na palma da sua mão</h3>
						<p>
							Encontre o estacionamento mais perto de você e reserve sua vaga, sabendo exatamente o valor que irá pagar, tudo na palma da sua mão.
						</p>
					</li>
					<li>
						<div className='icons'>
							<img 
							src="assets/icons/cifrao.svg"
							classname="icons"/>
						</div>

						<h3>Compare e economize</h3>
						<p>
							Saiba exatamente o valar que irá pagar, seja por 5 minutos, 1 hora, 1 mês. Encontre o menor preço. Pague o menor preço.
						</p>
					</li>
					<li>
						<div className='icons'>
							<img 
							src="assets/icons/parking.svg"
							classname="icons"/>
						</div>

						<h3>Comodidade</h3>
						<p>
						Temos uma grande rede de estacionamentos credenciados para atender a sua necessidade. Escolha a unidade mais próxima a você e  conquiste a comodidade.
						</p>
					</li>
				</ul>

				<div className='home-apresentacao'>
					<div className='limitar-container'>
					<h3>Estacionamentos recomendados</h3>
						<Carrossel />
					</div>
				</div>

				<h2 className='titulo-sessao'>
					Por que contratar nossos <b>estacionamentos</b>?
				</h2>

				<img
					className='img-estacionamento'
					src='assets/estacionamento.jpg'
					alt='Imagem do uso de um estacionamento'
					title='Imagem do uso de um estacionamento'
				/>

				

				<div className='home-depoimentos'>
					<h2 className='titulo-sessao'>
						Veja o que nossos <b>clientes</b> estão falando...
					</h2>

					<ul className='lista-depoimentos'>
						<li>
							<img
								className='img-estacionamento'
								src='assets/cliente01.png'
								alt='Cliente Alberto'
								title='Cliente Alberto'
							/>
							<p>Alberto</p>
							<p>
								A tranquilidade de encontrar um estacionamento de confiança
								sempre que preciso.
							</p>
						</li>

						<li>
							<img
								className='img-estacionamento'
								src='assets/cliente02.png'
								alt='Cliente Eliana'
								title='Cliente Eliana'
							/>
							<p>Eliana</p>
							<p>
								Sempre me preocupava em ter que estacionar meu carro na rua, mas
								agora consigo deixa-lo em estacionamentos próximos e não me
								preocupar.
							</p>
						</li>

						<li>
							<img
								className='img-estacionamento'
								src='assets/cliente03.png'
								alt='Cliente Carla'
								title='Cliente Carla'
							/>
							<p>Carla</p>
							<p>Começei a usar ano passado e estou adorando.</p>
						</li>
					</ul>
				</div>

				<div>
					<Link to='/contato' className='btn-contato'>
						Entrar em contato
					</Link>
				</div>
			</section>
			<Rodape />
		</>
	);
};

export default Home;
