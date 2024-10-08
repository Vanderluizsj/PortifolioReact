import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Foto from '../components/Foto/Foto'
import Formacao from '../components/Formacao/Formacao'

function Curriculo() {
  return (
    <>
      

      <div className='row p-3'>
        <div className='card col-md-3' id='efeito-vidro'>
          <Foto></Foto>
        </div>
        <div className='card col-md-9 p-3' id='efeito-vidro'>
          <Formacao></Formacao>
        </div>
      </div>

      <div className='card' id='efeito-vidro'>
    <Footer/>
    </div>
    </>
  )
}
export default Curriculo