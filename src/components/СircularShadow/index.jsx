import styles from './СircularShadowBig.module.css';
import classN from 'classnames';

function СircularShadow({className}) {
    return (
        <div className={ classN(styles.circular, className)}>
            
        </div>
    );
}

export default СircularShadow;