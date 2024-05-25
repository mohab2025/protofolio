"use client";
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function Section3() {
  return (
    <section className="w-full flex-center flex-col py-4 ">
    <h1 className="head_text mb-40">Parteners </h1>
    <Swiper
    className='slides'
    // install Swiper modules
    modules={[Navigation, Pagination, A11y,Autoplay]}

    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    loop={true} // Set to true for infinite scroll
    autoplay={{
      delay: 1000,
      disableOnInteraction: true, // Pause autoplay when user interacts with the slide
    }}
  >
    <SwiperSlide> <img className="card_image" src="../assets/images/Content-Creater.jpg" /></SwiperSlide>
    <SwiperSlide> <img className="card_image" src="../assets/images/Content-Creater.jpg" /></SwiperSlide>
    <SwiperSlide> <img className="card_image" src="../assets/images/Content-Creater.jpg" /></SwiperSlide>
    <SwiperSlide> <img className="card_image" src="../assets/images/Content-Creater.jpg" /></SwiperSlide>
    <SwiperSlide> <img className="card_image" src="../assets/images/Content-Creater.jpg" /></SwiperSlide>
    <SwiperSlide> <img className="card_image" src="../assets/images/Content-Creater.jpg" /></SwiperSlide>   
    
  </Swiper>
  </section>
  );
}

export default Section3;
