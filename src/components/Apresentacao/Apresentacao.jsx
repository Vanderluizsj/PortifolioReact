import React from 'react'
import Foto from './Foto/Foto'
import Sobre from './Sobre/Sobre'
import './Apresentacao.css'

function Apresentacao() {
    return (
        <>
        <div className='row'>
            <div className='col-md-3' id='apresentacao'>
                <Foto></Foto>
            </div>
            <div className='col-md-9' id='apresentacao'>
                <Sobre></Sobre>
            </div>
        </div>
            
            
        </>
    )
}

export default Apresentacao