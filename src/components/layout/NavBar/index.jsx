import styles from './NavBar.module.css';

import Image from 'next/image';
import { useState } from "react";
import { useTranslation } from 'next-i18next'; 

import Language from '@/components/Language';
import Logo from '@/img/logo.svg';
import PhoneIcon from '@/icon/phone.svg';
import SearchIcon from '@/icon/search.svg';
import GlobeEarthIcon from '@/icon/globe-earth.svg';
import SiteView from '@/components/SiteView/index';

function NavBar() {
  const { i18n, t } = useTranslation();
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState(false);
  const handelAddClass = () => {
    setToggle(!toggle)
  };
  const handelAddClassSearch = (e) => {
    setSearch(!search)
  };

  return (
    <nav className={styles.logo}>
      <div >
        <Image src={Logo}
          width={'auto'}
          height={'auto'}
          alt="icon glasses"
        />
      </div>
      <ul className={styles.nav_list}>
        <li>{t('about')}</li>
        <li>Xizmatlar</li>
        <li>Loyihalar</li>
        <li>Yangiliklar</li>
        <li>Bog‘lanish</li>
      </ul>

      <div className={styles.nav_icon}>
        <SiteView />

        <div className={`${styles.icon_animation} check`} onClick={handelAddClass}>
          <div className={`${styles.number} ${toggle ? styles.d_toggle : ''} `}>+998 (55) 501-43-00</div>
          <Image src={PhoneIcon}
            width={'auto'}
            height={'auto'}
            alt="icon glasses"
          />
        </div>
        <div className={styles.icon_animation} >
          <input type="text" className={`${styles.search} ${search ? styles.search_active : ''} `} placeholder='sea rch'/>
          <Image src={SearchIcon}
            width={'auto'}
            height={'auto'}
            alt="icon glasses"
            onClick={handelAddClassSearch}
          />
        </div>

          <Language />

      </div>
    </nav>
  )
}

export default NavBar
