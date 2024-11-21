import styles from './Header.module.css';
import classN from 'classnames';

import СircularShadow from "@/components/СircularShadow";
import Card from '../../CardForServis';


const servisCard = [
    {
        id: '1',
        href:'Texnik hujjat',
        gif: "/gif/Gif1.gif",
        image: "/gif/gif1.svg",
        title: 'Texnik hujjat ishlab chiqish',
        
        href:'Texnik hujjat',
    },

    {
        id:'2',
        gif: "/gif/Gif1.gif",
        image: "/gif/gif2.svg",
        title: 'vEB DASTURLASH',
        
    },
    {
        id:'3',
        gif: "/gif/Gif3.gif",
        image: "/gif/gif3.svg",
        title: 'DASTURIY APPARAT QURILMALARINI DASTURLASH',
        
    },
    {
        id:'4',
        gif: "/gif/Gif4.gif",
        image: "/gif/gif4.svg",
        title: 'VR VA AR TEXNOLOGIYALARI 360 TUR',
        
    },
    {
        id:'5',
        gif: "/gif/Gif5.gif",
        image: "/gif/gif5.svg",
        title: 'mOBIL ILOVA LAR',
        
    },
    {
        id:'6',
        gif: "/gif/Gif6.gif",
        image: "/gif/gif6.svg",
        title: 'AXBOROT XAVFSIZLIGINI TA’MINLASH',
        
    },
    {
        id:'7',
        gif: "/gif/Gif7.gif",
        image: "/gif/gif7.svg",
        title: 'AKT VA AX AUDIT',
        
    }
]


function Header() {
    return (
        <header className={classN(styles.wrap, 'container')}>
            <h2 className={classN(styles.title, 'sectionTitle')}>XIZMATLAR</h2>

            <СircularShadow className={styles.circular_min} />
            <СircularShadow className={styles.circular} />
            <p className='background_text'>XIZMATLAR</p>
        </header>
    );
}

export default Header;