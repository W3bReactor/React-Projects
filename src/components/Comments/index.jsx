import React from 'react';
import styles from './Comments.module.scss'
import Send from "../../utils/Send";
import Comment from "./Comment";
const Comments = () => {
    return (
        <div className={styles.inner}>
            <h4 className={styles.title}>Обсуждение</h4>
            <div className={styles.send}>
                <input className={styles.input} type="text" placeholder="Текст комментария"/>
                <Send>Отправить</Send>
            </div>
            <div className={styles.comments}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </div>
    );
};

export default Comments;