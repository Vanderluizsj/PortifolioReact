import React from 'react'

function FormacaoAcademica() {
    return (
        <div>
            <h2>Formação acadêmica</h2>
            <ul>
                <li><h5>Graduação em Ciência da Computação.</h5>
                    <table class="table table-hover" id='tabela'>
                        <thead>
                            <tr>
                                <th scope="col">Periodo</th>
                                <th scope="col">Instituição de ensino</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">2019 - Atualmente.</th>
                                <td>Instituto Federal de Santa Catarina</td> 
                            </tr>
                        </tbody>
                    </table>
                </li>
                
                <li>
                    <h5>Graduação em Ciência da Computação.</h5>
                    <table class="table table-hover" id='tabela'>
                        <thead>
                            <tr>
                                <th scope="col">Periodo</th>
                                <th scope="col">Instituição de ensino</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">2008 - Interrompida.</th>
                                <td>Centro Universitário Unifacvest</td> 
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </div>

    )
}

export default FormacaoAcademica