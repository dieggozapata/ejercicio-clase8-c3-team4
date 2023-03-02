import React from 'react'
import { useState } from 'react'

export const Formulario = () => {

    const [user, setUser] = useState({
        nombre: '',
        edad: 0,
        url: ''
    })
    const [show, setShow] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        setShow(true)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Nombre Completo:</label>
            <input type="text" required onChange={(event) => setUser({...user, nombre: event.target.value})}/>
            <label>Edad:</label>
            <input type="number" required onChange={(event) => setUser({...user, edad: event.target.value})}/>
            <label>Imagen Pokemon:</label>
            <input type="text" required onChange={(event) => setUser({...user, url: event.target.value})}/>
            <button>Enviar Datos</button>
        </form>

        {show && 
            <>
                <p>Nombre: {user.nombre}</p>
                <p>Edad: {user.edad}</p>
                <img src={user.url} />
            </>
        }
    </>


  )
}
