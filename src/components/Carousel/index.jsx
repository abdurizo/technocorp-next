// import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useTranslation } from "next-i18next";

import ArrowLeftCarousel from '@/icon/ArrowLeftCarousel.svg';
import ArrowRightCarousel from '@/icon/ArrowRightCarousel.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import 'swiper/css/pagination';
import { Navigation, Pagination, } from 'swiper/modules';

export default function App() {
    const { t } = useTranslation("common");
    return (
        <>
            <div className='container_swiper'>
                <p className='swiper_title'>{ t('title_carousel')}</p>
                <div className='swiper_wrap'>
                    <Swiper
                        cssMode={true}
                        navigation={{
                            nextEl: '.next',
                            prevEl: '.prev',
                        }}
                        pagination={false}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination,]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <iframe
                                width="auto"
                                height="auto"
                                src="https://www.youtube.com/embed/-ACo9Zh3f9k?start=7"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                width="auto"
                                height="auto"
                                src="https://www.youtube.com/embed/-ACo9Zh3f9k?start=7"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            <iframe
                                width="auto"
                                height="auto"
                                src="https://www.youtube.com/embed/-ACo9Zh3f9k?start=7"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </SwiperSlide>

                    </Swiper>
                    <div className='prev arrow'>
                        <Image
                            src={ArrowLeftCarousel}
                            width={500}
                            height={500}
                            alt="Development"
                        />
                    </div>
                    <div className='next arrow'>
                        <Image
                            src={ArrowRightCarousel}
                            width={500}
                            height={500}
                            alt="Development"
                        />

                    </div>
                </div>

            </div>

        </>
    );
}
