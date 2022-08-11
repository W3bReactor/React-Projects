import React from 'react';
import styles from './Posts.module.scss'
import Post from "./Post";
import postImage from '../../assets/images/post-image.jpg'
const Posts = () => {
    return (
        <div className={styles.wrapper}>
            <Post/>
            <Post title={"Как писать код быстро и безболезненно?"} image={postImage} id={1}/>
            <Post title={"Как я сходил на FrontEnd Conf 2021"} image={postImage} id={2}/>
            <Post/>
            <Post/>
        </div>
    );
};

export default Posts;