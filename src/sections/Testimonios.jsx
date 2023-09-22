import React, { useRef, useState } from 'react'
import Testimonio from '../components/Testimonio';

// Swiper
import { Navigation, A11y, Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



const testimonios = [
    {
        name: 'Jonathan Rojas',
        cargo: 'Desarrollador Frontend',
        description: '"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"',
        img: 'persona1.png',
        video: 'https://www.youtube.com/embed/LXb3EKWsInQ?si=QE--jt9N1LLm7rmG'
    },
    {
        name: 'Alexis Sanchez',
        cargo: 'Futbolista',
        description: '"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"',
        img: 'persona2.png',
        video: 'https://www.youtube.com/embed/LXb3EKWsInQ?si=QE--jt9N1LLm7rmG'
    },
    {
        name: 'Arturo Vidal',
        cargo: 'cargo / sector negocio',
        description: '"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"',
        img: 'persona3.png',
        video: 'https://www.youtube.com/embed/LXb3EKWsInQ?si=QE--jt9N1LLm7rmG'
    }
];



const Testimonios = () => {
   
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        
        <>

            <div id="testimonios" className="testimonios container">

                <h2>
                    <img src="comillas1.svg" alt="comillas" />
                    <span>Testimonios</span>
                    <img src="comillas2.svg" alt="comillas" />
                </h2>
                <p>Descubre lo que nuestros clientes dicen <br/> sobre nosotros y nuestros servicios</p>

                <div className="row">

                    <div className="col-md-4 d-none d-md-block">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Navigation, A11y, Autoplay, FreeMode, Thumbs]}
                            autoplay={{
                                delay: 3000
                            }}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            className="mySwiper2"
                            loop={true}>
                            
                            {testimonios.map( ( testimonio, index ) => (

                                <SwiperSlide key={index}>
                                    <div className='text'>
                                        <p className='description'> { testimonio.description } </p>
                                        <p className='name'>  { testimonio.name }  </p>
                                        <p className='cargo'> { testimonio.cargo } </p>
                                    </div>
                                </SwiperSlide>

                            ))}

                        </Swiper>
                    </div>

                    <div className="col-md-8">
                        <Swiper
                            modules={[Navigation, A11y, Autoplay, FreeMode, Thumbs]}
                            autoplay={{
                                delay: 3000
                            }}
                            spaceBetween={10}
                            slidesPerView={3}
                            navigation
                            onSwiper={setThumbsSwiper}
                            className="mySwiper"
                            breakpoints={{
                                0: {
                                  slidesPerView: 1
                                },
                                768: {
                                  slidesPerView: 2
                                },
                                1024: {
                                  slidesPerView: 3
                                }
                            }}
                            loop={true}>
                            
                            {testimonios.map( ( testimonio, index ) => (

                                <SwiperSlide key={index}>
                                    <Testimonio img={ testimonio.img } video={ testimonio.video } />
                                    <div className='d-block d-md-none text'>
                                        <p className='description'> { testimonio.description } </p>
                                        <p className='name'>  { testimonio.name }  </p>
                                        <p className='cargo'> { testimonio.cargo } </p>
                                    </div>
                                </SwiperSlide>

                            ))}

                        </Swiper>
                    </div>

                </div>


            </div>

        </>
    
    )

}



export default Testimonios
