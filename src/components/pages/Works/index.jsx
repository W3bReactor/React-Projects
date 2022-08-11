import React, {useEffect} from 'react';
import styles from './Works.module.scss'
import Work from "./Work";
const Works = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <h1 className={styles.title}>Мои работы</h1>
            <Work/>
            <Work/>
            <Work/>
            <Work/>
        </div>
    );
};

export default Works;