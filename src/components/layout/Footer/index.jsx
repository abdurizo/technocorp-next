import styles from './Footer.module.css';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from "next-i18next";

import Logo from '@/img/logo.svg';
import Location from '@/icon/footerIcon/location_on.svg';
import Subway from '@/icon/footerIcon/subway.svg';
import Bus from '@/icon/footerIcon/bus.svg';
import Taxi from '@/icon/footerIcon/local_taxi.svg';
import Facebook from '@/icon/footerIcon/Facebook.svg';
import Instagram from '@/icon/footerIcon/instagram.svg';
import Telegram from '@/icon/footerIcon/Telegram.svg';
import Youtube from '@/icon/footerIcon/Youtube.svg';

function Footer() {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Image src={Logo}
                    width={'auto'}
                    height={'auto'}
                    alt="icon glasses"
                    className={styles.logo}
                />
                <div className={styles.grid_wrap}>
                    <div className={styles.list}>
                        <h5 className={styles.list_title}>{t('form_address')}:</h5>
                        <ul>
                            <li className={styles.list_text}>100011, { t('form_address_text')}</li>
                            <li className={styles.df}>
                                <Image src={Location}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="icon glasses"
                                    className={styles.icon}
                                />
                                <Link href={'#!'} className={styles.green_text}>Geolokatsiya</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <h5 className={styles.list_title}>{t('transport')}:</h5>
                        <ul>
                            <li className={styles.df}>
                                <Image src={Subway}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="icon glasses"
                                    className={styles.icon}
                                />
                                <span className={styles.list_text}>{t('metro')}: { t('metro_station')}</span>
                            </li>
                            <li className={styles.df}>
                                <Image src={Bus}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="icon glasses"
                                    className={styles.icon}
                                />
                                <span className={styles.list_text}>{t('buses')}: 11, 28, 31, 78, 88, 116i</span>
                            </li>
                            <li className={styles.df}>
                                <Image src={Taxi}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="icon glasses"
                                    className={styles.icon}
                                />
                                <span className={styles.list_text}>{t('shuttle_buses')}: {t('station_Beruni')}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <div>
                            <h5 className={styles.list_title}>{t('form_Phone')}:</h5>
                            <ul>
                                <li className={styles.list_text}>+998 (55) 501-43-00</li>
                            </ul>
                        </div>
                        <div className={styles.email}>
                            <h5 className={styles.list_title}>E-mail:</h5>
                            <ul>
                                <li className={styles.list_text}>info@technocorp.uz</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.list}>
                        <h5 className={styles.list_title}>{t('social_media')}:</h5>
                        <div className={styles.social_networks}>
                            <Link href={'https://www.facebook.com/technocorpuzb'}>
                                <Image src={Facebook}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="icon glasses"
                                    className={styles.social_icon}
                                />
                            </Link>
                            <Link href={'https://www.youtube.com/@technocorpuzb'}>
                                <Image src={Youtube}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="icon glasses"
                                    className={styles.social_icon}
                                />
                            </Link>
                            <Link href={'https://t.me/technocorpuz'}>
                                <Image src={Telegram}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="icon glasses"
                                    className={styles.social_icon}
                                />
                            </Link>
                            <Link href={'https://www.instagram.com/technocorp.uz/?hl=ru'}>
                                <Image src={Instagram}
                                    width={'auto'}
                                    height={'auto'}
                                    alt="icon glasses"
                                    className={styles.social_icon}
                                />
                            </Link>

                        </div>

                    </div>
                </div>
                <div className={styles.line}></div>

                <div className={styles.copyright_notice}>
                    <div className={styles.block}>
                        <p className={styles.copyright_text}>&copy; 2023 - Sayt materiallaridan to'liq yoki qisman foydalanilganida ushbu manbani ko'rsatish majburiy</p>
                        <div>
                            <p className={styles.copyright_text}>Saytdagi barcha materiallardan quyidagi litsenziya bo‘yicha foydalanish mumkin: </p>
                            <span className={styles.copyright_text_green}>Creative Commons Attribution 4.0 International.</span>
                        </div>
                    </div>
                    <div className={styles.block}>

                    </div>

                    <div className={styles.block_end}>
                        <p className={styles.developed}> Developed by <span>TECHNOCORP</span></p>
                        <p className={styles.copyright_text}>Matnda xato topsangiz, uni tanlang va veb-sayt ma’muriyatini xabardor qilish uchun “Ctrl + Enter” tugmasini bosing</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;