import React from 'react'

// Swiper
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Banner from '../components/Banner';
import Rrss from '../components/Rrss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const banners = [
    {
        title: 'Más de 25 años de experiencia en consultorías y auditorías',
        description: 'Te brindamos conocimiento y respaldo.',
        button: '¡Confía en nosotros!',
        img: 'banner1.jpg'
    },
    {
        title: 'Somos miembro independiente de Morison KSI',
        description: 'Expertos en negocios a nivel mundial.',
        button: 'Descubre más aquí',
        img: 'banner2.jpg'
    },
    {
        title: 'Crecimiento acelerado y sostenido',
        description: 'Únete a nuestra red de éxito',
        button: '¡Contáctanos hoy mismo!',
        img: 'banner3.jpg'
    }
];



const Banners = () => {

    return (
        
        <>

            <div className="banners">

                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    autoplay={{
                        delay: 3000
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}>
                    
                    {banners.map( ( banner, index ) => (

                        <SwiperSlide key={index}>
                            <Banner img={ banner.img } title={ banner.title } description={ banner.description } button={ banner.button } />
                        </SwiperSlide>

                    ))}

                </Swiper>

                <Rrss />
                
            </div>

        </>
    
    )

}



export default Banners
