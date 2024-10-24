
import styles from './OurProjects.module.css';
import classN from 'classnames';

import Image from 'next/image';
import Of1 from '@/img/Of1.jpg';
import Of2 from '@/img/Of2.jpg';
import Of3 from '@/img/Of3.jpg';
import Btn from '@/components/ui/Btn/Btn';

function OurProjects() {
    return (
        <section className={classN(styles.wrap, 'container')}>
            <h2 className="sectionTitle">BIZNING LOYIHALAR</h2>
            <div className={styles.grid_container}>
                <div className={classN(styles.item1, styles.item)}>
                    <Image src={Of1} width={'auto'} height={'auto'} alt="of" />
                </div>
                <div className={classN(styles.item2, styles.item)}>
                    <Image src={Of2} width={'auto'} height={'auto'} alt="of" />
                </div>
                <div className={classN(styles.item3, styles.item)}>
                    <Image src={Of3} width={'auto'} height={'auto'} alt="of" />
                </div>
                <div className={classN(styles.item4, styles.item)}>
                    <Image src={Of1} width={'auto'} height={'auto'} alt="of" />
                </div>
                <div className={classN(styles.item5, styles.item)}>
                    <Image src={Of2} width={'auto'} height={'auto'} alt="of" />
                </div>
                <div className={classN(styles.item6, styles.item)}>
                    <Image src={Of3} width={'auto'} height={'auto'} alt="of" />
                </div>
                <div className={classN(styles.item7, styles.item)}>
                    <Image src={Of1} width={'auto'} height={'auto'} alt="of" />
                </div>
            </div>
                <Btn />
        </section>
    );
}

export default OurProjects;