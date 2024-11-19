import styles from './OtherNews.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Link from 'next/link';

import Btn from '@/components/ui/Btn/Btn';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import CardNews from '../../CardNew';
import Img from '@/img/imgNews/im1.png';

function OtherNews() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Boshqa yangiliklar</h2>

            <Swiper
                // cssMode={true}
                slidesPerView={2}
                spaceBetween={24}
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
                <SwiperSlide>
                    <CardNews image={Img} />
                </SwiperSlide>

                <SwiperSlide>
                    <CardNews image={Img} />
                </SwiperSlide>

                <SwiperSlide>
                    <CardNews image={Img} />
                </SwiperSlide>

                <SwiperSlide>
                    <CardNews image={Img} />
                </SwiperSlide>


                <SwiperSlide>
                    <CardNews image={Img} />
                </SwiperSlide>


                <SwiperSlide>
                    <CardNews image={Img} />
                </SwiperSlide>

            </Swiper>

            <div className={styles.button_wrap}>
                <Btn href="/news" text="Barchasi" />
            </div>
        </section>
    );
}

export default OtherNews;