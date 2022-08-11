import React, {useEffect} from 'react';
import styles from './Home.module.scss'
import StoryItem from "../../StoryItem";
import Textarea from "../../Textarea";
import Posts from "../../Posts";
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className={styles.grid}>
                <StoryItem/>
                <StoryItem/>
                <StoryItem/>
                <StoryItem/>
            </div>
            <Textarea/>
            <Posts/>
        </div>

    );
};

export default Home;