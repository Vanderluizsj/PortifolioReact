import React from 'react'
import Front from './Front/Front'
import Back from './Back/Back'
import TextAnimation from '../../../TextAnimation/TextAnimation';

function Tecnologias() {
  return (
    <div class="card mt-3">
      <div class="card-header">
        <h5 class="card-title mb-0"><TextAnimation text='Tecnologias'/></h5>        
      </div>
      <div className='row'>
      <h6 className='card-subtitle p-3 text-center'><TextAnimation text='Passe o mouse sobre a tecnologia que lhe interessar'/></h6>
        <div className='col-md-6'>
          <Front></Front>
        </div>
        <div className='col-md-6'>
          <Back></Back>
        </div>
      </div>



    </div>
  )
}

export default Tecnologias