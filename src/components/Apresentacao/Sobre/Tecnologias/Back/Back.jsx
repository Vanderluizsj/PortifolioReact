import React from 'react'
import CsharpImage from './assets/c-sharp.png'
import NodeImage from './assets/nodejs.png'
import SqlImage from './assets/sql.png'
function Back() {
  return (
    <div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <img class="rounded-circle img-fluid" src={CsharpImage} alt="Imagem do C#" />
          </div>
          <div class="col-md-9">
            <h5 class="card-title">
              C#
            </h5>
            <p class="text-justify">
            C# (C-sharp) é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft. É usada principalmente no desenvolvimento de aplicações desktop, web, e móveis com o framework .NET. Vi pela primeira vez no Troptech e utilizo desde então na maioria dos meus projetos.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <img class="rounded-circle img-fluid" src={NodeImage} alt="Imagem do Node.js" />
          </div>
          <div class="col-md-9">
            <h5 class="card-title">
              Node.js
            </h5>
            <p class="text-justify">
            Node.js é um ambiente de execução JavaScript do lado do servidor que permite a criação de aplicações web escaláveis e de alto desempenho. Ele é baseado no motor V8 do Google Chrome e é conhecido por sua arquitetura assíncrona e baseada em eventos. Estou aprendendo ao fazer a disciplina de Tópicos especiais em programação do IFSC e pretendo continuar me aprofundando.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <img class="rounded-circle img-fluid" src={SqlImage} alt="Imagem do SqlServer" />
          </div>
          <div class="col-md-9">
            <h5 class="card-title">
              SqlServer
            </h5>
            <p class="text-justify">
            SQL Server é um sistema de gerenciamento de banco de dados relacional (RDBMS) desenvolvido pela Microsoft. Vi pela primeira vez no Troptech e utilizo em todas as minhas aplicações .Net.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Back