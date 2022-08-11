import React from 'react';
import styles from './Comment.module.scss'
import {LazyLoadImage} from "react-lazy-load-image-component";
import avatar from '../../../assets/images/avator-not-logged.png'

const Comment = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.top}>
                <LazyLoadImage src={avatar} height={30} width={30} effect="blur" alt="avatar"/>
                <div className={styles.info}>
                    <span className={styles.name}>Дмитрий Валак</span>
                    <time className={styles.time}>1 неделю назад</time>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.comment}>Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu
                    egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas
                    ornare vel volutpat.</p>
                <a className={styles.reply} href="#">ответить</a>
            </div>
        </div>
    );
};

export default Comment;