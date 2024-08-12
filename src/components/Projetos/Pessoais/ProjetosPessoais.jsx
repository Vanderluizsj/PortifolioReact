import React from 'react'
import VidaCeliaca from './VidaCeliaca/VidaCeliaca'
import PortifolioReact from './Portifolio/PortifolioReact'
import './ProjetosPessoais.css'
function ProjetosPessoais() {
  return (
    <>
      <div>
        <h3 className='title text-center'>Projetos pessoais</h3>
        <VidaCeliaca></VidaCeliaca>
        <hr />
        <PortifolioReact></PortifolioReact>
      </div>
    </>
  )
}

export default ProjetosPessoais