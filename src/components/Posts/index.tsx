import React, {FC, useEffect} from 'react';
import styles from './Posts.module.scss'
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import ContentLoader from "react-content-loader";
import {fetchPosts, postSelect} from "../../store/slices/postSlice";
import {useAppDispatch, useAppSelector} from "../../store";

const Posts: FC = () => {
    const dispatch = useAppDispatch()
    const {items, status} = useAppSelector(postSelect)
    const fetchAllPosts = async () => {
        dispatch(fetchPosts({}))
    }
    useEffect(() => {
        fetchAllPosts()
    }, [])
    return (
        <div className={styles.wrapper}>
            {status === 'error' ? 'Ошибка!' :
                status === 'loading' ?
                    (
                        [...new Array(6)].map((_, index) =>
                            <ContentLoader
                                key={index}
                                speed={2}
                                width={600}
                                height={300}
                                viewBox="0 0 600 300"
                                backgroundColor="#000000"
                                foregroundColor="#383838"
                            >
                                <rect x="0" y="317" rx="10" ry="10" width="280" height="90"/>
                                <rect x="25" y="15" rx="15" ry="15" width="550" height="200"/>
                                <rect x="25" y="245" rx="15" ry="15" width="175" height="30"/>
                            </ContentLoader>
                        ))
                    :
                    (items.map(post =>
                        <Post date={post.layoutDate} image={post.image} title={post.title} id={post.id} key={post.id}
                              text={post.text}/>
                    ))
            }
        </div>
    );
};

export default Posts;