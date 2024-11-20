import styles from './CardNew.module.css';

import Image from 'next/image';
import Link from 'next/link';

import Eye from '@/icon/eye.svg';
import RightGreen from '@/icon/right_green.svg';

function CardProgrammer({ image, href, profession,id }) {

    return (
        <>
             {/* {
            news.map((item) =>

                <div className={styles.card}>
                    <div className={styles.image_wrap}>
                        <Image
                            src={image}
                            width={'auto'}
                            height={'auto   '}
                            alt="Development"
                            className={styles.image}
                        />
                    </div>
                    <h3 className={styles.title}>7-may – O‘zbekiston Respublikasi axborot-kommunikatsiya texnologiyalari...</h3>

                    <div className={styles.content}>
                        <p className={styles.text}>“Markaz joylashgan bino hududida kuchli yer qimirlashi sababli xonadagi elektr rozetkasi ichidagi elektr simda qisqa tutashuv natijasida yong‘in sodir bo‘lganda xodimlarning harakati”…</p>

                        <div className={styles.footer}>

                            <div className={styles.date_wrap}>
                                <p className={styles.date_text}>07-May 2024-yil</p>
                                <div className={styles.date_text}>
                                    <div className={styles.icon_eye}>
                                        <Image
                                            src={Eye}
                                            width={'auto'}
                                            height={'auto '}
                                            alt="Development"
                                            className={styles.icon}
                                        />
                                        <span>584</span>
                                    </div>
                                </div>
                            </div>

                            <Link href={`/news/${formatTitleToURL(item.title)}`} className={styles.button}>
                                <span>Batafsil</span>
                                <Image
                                    src={RightGreen}
                                    width={'auto'}
                                    height={'auto '}
                                    alt="Development"
                                    className={styles.button_icon}
                                />
                            </Link>

                        </div>
                    </div>

                </div>


            )
            }
             */}



            <div className={styles.card}>
                    <div className={styles.image_wrap}>
                        <Image
                            src={image}
                            width={'auto'}
                            height={'auto   '}
                            alt="Development"
                            className={styles.image}
                        />
                    </div>
                    <h3 className={styles.title}>7-may – O‘zbekiston Respublikasi axborot-kommunikatsiya texnologiyalari...</h3>

                    <div className={styles.content}>
                        <p className={styles.text}>“Markaz joylashgan bino hududida kuchli yer qimirlashi sababli xonadagi elektr rozetkasi ichidagi elektr simda qisqa tutashuv natijasida yong‘in sodir bo‘lganda xodimlarning harakati”…</p>

                        <div className={styles.footer}>

                            <div className={styles.date_wrap}>
                                <p className={styles.date_text}>07-May 2024-yil</p>
                                <div className={styles.date_text}>
                                    <div className={styles.icon_eye}>
                                        <Image
                                            src={Eye}
                                            width={'auto'}
                                            height={'auto '}
                                            alt="Development"
                                            className={styles.icon}
                                        />
                                        <span>584</span>
                                    </div>
                                </div>
                            </div>

                        <Link
                            href={`/news/${id}`}
                            query={`name=${href}`}
                            className={styles.button}>
                                <span>Batafsil</span>
                                <Image
                                    src={RightGreen}
                                    width={'auto'}
                                    height={'auto '}
                                    alt="Development"
                                    className={styles.button_icon}
                                />
                            </Link>

                        </div>
                    </div>

                </div>


        </>

       


    );
}

export default CardProgrammer;