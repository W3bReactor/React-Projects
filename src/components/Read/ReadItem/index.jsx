import React from 'react';
import styles from "./ReadItem.module.scss";

const ReadItem = () => {
    return (
        <>
            <a href="#" className={styles.readItem}>
                <b className={styles.readName}>Как я сходил на FrontEnd Conf 2021</b>
                <time className={styles.readTime}>21.06.2020</time>
            </a>

        </>
    );
};

export default ReadItem;