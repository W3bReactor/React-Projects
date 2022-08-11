import React from 'react';
import styles from './Send.module.scss'
const Send = ({children}) => {
    return (
        <button className={styles.btn}>{children}</button>
    );
};

export default Send;