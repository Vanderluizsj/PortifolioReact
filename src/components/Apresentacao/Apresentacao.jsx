import React from 'react'
import Foto from './Foto/Foto'
import Sobre from './Sobre/Sobre'

function Apresentacao() {
    return (
        <>
        <div className='row'>
            <div className='col-md-3'>
                <Foto></Foto>
            </div>
            <div className='col-md-9' >
                <Sobre></Sobre>
            </div>
        </div>
            
            
        </>
    )
}

export default Apresentacao