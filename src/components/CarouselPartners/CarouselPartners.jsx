
import Image from 'next/image';
import Marquee from "react-fast-marquee";

import styles from "./CarouselPartners.module.css"


import AdliyaC from '@/icon/adliyaC.svg';
import EkologikC from '@/icon/EkologikC.svg';
import Ichfi_ishlarC from '@/icon/Ichfi_ishlarC.svg';
import KuchFdolatC from '@/icon/KuchFdolatC.svg';
import MadaniyatC from '@/icon/MadaniyatC.svg';
import OzarxivC from '@/icon/OzarxivC.svg';
import ToshTC from '@/icon/toshTC.svg';
import UznransgazC from '@/icon/UznransgazC.svg';
import YollC from '@/icon/yollC.svg';

function Carousel() {
   return (
      <section className="carousel_section">
         <Marquee autoFill={true}>
            <div className='carousel_wrap'>
               <Image
                  src={AdliyaC}
                  width={'auto'}
                  height={'auto'}
                  alt="adliya"
                  className={styles.image}
               />
            </div>
            <div className='carousel_wrap'>
               <Image
                  src={EkologikC}
                  width={'auto'}
                  height={'auto'}
                  alt="EkologikC"
                  className={styles.image}
               />
            </div>
            <div className='carousel_wrap'>
               <Image
                  src={Ichfi_ishlarC}
                  width={'auto'}
                  height={'auto'}
                  alt="Ichfi_ishlarC"
                  className={styles.image}
               />
            </div>
            <div className='carousel_wrap'>
               <Image
                  src={KuchFdolatC}
                  width={'auto'}
                  height={'auto'}
                  alt="adliya"
                  className={styles.image}
               />
            </div>
            <div className='carousel_wrap'>
               <Image
                  src={MadaniyatC}
                  width={'auto'}
                  height={'auto'}
                  alt="adliya"
                  className={styles.image}
               />
            </div>
            <div className='carousel_wrap'>
               <Image
                  src={OzarxivC}
                  width={'auto'}
                  height={'auto'}
                  alt="adliya"
                  className={styles.image}
               />
            </div>
            <div className='carousel_wrap'>
               <Image
                  src={ToshTC}
                  width={'auto'}
                  height={'auto'}
                  alt="adliya"
                  className={styles.image}
               />
            </div>
            <div className='carousel_wrap'>
               <Image
                  src={UznransgazC}
                  width={'auto'}
                  height={'auto'}
                  alt="adliya"
                  className={styles.image}
               />
            </div>
            <div className='carousel_wrap'>
               <Image
                  src={YollC}
                  width={'auto'}
                  height={'auto'}
                  alt="adliya"
                  className={styles.image}   
               />
            </div>
         </Marquee>
      </section>
   )
}

export default Carousel
