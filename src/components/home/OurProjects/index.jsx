
import styles from './OurProjects.module.css';
import classN from 'classnames';

import Image from 'next/image';
import Aloqatarixi from '@/img/imgProject/aloqatarixi.png';
import Qustut from '@/img/imgProject/qustut.png';
import MilliTiklanish from '@/img/imgProject/milliTiklanish.png';
import Oʼzbrespvаzirlаr from '@/img/imgProject/OʼZBRESPVАZIRLАR.jpeg';
import Uzkomnazor from '@/img/imgProject/uzkomnazor.jpeg';
import Giologiya from '@/img/imgProject/giologiya.webp';
import KuchFdolat from '@/img/kuchFdolat.png';
import Btn from '@/components/ui/Btn/Btn';

function OurProjects() {
    return (
        <section className={classN(styles.wrap, 'container')}>
            <h2 className="sectionTitle">BIZNING LOYIHALAR</h2>
            <div className={styles.grid_container}>
                <div className={classN(styles.item1, styles.item)}>
                    <div className={styles.item_back}>
                        <div>
                            <Image src={KuchFdolat} width={'auto'} height={'auto'} alt="KuchFdolat" />
                        </div>

                        <p>Milliy tiklanish demokratik partiyasi</p>
                    </div>

                    <Image className={styles.image} src={Aloqatarixi} width={'auto'} height={'auto'} alt="of" />
                </div>

                <div className={classN(styles.item2, styles.item)}>
                    <div className={styles.item_back}>
                        <div>
                            <Image src={KuchFdolat} width={'auto'} height={'auto'} alt="KuchFdolat" />
                        </div>

                        <p>Milliy tiklanish demokratik partiyasi</p>
                    </div>
                    <Image className={styles.image} src={Oʼzbrespvаzirlаr} width={'auto'} height={'auto'} alt="of" />
                </div>

                <div className={classN(styles.item3, styles.item)}>
                    <div className={styles.item_back}>
                        <div>
                            <Image src={KuchFdolat} width={'auto'} height={'auto'} alt="KuchFdolat" />
                        </div>

                        <p>Milliy tiklanish demokratik partiyasi</p>
                    </div>
                    <Image className={styles.image} src={Qustut} width={'auto'} height={'auto'} alt="of" />
                </div>

                <div className={classN(styles.item4, styles.item)}>
                    <div className={styles.item_back}>
                        <div>
                            <Image src={KuchFdolat} width={'auto'} height={'auto'} alt="KuchFdolat" />
                        </div>

                        <p>Milliy tiklanish demokratik partiyasi</p>
                    </div>
                    <Image className={styles.image} src={Uzkomnazor} width={'auto'} height={'auto'} alt="of" />
                </div>

                <div className={classN(styles.item5, styles.item)}>
                    <div className={styles.item_back}>
                        <div>
                            <Image src={KuchFdolat} width={'auto'} height={'auto'} alt="KuchFdolat" />
                        </div>

                        <p>Milliy tiklanish demokratik partiyasi</p>
                    </div>
                    <Image className={styles.image} src={Giologiya} width={'auto'} height={'auto'} alt="of" />
                </div>

                <div className={classN(styles.item6, styles.item)}>
                    <div className={styles.item_back}>
                        <div>
                            <Image src={KuchFdolat} width={'auto'} height={'auto'} alt="KuchFdolat" />
                        </div>

                        <p>Milliy tiklanish demokratik partiyasi</p>
                    </div>
                    <Image className={styles.image} src={MilliTiklanish} width={'auto'} height={'auto'} alt="of" />
                </div>

                <div className={classN(styles.item7, styles.item)}>
                    <div className={styles.item_back}>
                        <div>
                            <Image src={KuchFdolat} width={'auto'} height={'auto'} alt="KuchFdolat" />
                        </div>

                        <p>Milliy tiklanish demokratik partiyasi</p>
                    </div>
                    <Image className={styles.image} src={Oʼzbrespvаzirlаr} width={'auto'} height={'auto'} alt="of" />
                </div>
            </div>
            <Btn />
        </section>
    );
}

export default OurProjects;