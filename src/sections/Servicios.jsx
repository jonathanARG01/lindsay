import React from 'react'

// Swiper
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import Servicio from '../components/Servicio';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const servicios = [
    {
        name: 'Auditoría',
        description: 'La auditoría de estados financieros tiene como objetivo principal la emisión de una opinión, independiente, acerca de la razonabilidad con que éstos han sido preparados.',
        img: 'servicio1.jpg'
    },
    {
        name: 'Contabilidad',
        description: 'Disponer de una contabilidad oportuna y confiable es una condición mínima para facilitar el control de las operaciones. El servicio de contabilidad busca reflejar la situación económica y financiera de las Empresa.',
        img: 'servicio2.jpg'
    },
    {
        name: 'tributaria',
        description: 'La complejidad de las leyes tributarias requieren dotar a las Empresas y a sus propietarios de una planificación tributaria, que les proporcione las herramientas necesarias para el adecuado uso de las ventajas tributarias existentes.',
        img: 'servicio3.jpg'
    },
    {
        name: 'otros servicios',
        description: 'Outsourcing de Auditoria Interna. Asesoria Gerencial y Directorios. Manuales de Procedimientos. Due Diligence. Normalizacion de Activos Fijos. Asesorias internacionales.',
        img: 'servicio4.jpg'
    }
];



const Servicios = () => {
  
    return (

        <>

            <div id="servicios" className="servicios">

                <div className="container">

                    <h2>
                        <img src="simbol.svg" alt="simbol" />
                        Nuestros <span> servicios</span>
                    </h2>

                    <div className='mt-5'>
                        
                        <Swiper
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            autoplay={{
                                delay: 3000
                            }}
                            breakpoints={{
                                0: {
                                slidesPerView: 1
                                },
                                768: {
                                slidesPerView: 2
                                },
                                1024: {
                                slidesPerView: 3
                                },
                                1200: {
                                slidesPerView: 4
                                }
                            }}>
                            
                            {servicios.map( ( servicio, index ) => (

                                <SwiperSlide key={index}>
                                    <Servicio img={ servicio.img } name={ servicio.name } description={ servicio.description } />
                                </SwiperSlide>

                            ))}
                                
                        </Swiper>
                    
                    </div>

                </div>

            </div>

        </>
    
    )

}



export default Servicios;
