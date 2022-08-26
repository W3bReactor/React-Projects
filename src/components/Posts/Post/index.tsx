import React, {FC} from 'react';
import styles from './Post.module.scss'
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {deleteComment} from "../../../store/slices/commentSlice";
import {deletePost, setSearchValue} from "../../../store/slices/postSlice";
import {authSelect} from "../../../store/slices/authSlice";
import {useAppDispatch, useAppSelector} from "../../../store";

interface PostProps {
    image?: string
    id: string
    title: string
    text: string
    date: string
}

const Post: FC<PostProps> = ({image, id, title, text, date}) => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(authSelect)
    const onDeletePost = async () => {
        await dispatch(deleteComment(id))
        dispatch(deletePost(id))
        dispatch(setSearchValue(''))
    }
    return (
        <div className={styles.inner}>
            {isAuth &&
                <button onClick={onDeletePost} className={`${styles.close}`}>
                    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                        <path d="M0 0h48v48h-48z" fill="none"/>
                    </svg>
                </button>
            }
            {image &&
                <LazyLoadImage
                    width={600}
                    height={245}
                    className={styles.image}
                    src={image}
                    effect="blur"
                />
            }
            <div className={styles.content}>
                {title &&
                    <h3 className={styles.title}>{title}</h3>
                }
                <p className={styles.text}>{`${text.length > 300 ? text.slice(0, 300) + '...' : text}`}</p>
                <div className={styles.bottom}>
                    <time className={styles.time}>{date}</time>
                    {image &&
                        <Link className={styles.read} to={`/post/${id}`}>читать</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Post;