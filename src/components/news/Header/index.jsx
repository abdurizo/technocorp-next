import classN from "classnames";
import styles from "./Header.module.css";

import СircularShadow from "@/components/СircularShadow";

function Header(props) {
    return (
        <header className={classN(styles.wrap, 'container')}>
            <h2 className={classN('sectionTitle')}>YANGILIKLAR </h2>
            <СircularShadow className={styles.circular} />
            <p className='background_text'>YANGILIKLAR</p>
        </header>
    );
}

export default Header;