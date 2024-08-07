import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Apresentacao from '../components/Apresentacao/Apresentacao'


function Index() {
  return (
    <>    
    <div class='card rounded'>
      <Navbar/>      
    </div>
    <div className='card rounded p-3 mt-3'>
      <Apresentacao/>
    </div>
    <div class='card rounded mt-3'>
      <Footer/>
    </div>
    </>
    
  )
}

export default Index