import React from 'react';
import styles from './Textarea.module.scss'
const Textarea = () => {
    return (
        <div className={styles.inner}>
            <textarea className={styles.textarea}/>
            <button className={styles.sendBtn}></button>
        </div>
    );
};

export default Textarea;