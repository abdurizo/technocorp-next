
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import styles from './AboutUs.module.css';
import classN from 'classnames';

import Play from '@/icon/play.svg';
import Of1 from '@/img/Of1.jpg';
import Of2 from '@/img/Of2.jpg';
import Of3 from '@/img/Of3.jpg';

import СircularShadow from "@/components/СircularShadow"

function AboutUs() {
  // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия модального окна
  const openModal = () => setIsModalOpen(true);
  // Функция для закрытия модального окна
  const closeModal = () => setIsModalOpen(false);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains(styles.modal)) {
      closeModal();
    }
  };

  return (
    <>
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
            <div onClick={openModal} className={styles.playIcon}>
              <span>
                <Image src={Play} width={'auto'} height={'auto'} alt="icon play" />
              </span>

            </div>
          </div>

          <p className={styles.text}>
            Markazning asosiy vazifalari:
            texnik vositalardan foydalanish, veb-saytlar yaratish, shuningdek, axborot portallari va veb-resurslarni rivojlantirish va jadallashtirish masalalarida texnik ko‘mak berish...
          </p>

        </div>
        <div className={styles.imageSection}>
          <div className={styles.top_left}> <Image src={Of1} width={'auto'} height={'auto'} alt="of" /></div>
          <div className={styles.bottom_right}><Image src={Of2} width={'auto'} height={'auto'} alt="of" /></div>
          <div className={styles.top_left}><Image src={Of3} width={'auto'} height={'auto'} alt="of" /></div>
          <div className={styles.bottom_right}><Image src={Of1} width={'auto'} height={'auto'} alt="of" /></div>
        </div>

        {isModalOpen && (
          <div className={styles.modal} onClick={handleBackgroundClick}>
            <div className={styles.modalContent}>
              <button onClick={closeModal} className={styles.closeButton}>X</button>
              <iframe
                width="860"
                height="560"
                src="https://www.youtube.com/embed/-ACo9Zh3f9k?autoplay=1"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        <СircularShadow className={styles.circular_min} />
        <СircularShadow className={styles.circular} />
      </section>

    </>

  )
}

export default AboutUs
