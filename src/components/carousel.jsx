import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

import { Autoplay, Pagination} from "swiper";
import Sunny from "../assets/sunny.jpg"
export const Carousel = () =>{
    return (
        <Swiper
        //   spaceBetween={50}
        //   slidesPerView={3}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={40}
        slidesPerView={3}
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
          className = "mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col p-4 items-center bg-white border-blue-200 rounded-xl border-1 w-auto h-[400px]">
                <figure className="w-32 h-32 rounded-full mt-10">
                    <img className="object-fit rounded-full" src={Sunny} alt="" />
                </figure>
                <article className="mx-5 text-gray-600 font-black w-auto text-center">
                    <p>
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.
                    </p>
                </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      );
}