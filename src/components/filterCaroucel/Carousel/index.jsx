// import styles from './OtherNews.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Link from 'next/link';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Button from '../Button';


function OtherNews() {


    const news = [
        { id: '1', text: 'Barchasi' },
        { id: '1', text: 'Barchasi2' },
        { id: '1', text: 'Barchasi3' },
        { id: '1', text: 'Barchasi4' },
        { id: '1', text: 'Barchasi5' },
        { id: '2', text: 'Markaz yangiliklari' },
        { id: '3', text: 'Markaz blogi' },
        { id: '4', text: 'Korrupsiyaga qarshi kurash' },
        { id: '5', text: 'Korrupsiyaga' },
        
    ];

    return (
        <>

            <Swiper
                // cssMode={true}
                slidesPerView={4}
                // spaceBetween={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={{
                    nextEl: '.nextProg',
                    prevEl: '.prevProg',
                }}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >

                {
                    news.map((item, id) => {
                        return (
                            <SwiperSlide key={id}>
                                <Button text={item.text}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </>
    );
}

export default OtherNews;