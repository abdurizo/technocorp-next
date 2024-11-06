
import styles from './Startap.module.css';
import classN from 'classnames';

import Btn from '@/components/ui/Btn/Btn';
import CardForStartap from '../../CardForStartap';
import Slack from '@/icon/startapIcon/slack.svg';
import Slack2 from '@/icon/startapIcon/slack2.svg';
import Layers from '@/icon/startapIcon/layers.svg';
import Layers2 from '@/icon/startapIcon/layers2.svg';
import Cpu from '@/icon/startapIcon/cpu.svg';
import Cpu2 from '@/icon/startapIcon/cpu2.svg';

function Startap() {
    return (
        <section className='container'>
            <h2 className="sectionTitle">Startap loyihalar</h2>
            <div className={styles.grid_content}>
                <CardForStartap
                    imageOne={Slack}
                    imageTwo={Slack2}
                    text={' PRIVATE SCHOOLASSISTANT'}
                    textTwo={'Oʼqishga kirish uchun onlayn ariza berish, shaxsiy kabinet ochish, xususiy taʼlim muassasalari boʼyicha umumiy maʼlumot berish.'}
                />
                <CardForStartap
                    imageOne={Layers}
                    imageTwo={Layers2}
                    text={'E-archive'}
                    textTwo={'Аrxiv hujjatlarini raqamlashtirish, saqlash va foydalanish'}
                />
                <CardForStartap
                    imageOne={Cpu}
                    imageTwo={Cpu2}
                    text={'SMART GADGET'}
                    textTwo={'Muzey tizimini avtomatlashtirish hamda inson omilini kamaytirib vaqtni tejashga yordam beradi.'}
                />
            </div>
            <Btn />
        </section>
    );
}

export default Startap;