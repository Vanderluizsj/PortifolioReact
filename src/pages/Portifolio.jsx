import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Foto from '../components/Foto/Foto'
import Projetos from '../components/projetos/Projetos'

function Portifolio() {
  return (
    <>

      <Navbar selectedIndex={2} />

      <div className='row p-3'>
        <div className='card col-md-3' id='efeito-vidro'>
          <Foto></Foto>
        </div>
        <div className='card col-md-9 p-3' id='efeito-vidro'>
          <Projetos></Projetos>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Portifolio