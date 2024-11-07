import Link from 'next/link';

import styles from './Btn.module.css';

function Btn() {
  return (
    <div className={styles.btn_wrap}>
      <Link href={'#!'} className={styles.btn}>Batafsil</Link>
    </div>
  )


}

export default Btn
    