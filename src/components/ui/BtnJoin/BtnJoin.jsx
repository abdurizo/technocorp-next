import Link from 'next/link';

import stylesN from 'classnames';
import styles from './BtnJoin.module.css';

function BtnJoin() {
  return (
    <Link href="#!" className={stylesN(styles.join, styles['btn-warning'])}>Join today</Link>
  )
}

export default BtnJoin
