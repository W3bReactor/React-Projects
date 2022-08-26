import React, {FC} from 'react';
import styles from "./ReadItem.module.scss";
import {Link} from "react-router-dom";
import {postDate} from "../index";
import {useAppSelector} from "../../../store";
import {postItemSelect} from "../../../store/slices/postSlice";

interface ReadItemProps {
    post: postDate
}

const ReadItem: FC<ReadItemProps> = ({post}) => {
    const postDate = useAppSelector(postItemSelect(post))
    return (
        <>
            <Link to={`/post/${post.id}`} className={styles.readItem}>
                <b className={styles.readName}>{post.title}</b>
                <time className={styles.readTime}>{postDate ? postDate.layoutDate : '00.00.00'}</time>
            </Link>

        </>
    );
};

export default ReadItem;