import React from 'react'
import Formulario from '../components/Formulario';



const Contactanos = () => {
  
    return (

        <>

            <div id="contactanos" className="contactanos row">

                <div className="col-md-6 padd bgBlue position-relative">

                    <img src="simbol.svg" className='simbol' alt="simbol" />

                    <h2 className="text-white">contáctanos</h2>
                    <p>Escríbenos  para descubrir cómo podemos ayudarte en tus metas.</p>
                    
                    <Formulario />

                </div>

                <div className="col-md-6 p-0">

                    <div className="ro">

                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.345104958173!2d-70.65159152436043!3d-33.44031437339357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a3d7051255%3A0xd3b9ab346a35ca5f!2sAgustinas%20853%2C%20oficina%20441%2C%208320199%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1695251605935!5m2!1ses!2scl"></iframe>
                        </div>

                        <div className="col-12 bgBlueLight py-4 px-2">

                            <ul>
                                <li>
                                    <img src="icon-pin.svg" alt="icon" />
                                    <span>Agustinas N°853, oficina 441 Santiago, Chile</span>
                                </li>
                                <li>
                                    <img src="icon-mail.svg" alt="icon" />
                                    <a href="mailto:info@lindsay.cl">Email: info@lindsay.cl</a>
                                </li>
                                <li>
                                    <img src="icon-phone.svg" alt="icon" />
                                    <a href="tel:+56224805950">Teléfono: (56 2) 24805950</a>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </>
    
    )

}



export default Contactanos;
