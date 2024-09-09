import React from 'react'
import './Foto.css'
import Eu from './assets/Eu4.jpg'

function Foto() {
    return (
        <div class="card d-flex justify-content-center align-items-center" id='apresentacao'>
            <div class="card-image ">
                <figure class="image" >
                    <img src={Eu} alt="Placeholder image" id="Eu" />
                </figure>
            </div>

            <div class="card-body">
                <div class="d-flex">
                    <div class="media-body">
                        <h5 class="card-title px-2">Vanderluiz R. Oliveira</h5>
                        <span class="badge bg-dark text-white px-5 py-2">Full Stack Developer</span>
                    </div>
                </div>
                <div class="mt-2 px-3">
                    <a href="mailto:vanderluizsj@gmail.com">vanderluizsj@gmail.com</a>
                </div>
            </div>


        </div>
    )
}

export default Foto