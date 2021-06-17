import { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../Card';

import './estilo.css';

class Carrossel extends Component{
  render() {
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll:2,
      speed: 500, 
      arrows: true,
      dots: true,
      acessibility:true
    };
    return (
     <div className = 'teste'>
     <div className = 'carrossel'>
        <h3>Estacionamentos recomendados</h3>
        <Slider {...settings}>
          <Card
          imagem='assets/cliente01.png' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'/>
          <Card
          imagem='assets/cliente01.png' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'/>
          <Card
          imagem='assets/cliente01.png' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'/>
          <Card
          imagem='assets/cliente01.png' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'/>
          <Card
          imagem='assets/cliente01.png' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'/>
          <Card
          imagem='assets/cliente01.png' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'/>
          <Card
          imagem='assets/cliente01.png' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'/>
          <Card
          imagem='assets/cliente01.png' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'/>
          <Card
          imagem='assets/cliente01.png' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'/>
        </Slider>
      </div>
      </div>
    );
  }
}

export default Carrossel;