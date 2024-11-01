import styles from './News.module.css';

import Marquee from "react-fast-marquee";
import Image from 'next/image';

import Img1 from '@/img/imgNews/im1.png';
import Img2 from '@/img/imgNews/im2.png';
import Img3 from '@/img/imgNews/im3.png';
import Img4 from '@/img/imgNews/im4.png';
import Img5 from '@/img/imgNews/im5.png';
import Img6 from '@/img/imgNews/im6.png';

function News() {
    return (
        <section className={styles.wrap}>
            <h2 className='sectionTitle'>MARKAZ YANGILIKLARI</h2>
            <Marquee
                autoFill={true}
                direction={"right"}
                pauseOnHover={true}
            >
                <div className='new_carousel'>
                    <Image
                        src={Img1}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>
                <div className='new_carousel'>
                    <Image
                        src={Img2}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>
                <div className='new_carousel'>
                    <Image
                        src={Img3}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>
                <div className='new_carousel'>
                    <Image
                        src={Img4}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>
                <div className='new_carousel'>
                    <Image
                        src={Img5}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>
                <div className='new_carousel'>
                    <Image
                        src={Img6}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>

            </Marquee>
            <Marquee
                autoFill={true}
               
                pauseOnHover={true}
            >
                <div className='new_carousel'>
                    <Image
                        src={Img1}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>
                <div className='new_carousel'>
                    <Image
                        src={Img2}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>
                <div className='new_carousel'>
                    <Image
                        src={Img3}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>
                <div className='new_carousel'>
                    <Image
                        src={Img4}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>
                <div className='new_carousel'>
                    <Image
                        src={Img5}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>
                <div className='new_carousel'>
                    <Image
                        src={Img6}
                        width={'auto'}
                        height={'auto'}
                        alt="adliya"
                        className={styles.image}
                    />
                </div>

            </Marquee>

        </section>
    );
}

export default News;