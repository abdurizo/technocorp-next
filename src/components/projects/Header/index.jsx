import classN from "classnames";
import styles from "./Header.module.css";

import dynamic from 'next/dynamic';

import СircularShadow from "@/components/СircularShadow";
const Filter = dynamic(() => import('@/components/filterCaroucel/Carousel'), { ssr: false });


function Header(props) {
    return (
        <header className={classN(styles.wrap,)}>

            <h2 className={classN('sectionTitle')}>LOYIHALAR </h2>
            <Filter />
            <СircularShadow className={styles.circular} />
            <p className='background_text'>LOYIHALAR</p>
        </header>
    );
}

export default Header;