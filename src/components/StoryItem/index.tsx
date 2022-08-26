import React, {FC, MutableRefObject, useRef} from 'react';
import styles from "./StoryItem.module.scss";
import {showModal} from "../../store/slices/storySlice";
import BaseReactPlayer from "react-player";
import {useAppDispatch} from "../../store";

interface Story {
    url: string
    id: number
}

interface StoryItemProps {
    story: Story
}


const StoryItem: FC<StoryItemProps> = ({story}) => {
    const dispatch = useAppDispatch()
    const player = useRef<BaseReactPlayer>(null)
    const onClickStory = () => {
        dispatch(showModal(story.url))
        player.current?.showPreview()
    }
    return (
        <div className={styles.item} onClick={onClickStory}>
            <span className={styles.text}>Отдыхаю на природе</span>
            <time className={styles.time}>21.09.2020</time>
            <BaseReactPlayer
                onClickPreview={onClickStory}
                ref={player}
                previewTabIndex={1}
                light={true}
                url={story.url}
                className={styles.storyImage}
                width={140}
                height={195}
            />
        </div>
    );
};

export default StoryItem;