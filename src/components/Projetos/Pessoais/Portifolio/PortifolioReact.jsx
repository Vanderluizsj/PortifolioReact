import React from 'react'
import Caroussel from './Caroussel/Caroussel'

function PortifolioReact() {
    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <Caroussel></Caroussel>
                </div>
                <div className='col-md-6'>
                    <h5 className='text-center'>Portifólio em React</h5>
                    <p className='text-justify'> Trabalho de conclusão da disciplina Tópicos especiais em programação.</p>

                    <ul>
                        <li>O fron-tend da aplicação foi desenvolvido com:</li>
                        <ul>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <li>HTML 5</li>
                                    <li>CSS 3</li>
                                    <li>React 18</li>
                                </div>
                                <div className='col-md-6'>
                                    <li>bootstrap 5</li>
                                </div>
                            </div>

                        </ul>                        

                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default PortifolioReact