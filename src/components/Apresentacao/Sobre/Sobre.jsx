import React from 'react'
import Tecnologias from './Tecnologias/Tecnologias'

function Sobre() {
    return (
        <div className=''>
            <div class="card">
                <div class="card-header" >
                    <h5 class="card-title mb-0">
                        Sobre mim
                    </h5>
                </div>
                <div class="card-body">
                    <p class="card-text text-justify">
                        Sou um desenvolvedor fullstack com uma paixão por criar soluções web completas e eficientes. Meu foco está em construir aplicações que são não apenas funcionais, mas também intuitivas e visualmente atraentes.</p>
                        <p class="card-text text-justify">
                        Com um background em Ciências da Computação, adquiri habilidades práticas tanto no desenvolvimento frontend quanto backend. No frontend, utilizo principalmente Angular, scss e Bootstrap para criar interfaces dinâmicas e responsivas. No backend, tenho experiência com .NET e SqlServer, que me permitem construir APIs robustas e escaláveis. Atualmente estou desenvolvendo abilidades de desenvolvimento em React no frontend e Node.js no backend.
                    </p>
                </div>
            </div>


            <Tecnologias></Tecnologias>
            
        </div>


    )
}

export default Sobre