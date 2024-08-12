import React from 'react'
import Caroussel from './Caroussel/Caroussel'

function VidaCeliaca() {
    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <Caroussel></Caroussel>
                </div>
                <div className='col-md-6'>
                    <h5 className='text-center'>Vida Celiaca</h5>
                    <p className='text-justify'> Trabalho de conclusao de curso que aborda a criação de uma aplicação web responsiva para auxiliar individuos com doença celíaca, uma condição que requer uma dieta isenta de glúten.</p>

                    <ul>
                        <li>O fron-tend da aplicação foi desenvolvido com:</li>
                        <ul>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <li>HTML 5</li>
                                    <li>SCSS</li>
                                    <li>Angular 16</li>
                                </div>
                                <div className='col-md-6'>
                                    <li>bootstrap 5</li>
                                    <li>bootswatch 5</li>
                                    <li>ngx-bootstrap 11</li>
                                </div>
                            </div>


                        </ul>
                        <li>O back-end segue a arquitetura de tres camadas
                            e foi desenvolvido em:</li>
                        <ul>
                            <li>.Net Framework 6</li>
                            
                        </ul>
                        <li>Banco de dados:</li>
                        <ul>
                            <li>SqlServer</li>                            
                        </ul>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default VidaCeliaca