import React, { useState } from 'react';
import AngularImage from './assets/angularjs.png';
import ReactImage from './assets/react.png';
import BootstrapImage from './assets/bootstrap-framework.png';
import ScssImage from './assets/sass.png';
import './Front.css'; // Arquivo CSS para estilização

function Front() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (card) => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    // Se quiser que o texto desapareça após o mouse sair, defina setHoveredCard(null);
    // Se quiser que o texto permaneça visível depois do hover, não faça nada.
  };

  return (
    <div>
      <div
        className="front-card card-body"
        onMouseEnter={() => handleMouseEnter('angular')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="row">
          <div className="col-md-3">
            <img className="rounded-circle img-fluid" src={AngularImage} alt="Imagem do Angular" />
          </div>
          <div className={`col-md-9 card-text ${hoveredCard === 'angular' ? 'visible' : ''}`}>
            <h5 className="card-title">Angular.js</h5>
            <p className="text-justify">
              Angular.js é um framework JavaScript front-end desenvolvido pelo Google. Ele permite a criação de aplicações web dinâmicas e single-page (SPA). Meu conhecimento nele vem dos projetos desenvolvidos no troptech, no curso da udemy e do desenvolvimento do meu TCC.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="front-card card-body"
        onMouseEnter={() => handleMouseEnter('react')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="row">
          <div className="col-md-3">
            <img className="rounded-circle img-fluid" src={ReactImage} alt="Imagem do React" />
          </div>
          <div className={`col-md-9 card-text ${hoveredCard === 'react' ? 'visible' : ''}`}>
            <h5 className="card-title">React.js</h5>
            <p className="text-justify">
              React.js é uma biblioteca JavaScript desenvolvida pelo Facebook para a construção de interfaces de usuário (UI). É baseada em componentes reutilizáveis e usa o conceito de Virtual DOM para atualizar a interface de forma eficiente. Meu conhecimento nele vem do curso da Onebitcode e do desenvolvimento desse projeto final da aula de Tópicos especiais em programação do IFSC.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="front-card card-body"
        onMouseEnter={() => handleMouseEnter('bootstrap')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="row">
          <div className="col-md-3">
            <img className="rounded-circle img-fluid" src={BootstrapImage} alt="Imagem do Bootstrap" />
          </div>
          <div className={`col-md-9 card-text ${hoveredCard === 'bootstrap' ? 'visible' : ''}`}>
            <h5 className="card-title">Bootstrap</h5>
            <p className="text-justify">
              Bootstrap é um framework front-end de código aberto que fornece uma coleção de ferramentas CSS, JavaScript e HTML para criar interfaces de usuário responsivas e modernas. Aprendi ele no Troptech e uso desde então em todos os meus projetos.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="front-card card-body"
        onMouseEnter={() => handleMouseEnter('scss')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="row">
          <div className="col-md-3">
            <img className="rounded-circle img-fluid" src={ScssImage} alt="Imagem do Scss" />
          </div>
          <div className={`col-md-9 card-text ${hoveredCard === 'scss' ? 'visible' : ''}`}>
            <h5 className="card-title">SCSS</h5>
            <p className="text-justify">
              SCSS, ou Sassy CSS, é uma extensão do CSS que permite o uso de variáveis, aninhamento, mixins e outras funcionalidades que facilitam a escrita de estilos de forma mais organizada e reutilizável. Utilizei pela primeira vez nos projetos do curso da Udemy que consta em meu currículoe e no desenvolvimento do meu TCC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
