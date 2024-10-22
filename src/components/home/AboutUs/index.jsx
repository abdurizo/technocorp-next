
import Image from 'next/image';
import Link from 'next/link';

import styles from './AboutUs.module.css';
import classN from 'classnames';

import Play from '@/icon/play.svg';
import Of1 from '@/img/Of1.jpg';
import Of2 from '@/img/Of2.jpg';
import Of3 from '@/img/Of3.jpg';

function AboutUs() {
  return (
    <section className={classN(styles.wrap, 'container')}>
      <div className={styles.textSection}>
        <h2 className={classN(styles.title, 'sectionTitle')}>BIZ HAQIMIZDA</h2>
        <p className={styles.text}>
          "Axborot texnologiyalari va axborot resurslarini rivojlantirish markazi" MCHJ
          O‘zbekiston Respublikasi Prezidentining 2019-yil 14-sentabrdagi
          "Axborot texnologiyalari va kommunikatsiyalarning yangi avlodini yaratish
          orqali ulardan foydalanish imkoniyatlarini yanada kengaytirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida"
          PQ-4452-son qaroriga muvofiq tashkil etilgan.
        </p>

        <div className={styles.link}>
          <span className={styles.linkText}>BATAFSIL</span>
          <Link href={'https://www.youtube.com/watch?v=-ACo9Zh3f9k&t=7s'}
            className={styles.playIcon}>
              <span>
                <Image src={Play} width={'auto'} height={'auto'} alt="icon play" />
              </span>
          </Link>
        </div>

          <p className={styles.text}>
            "Axborot texnologiyalari va axborot resurslarini rivojlantirish markazi" MCHJ
            O‘zbekiston Respublikasi Prezidentining 2019-yil 14-sentabrdagi
            "Axborot texnologiyalari va kommunikatsiyalarning yangi avlodini yaratish
            orqali ulardan foydalanish imkoniyatlarini yanada kengaytirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida"
            PQ-4452-son qaroriga muvofiq tashkil etilgan.
          </p>
        
      </div>
      <div className={styles.imageSection}>
        <div className={styles.top_left}> <Image src={Of1} width={'auto'} height={'auto'} alt="of" /></div>
        <div className={styles.bottom_right}><Image src={Of2} width={'auto'} height={'auto'} alt="of" /></div>
        <div className={styles.top_left}><Image src={Of3} width={'auto'} height={'auto'} alt="of" /></div>
        <div className={styles.bottom_right}><Image src={Of1} width={'auto'} height={'auto'} alt="of" /></div> 
      </div>
    </section>
  )
}

export default AboutUs
