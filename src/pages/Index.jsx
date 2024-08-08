import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Apresentacao from '../components/Apresentacao/Apresentacao'


function Index() {
  return (
    <>    
    <div class='card rounded' id='efeito-vidro'>
      <Navbar/>      
    </div>
    <div class='card rounded p-3 mt-3' id='efeito-vidro'>
      <Apresentacao/>
    </div>
    <div class='card rounded mt-3' id='efeito-vidro'>
      <Footer/>
    </div>
    </>
    
  )
}

export default Index