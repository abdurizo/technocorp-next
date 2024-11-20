import Link from 'next/link';

import styles from './Btn.module.css';


function Btn({ href, text }) {
  if (!href) {
    console.error('Ошибка: href не передан в компонент Btn.');
    return null; // Не рендерить компонент, если href отсутствует
  }

  return (
    <div className={styles.btn_wrap}>
      <Link href={href} className={styles.btn}>{ text}</Link>
    </div>
  )


}

export default Btn
    