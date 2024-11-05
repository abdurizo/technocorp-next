import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import ArrowLeftCarousel from '@/icon/ArrowLeftCarousel.svg';
import ArrowRightCarousel from '@/icon/ArrowRightCarousel.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
    
    return (
        <>
            <div className='swiper_container'>
                <Swiper
                    cssMode={true}
                    navigation={{
                        nextEl: '.prev',
                        prevEl: '.next',
                    }}
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <iframe
                            width="100%"
                            height="700"
                            src="https://www.youtube.com/embed/-ACo9Zh3f9k?start=7"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe
                            width="100%"
                            height="700"
                            src="https://www.youtube.com/embed/-ACo9Zh3f9k?start=7"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe
                            width="100%"
                            height="700"
                            src="https://www.youtube.com/embed/-ACo9Zh3f9k?start=7"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </SwiperSlide>

                </Swiper>
                <div className='next arrow'>
                    <Image
                        src={ArrowLeftCarousel}
                        width={500}
                        height={500}
                        alt="Development"
                        className='next arrow'
                    />
                </div>
                <div className='prev arrow'>
                    <Image
                        src={ArrowRightCarousel}
                        width={500}
                        height={500}
                        alt="Development"
                        className='prev arrow'
                    />

                </div>
            </div>

        </>
    );
}
