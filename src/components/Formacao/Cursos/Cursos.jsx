import React from 'react'

function Cursos() {
    return (
        <div>
            <h2>Principais Cursos</h2>
            <ul>
                <li><h5>TropTech.</h5>
                    <table class="table table-hover" id='tabela'>
                        <thead>
                            <tr>
                                <th scope="col">Periodo</th>
                                <th scope="col">Instituição de ensino</th>
                                <th scope="col">Carga horária</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">2022</th>
                                <td>Universidade do Planalto Catarinense (Uniplac) </td>
                                <td>600 horas</td>
                            </tr>
                        </tbody>
                    </table>
                </li>

                <li><h5>Angular e ASP.NET Core Web API, Entity Framework Core e ASP.NET Core Identity.</h5>
                    <table class="table table-hover" id='tabela'>
                        <thead>
                            <tr>
                                <th scope="col">Periodo</th>
                                <th scope="col">Instituição de ensino</th>
                                <th scope="col">Carga horária</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">2023</th>
                                <td>Udemy</td>
                                <td>36,5 horas</td>
                            </tr>
                        </tbody>
                    </table>
                </li>

                <li><h5>Fundamentos do React.</h5>
                    <table class="table table-hover" id='tabela'>
                        <thead>
                            <tr>
                                <th scope="col">Periodo</th>
                                <th scope="col">Instituição de ensino</th>
                                <th scope="col">Carga horária</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">2024</th>
                                <td>onebitcode</td>
                                <td>11 horas</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <ul>
                    <li>Para ver mais sobre acesse: <a href="https://www.linkedin.com/in/vanderluiz/"
                        target="_blank"
                        class="text-underline font-size-sm">Linkdin                        
                    </a></li>
                </ul>
            </ul>
        </div>

    )
}

export default Cursos