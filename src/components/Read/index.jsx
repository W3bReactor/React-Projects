import React from 'react';
import styles from "./Read.module.scss";
import ReadItem from "./ReadItem";

const Read = () => {
    return (
        <div className={styles.read}>
            <h2 className={styles.readTitle}>Интересно почитать</h2>
            <div className={styles.readWrapper}>
                <ReadItem/>
                <ReadItem/>
                <ReadItem/>
                <ReadItem/>
            </div>
        </div>
    );
};

export default Read;