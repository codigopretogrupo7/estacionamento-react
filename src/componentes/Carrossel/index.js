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
        
        
        <Slider {...settings}>
          <Card
          imagem='assets/estacionamentos/garagem.jpg' estacionamento='Estacionamento estrela' 
          titulo='Estrela estacionameto' rua = 'Rua Campo Novo'
          bairro = 'Pinheiros' cidade='São Paulo'
          diaria = '45,00 '
          descricao='Vaga coberta.'
          />
        
          <Card
          imagem='assets/estacionamentos/estacionamento2.jpg' 
          titulo='Inpark estacionameto' rua = 'Rua salvador'
          bairro = 'Zona Norte' cidade='São Paulo'
          diaria = '40,00 '
          descricao='Vaga coberta.'
          />
          <Card
          imagem='assets/estacionamentos/estacionamento1.jpg' 
          titulo='Estapar' rua = 'Rua Arcipreste Paiva'
          bairro = 'São Domingos' cidade='São Paulo'
          diaria = '35,00 '
          descricao='Vaga coberta.'
          />
          <Card
          imagem='assets/estacionamentos/estacionamento3.jpg' 
          titulo='MultiPark Itaberaba' rua = 'Rua Jaguabara'
          bairro = 'Itaberaba' cidade='São Paulo'
          diaria = '35,00 '
          descricao='Vaga coberta.'
          />
          <Card
          imagem='assets/estacionamentos/estacionamento4.jpg' 
          titulo='Campo de Marte' rua = 'Aeroporto Campo de Marte'
          bairro = 'Rodovia Helio smith' cidade='São Paulo'
          diaria = '55,00 '
          descricao='Vaga descoberta.'
          />
          <Card
         imagem='assets/estacionamentos/estacionamento5.png' 
         titulo='Estapar' rua = 'Rua Coroneu Garcia'
         bairro = 'Jardins' cidade='São Paulo'
         diaria = '35,00 '
         descricao='Vaga coberta.'
         />
          <Card
          imagem='assets/estacionamentos/estacionamento6.jpg' 
          titulo='Shopping estação' rua = 'Avenida Miguel Sutil'
          bairro = 'Goiabeiras' cidade='São Paulo'
          diaria = '35,00 '
          descricao='Vaga coberta.'
          />
        </Slider>
      </div>
      </div>
    );
  }
}

export default Carrossel;