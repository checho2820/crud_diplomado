import React, { useState } from 'react'

const Formulario = () => {
    const [fruta, setFruta] = useState('');
    const [descripcion, setDescripcion] = useState('');
  return (
    <div className='container mt-5'>
        <h1 className='text-center'>CRUD BÁSICO</h1>
        <hr />
        <div className='row'>
            <div className='col-8'>
                <h4 className='text-center'>Listado de Frutas</h4>
                <ul className="list-group">

                </ul>
            </div>
            <div className='col-4'>
                <h4 className='text-center'>Agregar Frutas</h4>
            <form action="">
                <input className='form-control mb-2' type="text" placeholder='Ingrese Fruta'></input>
                <input className='form-control mb-2' type="text" placeholder='Ingrese Descripción'></input>
                <button className='btn btn-primary btn-block'>Agregar</button>
            
            </form>
        </div>
        </div>
        
        
    </div>
  )
}

export default Formulario