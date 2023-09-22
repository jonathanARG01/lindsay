import React from 'react'
import Video from './Video';



const Footer = () => {
  
    return (

        <>

            <div className="footer">

                <div className="container d-flex justify-content-center align-items-center py-4 flex-column flex-md-row">
                
                    <div className="col-md-4 mb-5 mb-md-0">
                        <img src="logo2.svg" alt="logo" className="logo" />
                    </div>
                
                    <div className="col-md-4 mb-5 mb-md-0 d-flex flex-column flex-md-row justify-content-center pt-5 pt-md-0 d-none d-md-block">
                        <a className='mt-3 mt-md-0' href="#servicios">     servicios       </a>
                        <a className='mt-3 mt-md-0' href="#nosotros">      nosotros        </a>
                        <a className='mt-3 mt-md-0' href="#como_funciona"> ¿cómo funciona? </a>
                        <a className='mt-3 mt-md-0' href="#testimonios">   testimonios     </a>
                    </div>
                
                    <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-center justify-content-end">
                        <h6>SÍGUENOS</h6>
                        {/* <a href="" target="_blank">
                            <img src="icon-linkedin.svg" alt="icon" />
                        </a> */}
                        <a href="https://www.instagram.com/lindsayyasociados/" target="_blank">
                            <img src="icon-instagram.svg" alt="icon" />
                        </a>
                    </div>
                
                </div>
                
                <div className="sub">
                    © Todos los derechos reservados Lindsay & Asociados 2016
                </div>

            </div>

            <Video />

        </>
    
    )

}



export default Footer;
