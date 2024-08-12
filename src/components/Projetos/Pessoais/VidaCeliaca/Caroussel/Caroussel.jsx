import React from 'react'
import homeImage from './assets/Home.png'
import loginImage from './assets/Login.png'
import produtoImage from './assets/Produtos.png'
import cadastroProdutoImage from './assets/CadastroProduto.png'
import cadastroParceiroImage from './assets/CadastroParceiro.png'
import cadastroUsuarioImage from './assets/CadastroUsuario.png'

function Caroussel() {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={homeImage} className="d-block w-100" alt="Primeiro slide" />
        </div>
        <div className="carousel-item">
          <img src={loginImage} className="d-block w-100" alt="Segundo slide" />          
        </div>
        <div className="carousel-item">
          <img src={produtoImage} className="d-block w-100" alt="Terceiro slide" />
        </div>
        <div className="carousel-item">
          <img src={cadastroProdutoImage} className="d-block w-100" alt="Quarto slide" />
        </div>
        <div className="carousel-item">
          <img src={cadastroParceiroImage} className="d-block w-100" alt="Quinto slide" />
        </div>
        <div className="carousel-item">
          <img src={cadastroUsuarioImage} className="d-block w-100" alt="Sexto slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Caroussel