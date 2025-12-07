
import React from 'react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import BannerContent from '../Pages/BannerContent';

import img1 from '../assets/sl03.png'
import img2 from '../assets/slider01.png'
import img3 from '../assets/sl02.png'


const bannerData = [
    { 
        id: 1, 
        src: img1, 
        alt: "PetPaws Banner Image 1",
        title: "Save extra 5% on your first order",
        description: "Flat 15% OFF on premium cat food.",
    
    },
    { 
        id: 2, 
        src: img2, 
        alt: "PetPaws Banner Image 2",
        title: "Premium Food & Nutrition",
        description: "Discover organic, tailored nutrition plans designed for every stage of your pet's life.",
      
    },
    { 
        id: 3, 
        src: img3, 
        alt: "PetPaws Banner Image 3",
        title: "Professional Grooming",
        description: "Treat your pet to a spa day! Full grooming services for dogs and cats of all breeds.",
       
    },
];

const Slider = () => {
    return (
        <div className="mt-25 w-11/12 mx-auto">
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1200}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
               
                {bannerData.map((data) => (
                    <SwiperSlide key={data.id}>
                        <BannerContent
                            title={data.title}
                            description={data.description}
                            imageSrc={data.src}
                            imageAlt={data.alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            
        </div>
    );
};

export default Slider;