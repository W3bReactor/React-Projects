import React, {FC, useEffect} from 'react';
import styles from './Home.module.scss'
import StoryItem from "../../StoryItem";
import Textarea from "../../Textarea";
import Posts from "../../Posts";
import {useSelector} from "react-redux";
import {authSelect} from "../../../store/slices/authSlice";

interface storiesItem {
    id: number
    url: string
}

const stories: storiesItem[] = [
    {id: 1, url: "https://www.youtube.com/watch?v=KPXmZ6bLo5w"},
    {id: 2, url: "https://www.youtube.com/watch?v=8OqT5hUA-ck"},
    {id: 3, url: "https://www.youtube.com/watch?v=MesOwEZktrc"},
    {id: 4, url: "https://www.youtube.com/watch?v=5c2sosCIUyw"}
]

const Home: FC = () => {
    const isAuth = useSelector(authSelect)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className={styles.grid}>
                {stories.map(story =>
                    <StoryItem key={story.id} story={story}/>
                )}
            </div>
            {isAuth &&
                <Textarea/>
            }
            <Posts/>
        </div>

    );
};

export default Home;