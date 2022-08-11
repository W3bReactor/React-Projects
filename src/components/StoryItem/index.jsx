import React from 'react';
import styles from "./StoryItem.module.scss";
import {LazyLoadImage} from "react-lazy-load-image-component";
import story from "../../assets/images/video-story.jpg";

const StoryItem = () => {
    return (
        <div className={styles.item}>
            <span className={styles.text}>Отдыхаю на природе</span>
            <time className={styles.time}>21.09.2020</time>
            <LazyLoadImage className={styles.storyImage} src={story} effect="blur" height={195} width={140}/>
        </div>
    );
};

export default StoryItem;