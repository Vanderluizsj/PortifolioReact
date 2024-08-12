import React from 'react'
import AngularImage from './assets/angularjs.png'
import ReactImage from './assets/react.png'
import BootstrapImage from './assets/bootstrap-framework.png'
import ScssImage from './assets/sass.png'

function Front() {
  return (
    <div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <img class="rounded-circle img-fluid" src={AngularImage} alt="Imagem do Angular" />
          </div>
          <div class="col-md-9">
            <h5 class="card-title">
              Angular.js
            </h5>
            <p class="text-justify">
            Angular.js é um framework JavaScript front-end desenvolvido pelo Google. Ele permite a criação de aplicações web dinâmicas e single-page (SPA). Meu conhecimento nele vem dos projetos desenvolvidos no troptech, no curso da udemy e do desenvolvimento do meu TCC.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <img class="rounded-circle img-fluid" src={ReactImage} alt="Imagem do React" />
          </div>
          <div class="col-md-9">
            <h5 class="card-title">
              React.js
            </h5>
            <p class="text-justify">
            React.js é uma biblioteca JavaScript desenvolvida pelo Facebook para a construção de interfaces de usuário (UI). É baseada em componentes reutilizáveis e usa o conceito de Virtual DOM para atualizar a interface de forma eficiente. Meu conhecimento nele vem do curso da Onebitcode e do desenvolvimento desse projeto final da aula de Tópicos especiais em programação do IFSC.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <img class="rounded-circle img-fluid" src={BootstrapImage} alt="Imagem do Bootstrap" />
          </div>
          <div class="col-md-9">
            <h5 class="card-title">
              Bootstrap
            </h5>
            <p class="text-justify">
            Bootstrap é um framework front-end de código aberto que fornece uma coleção de ferramentas CSS, JavaScript e HTML para criar interfaces de usuário responsivas e modernas. Aprendi ele no Troptech e uso desde então em todos os meus projetos.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <img class="rounded-circle img-fluid" src={ScssImage} alt="Imagem do Scss" />
          </div>
          <div class="col-md-9">
            <h5 class="card-title">
              Scss
            </h5>
            <p class="text-justify">
            SCSS, ou Sassy CSS, é uma extensão do CSS que permite o uso de variáveis, aninhamento, mixins e outras funcionalidades que facilitam a escrita de estilos de forma mais organizada e reutilizável. Utilizei pela primeira vez nos projetos do curso da Udemy que consta em meu currículoe e no desenvolvimento do meu TCC.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Front