import React, {FC} from 'react';
import styles from './Comment.module.scss'
import {LazyLoadImage} from "react-lazy-load-image-component";
import avatar from '../../../assets/images/avator-not-logged.png'
import {useSelector} from "react-redux";
import {commentItem} from "../../../store/slices/commentSlice";

interface CommentProps {
    comment: commentItem
    onClickReply: (name: string) => void
}

const Comment: FC<CommentProps> = ({comment, onClickReply}) => {
    return (
        <div className={styles.inner}>
            <div className={styles.top}>
                <LazyLoadImage className={styles.avatar} src={comment?.avatar ? comment.avatar : avatar} height={30} width={30} effect="blur" alt="avatar"/>
                <div className={styles.info}>
                    <span className={styles.name}>{comment?.author ? comment.author : 'Аноним'}</span>
                    <time className={styles.time}>{comment?.layoutDate}</time>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.comment}>{comment?.text}</p>
                <button onClick={() => onClickReply(comment.author ? comment.author : 'Аноним')} className={styles.reply}>ответить</button>
            </div>
        </div>
    );
};

export default Comment;