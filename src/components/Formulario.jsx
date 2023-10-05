import React from 'react';
import { useForm } from 'react-hook-form';


const Formulario = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = ( data ) => {
        console.log( data );
    }

    return (
    
        <>
        
            <form onSubmit={ handleSubmit( onSubmit ) }>

                <div className="mb-4">
                    
                    <label className="form-label">
                        <img src="icon-user.svg" alt="icon"/>
                        Nombre
                    </label>
                    
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="name@example.com"
                        { ...register('name', { required: true }) } />

                    { errors.name?.type === 'required' && <span className="error">El nombre es requerido</span> }

                </div>


                <div className="mb-4">
                    
                    <label className="form-label">
                        <img src="icon-email.svg" alt="icon"/>
                        Correo Electrónico
                    </label>
                    
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Ej: correo@electronico.com"
                        { ...register('email', { required: true }) } />

                        { errors.email?.type === 'required' && <span className="error">El correo es requerido</span> }
                
                </div>


                <div className="mb-4">

                    <label className="form-label">
                        <img src="icon-pencil.svg" alt="icon"/>
                        Mensaje
                    </label>

                    <textarea
                        name="message"
                        className="form-control"
                        rows="3"
                        placeholder='Escribe aquí tu mensaje'
                        { ...register('message') } >
                    </textarea>

                </div>


                <div className="text-center">
                    <button type='submit' className='btn'>¡Contáctanos hoy mismo!</button>
                </div>

            </form>

        </>
    
    )

}



export default Formulario
