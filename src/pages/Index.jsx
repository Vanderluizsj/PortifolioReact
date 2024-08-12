import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Sobre from '../components/Apresentacao/Sobre/Sobre'
import Foto from '../components/Foto/Foto'


function Index() {
  return (
    <>    
    
      <Navbar selectedIndex={0}/>      
    
      <div className='row p-3'>
            <div className='card col-md-3' id='efeito-vidro'>
                <Foto></Foto>
            </div>
            <div className='card col-md-9 p-3' id='efeito-vidro'>
                <Sobre></Sobre>
            </div>
        </div>
    
      <Footer/>
    
    </>
    
  )
}

export default Index