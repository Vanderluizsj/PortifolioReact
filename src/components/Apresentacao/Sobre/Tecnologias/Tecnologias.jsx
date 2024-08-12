import React from 'react'
import Front from './Front/Front'
import Back from './Back/Back'


function Tecnologias() {
  return (
    <div class="card mt-3">
      <div class="card-header">
        <h5 class="card-title mb-0">Tecnologias</h5>
      </div>
      <div className='row'>
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