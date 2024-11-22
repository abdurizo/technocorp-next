import classN from "classnames";
import styles from "./Header.module.css";

import dynamic from 'next/dynamic';

import СircularShadow from "@/components/СircularShadow";
const Filter = dynamic(() => import('@/components/filterCaroucel/Carousel'), { ssr: false });


function Header(props) {
    return (
        <div className={classN(styles.wrap, 'container')}>

            <h2 className={classN('sectionTitle')}>YANGILIKLAR </h2>
            <Filter />
            <СircularShadow className={styles.circular} />
            <p className='background_text'>YANGILIKLAR</p>
        </div>
    );
}

export default Header;