import { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../Card';

import './estilo.css';

class Carrossel extends Component{
  render() {
    var settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll:2,
      speed: 500, 
      arrows: true,
      dots: true,
      acessibility:true,
      initialSlide:0,
      responsive:[
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          } 
        }
      ]

    };
    return (
     <div className = 'teste'>
     <div className = 'carrossel'>
        <h3>Estacionamentos recomendados</h3>
        
        <Slider {...settings}>
          <Card
          imagem='assets/estacionamentos/garagem.jpg' estacionamento='Estacionamento estrela' 
          titulo='Estrela estacionameto' rua = 'Rua Campo Novo'
          bairro = 'Pinheiros' cidade='São Paulo'
          diaria = '45,00 '
          descricao='Estacionamento coberto.'
          />
        
          <Card
          imagem='assets/estacionamentos/estacionamento2.jpg' 
          titulo='Estrela estacionameto' rua = 'Rua Campo Novo'
          bairro = 'Pinheiros' cidade='São Paulo'
          diaria = '45,00 '
          descricao='Estacionamento coberto.'
          />
          <Card
          imagem='assets/estacionamentos/estacionamento1.jpg' estacionamento='Estacionamento1' 
          titulo='Teste' descricao='Lorem Lorem'
          bairro = 'Pinheiros' cidade='São Paulo'
          diaria = '45,00 '
          descricao='Estacionamento coberto.'/>
          <Card
          imagem='assets/estacionamentos/estacionamento3.jpg' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'
          bairro = 'Pinheiros' cidade='São Paulo'
          diaria = '45,00 '
          descricao='Estacionamento coberto.'/>
          <Card
          imagem='assets/estacionamentos/estacionamento4.jpg' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'
          bairro = 'Pinheiros' cidade='São Paulo'
          diaria = '45,00 '
          descricao='Estacionamento coberto.'/>
          <Card
          imagem='assets/estacionamentos/estacionamento5.png' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'
          bairro = 'Pinheiros' cidade='São Paulo'
          diaria = '45,00 '
          descricao='Estacionamento coberto.'/>
          <Card
          imagem='assets/estacionamentos/estacionamento6.jpg' estacionamento='Estacionamento1' 
          titulo='Teste1' descricao='Lorem Lorem'
          bairro = 'Pinheiros' cidade='São Paulo'
          diaria = '45,00 '
          descricao='Estacionamento coberto.'/>
        </Slider>
      </div>
      </div>
    );
  }
}

export default Carrossel;