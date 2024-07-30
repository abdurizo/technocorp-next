import { useEffect, useState } from "react";
import Image from 'next/image';
import Marquee from "react-fast-marquee";

import Adliya from '@/img/adliya.png';
import Ekologik from '@/img/ekologik.png';
import Ichfi_ishlar from '@/img/ichfi_ishlar.png';
import KuchFdolat from '@/img/kuchFdolat.png';
import Madaniyat from '@/img/madaniyat.png';
import Ozarxiv from '@/img/ozarxiv.png';
import ToshT from '@/img/toshT.png';
import Uznransgaz from '@/img/uznransgaz.png';
import Yoll from '@/img/yoll.png';


function Carousel() {
  return (
      <section className="carousel_section">
          <Marquee autoFill={true}>
              <div className='carousel_wrap'>
                 <Image
                      src={Adliya}
                      width={'auto'}
                      height={'auto'}
                      alt="adliya"
                 />
              </div>
              <div className='carousel_wrap'>
                 <Image
                      src={Ekologik}
                      width={'auto'}
                      height={'auto'}
                      alt="adliya"
                 />
              </div>
              <div className='carousel_wrap'>
                 <Image
                      src={Ichfi_ishlar}
                      width={'auto'}
                      height={'auto'}
                      alt="adliya"
                 />
              </div>
              <div className='carousel_wrap'>
                 <Image
                      src={KuchFdolat}
                      width={'auto'}
                      height={'auto'}
                      alt="adliya"
                 />
              </div>
              <div className='carousel_wrap'>
                 <Image
                      src={Madaniyat}
                      width={'auto'}
                      height={'auto'}
                      alt="adliya"
                 />
              </div>
              <div className='carousel_wrap'>
                 <Image
                      src={Ozarxiv}
                      width={'auto'}
                      height={'auto'}
                      alt="adliya"
                 />
              </div>
              <div className='carousel_wrap'>
                 <Image
                      src={ToshT}
                      width={'auto'}
                      height={'auto'}
                      alt="adliya"
                 />
              </div>
              <div className='carousel_wrap'>
                 <Image
                      src={Uznransgaz}
                      width={'auto'}
                      height={'auto'}
                      alt="adliya"
                 />
              </div>
              <div className='carousel_wrap'>
                 <Image
                      src={Yoll}
                      width={'auto'}
                      height={'auto'}
                      alt="adliya"
                 />
              </div>
          </Marquee>
      </section>
  )
}

export default Carousel
