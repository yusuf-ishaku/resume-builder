import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination} from "swiper";
import Sunny from "../assets/sunny.jpg"
export const Carousel = (props) =>{
    return (
        <Swiper
        //   spaceBetween={50}
        //   slidesPerView={3}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={40}
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
          className = "mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col p-4 items-center bg-white border-blue-200 rounded-xl border-1 w-80 md:w-full h-[450px]">
                <figure className="w-32 h-32 rounded-full mt-10">
                    <img className="object-fit rounded-full" src={props.image} alt="" />
                </figure>
                <article className="mx-5 pt-5 text-gray-500 text-md font-black w-auto text-center">
                    <p className="py-2 leading-7">
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.
                    </p>
                </article>
                <h2 className="text-blue-900 font-black text-2xl">
                    {props.testname}
                </h2>
                <h3 className="my-3 font-bold text-gray-600 text-lg">One of our clients</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="flex flex-col p-4 items-center bg-white border-blue-200 rounded-xl border-1 md:w-full w-80 h-[450px]">
                <figure className="w-32 h-32 rounded-full mt-10">
                    <img className="object-fit rounded-full" src={props.image2} alt="" />
                </figure>
                <article className="mx-5 pt-5 text-gray-500 text-md font-black w-auto text-center">
                    <p className="py-2 leading-7">
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.
                    </p>
                </article>
                <h2 className="text-blue-900 font-black text-2xl">
                    {props.testname2}
                </h2>
                <h3 className="my-3 font-bold text-gray-600 text-lg">One of our clients</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col p-4 items-center bg-white border-blue-200 rounded-xl border-1 md:w-full w-80 h-[450px]">
                <figure className="w-32 h-32 rounded-full mt-10">
                    <img className="object-fit rounded-full" src={props.image3} alt="" />
                </figure>
                <article className="mx-5 pt-5 text-gray-500 text-md font-black w-auto text-center">
                    <p className="py-2 leading-7">
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.
                    </p>
                </article>
                <h2 className="text-blue-900 font-black text-2xl">
                    {props.testname3}
                </h2>
                <h3 className="my-3 font-bold text-gray-600 text-lg">One of our clients</h3>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
          <div className="flex flex-col p-4 items-center bg-white border-blue-200 rounded-xl border-1 w-auto h-[450px]">
                <figure className="w-32 h-32 rounded-full mt-10">
                    <img className="object-fit rounded-full" src={props.image} alt="" />
                </figure>
                <article className="mx-5 pt-5 text-gray-500 text-md font-black w-auto text-center">
                    <p className="py-2 leading-7">
                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.
                    </p>
                </article>
                <h2 className="text-blue-900 font-black text-2xl">
                    {props.testname}
                </h2>
                <h3 className="my-3 font-bold text-gray-600 text-lg">One of our clients</h3>
            </div>
          </SwiperSlide> */}
        </Swiper>
      );
}