import React, { useState } from 'react';
import CsharpImage from './assets/c-sharp.png';
import NodeImage from './assets/nodejs.png';
import SqlImage from './assets/sql.png';
import './Back.css'; // Arquivo CSS para estilização

function Back() {
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
        className="back-card card-body"
        onMouseEnter={() => handleMouseEnter('csharp')}
        onMouseLeave={handleMouseLeave}
      >
        
        <div className="row">
          <div className="col-md-3">
            <img className="rounded-circle img-fluid" src={CsharpImage} alt="Imagem do C#" />
          </div>
          <div className={`col-md-9 card-text ${hoveredCard === 'csharp' ? 'visible' : ''}`}>
            <h5 className="card-title">C#</h5>
            <p className="text-justify">
              C# (C-sharp) é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft. É usada principalmente no desenvolvimento de aplicações desktop, web, e móveis com o framework .NET. Vi pela primeira vez no Troptech e utilizo desde então na maioria dos meus projetos.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="back-card card-body"
        onMouseEnter={() => handleMouseEnter('node')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="row">
          <div className="col-md-3">
            <img className="rounded-circle img-fluid" src={NodeImage} alt="Imagem do Node.js" />
          </div>
          <div className={`col-md-9 card-text ${hoveredCard === 'node' ? 'visible' : ''}`}>
            <h5 className="card-title">Node.js</h5>
            <p className="text-justify">
              Node.js é um ambiente de execução JavaScript do lado do servidor que permite a criação de aplicações web escaláveis e de alto desempenho. Ele é baseado no motor V8 do Google Chrome e é conhecido por sua arquitetura assíncrona e baseada em eventos. Estou aprendendo ao fazer a disciplina de Tópicos especiais em programação do IFSC e pretendo continuar me aprofundando.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="back-card card-body"
        onMouseEnter={() => handleMouseEnter('sql')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="row">
          <div className="col-md-3">
            <img className="rounded-circle img-fluid" src={SqlImage} alt="Imagem do SqlServer" />
          </div>
          <div className={`col-md-9 card-text ${hoveredCard === 'sql' ? 'visible' : ''}`}>
            <h5 className="card-title">SQL Server</h5>
            <p className="text-justify">
              SQL Server é um sistema de gerenciamento de banco de dados relacional (RDBMS) desenvolvido pela Microsoft. Vi pela primeira vez no Troptech e utilizo em todas as minhas aplicações .Net.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Back;
