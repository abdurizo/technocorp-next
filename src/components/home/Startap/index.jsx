
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
                <CardForStartap imageOne={Slack} imageTwo={Slack2} />
                <CardForStartap imageOne={Layers} imageTwo={Layers2} />
                <CardForStartap imageOne={Cpu} imageTwo={Cpu2} />
            </div>
            <Btn />
        </section>
    );
}

export default Startap;