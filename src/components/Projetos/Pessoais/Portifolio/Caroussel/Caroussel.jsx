import React from 'react'
import homeImage from './assets/Home2.png'
import curriculoImage from './assets/Curriculo3.png'
import portifolioImage from './assets/Portifolio2.png'
import homeanimadodark from './assets/HomeAnimadoDark.png'
import HomeAnimadoDark2 from './assets/HomeAnimadoDark2.png'
import HomeAnimado from './assets/Home animado.png'

function Caroussel() {
  return (
    <div id="myCarousel2" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={homeImage} className="d-block w-100" alt="Primeiro slide" />
      </div>
      <div className="carousel-item">
        <img src={curriculoImage} className="d-block w-100" alt="Segundo slide" />          
      </div>
      <div className="carousel-item">
        <img src={portifolioImage} className="d-block w-100" alt="Terceiro slide" />
      </div>
      <div className="carousel-item">
        <img src={homeanimadodark} className="d-block w-100" alt="Quarto slide" />
      </div>
      <div className="carousel-item">
        <img src={HomeAnimadoDark2} className="d-block w-100" alt="Quinto slide" />
      </div>
      <div className="carousel-item">
        <img src={HomeAnimado} className="d-block w-100" alt="Sexto slide" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Caroussel