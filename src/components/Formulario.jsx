import React, { useState } from 'react'



const Formulario = () => {

    const [name, setName]       = useState('');
    const [email, setEmail]     = useState('');
    const [message, setMessage] = useState('');
    
    const handleForm = ( event ) => {
        event.preventDefault();
        console.log( event )
    }

    return (
    
        <>
        
            <form onSubmit={ handleForm }>

                <div className="mb-4">
                    <label className="form-label">
                        <img src="icon-user.svg" alt="icon"/>
                        Nombre
                    </label>
                    <input type="text" name="name" className="form-control" id="inputNombre" placeholder="name@example.com"></input>
                </div>

                <div className="mb-4">
                    <label className="form-label">
                        <img src="icon-email.svg" alt="icon"/>
                        Correo Electrónico
                        </label>
                    <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Ej: correo@electronico.com"></input>
                </div>

                <div className="mb-4">
                    <label className="form-label">
                        <img src="icon-pencil.svg" alt="icon"/>
                        Mensaje
                    </label>
                    <textarea name="message" className="form-control" id="inputMensaje" rows="3" placeholder='Escribe aquí tu mensaje'></textarea>
                </div>

                <div className="text-center">
                    <button type='submit' className='btn'>¡Contáctanos hoy mismo!</button>
                </div>

            </form>

        </>
    
    )

}



export default Formulario
