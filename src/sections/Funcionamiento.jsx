import React from 'react'

// Swiper
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import Funcion from '../components/Funcion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const funciones = [
    {
        number: '01',
        name: 'Escuchamos tus necesidades',
        description: 'Entendemos lo importante que eres para nosotros. Comenzamos escuchándote atentamente para comprender tus objetivos y desafíos únicos.',
        color: '#002E5D'
    },
    {
        number: '02',
        name: 'Asesoramiento personalizado',
        description: 'Nuestros expertos te brindarán asesoramiento personalizado y adaptado a tus necesidades específicas. Queremos asegurarnos de que obtengas el máximo valor de nuestra colaboración.',
        color: '#5CA6CC'
    },
    {
        number: '03',
        name: 'Propuesta a medida',
        description: 'Crearemos una propuesta a medida, diseñada específicamente para resolver tus desafíos y mejorar tu situación.',
        color: '#FFA54A'
    },
    {
        number: '04',
        name: 'Implementación y seguimiento',
        description: 'Implementamos nuestras soluciones con eficacia y realizamos un seguimiento constante para garantizar tu satisfacción.',
        color: '#14A38B'
    },
    {
        number: '05',
        name: 'Resultados sobresalientes',
        description: 'Nuestro objetivo es tu éxito. Nos enorgullece ser parte de tus logros y estamos comprometidos contigo a largo plazo.',
        color: '#FF7171'
    }
];


const Funcionamiento = () => {

    return (
  
        <>
        
            <div id='funcionamiento' className="funcionamiento container my-5">

                <h2>
                    <img src="simbol.svg" alt="simbol" />
                    ¿Cómo <span> funciona?</span>
                </h2>

                <div className='mt-5'>
                    
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={10}
                        autoplay={{
                            delay: 3000
                        }}
                        navigation
                        pagination={{ clickable: true }}
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
                            },
                            1300: {
                                slidesPerView: 5
                            }
                        }}>
                        
                        {funciones.map( ( funcion, index ) => (

                            <SwiperSlide key={index}>
                                <Funcion number={ funcion.number } name={ funcion.name } description={ funcion.description } color={ funcion.color } />
                            </SwiperSlide>

                        ))}
                            
                    </Swiper>
                
                </div>

            </div>

            <div className="contacto container">
                <h2><span>¡Comienza a mejorar ahora!</span></h2>
                <p>Contáctanos para descubrir cómo podemos ayudarte en tus metas.</p>
                <button>¡Contáctanos hoy mismo!</button>
            </div>

        </>
    
    )

}



export default Funcionamiento
