import React, {FC, useRef} from 'react';
import styles from './ModalStory.module.scss'
import {hideModal, storySelect} from "../../store/slices/storySlice";
import ReactPlayer from "react-player";
import {useAppDispatch, useAppSelector} from "../../store";

const ModalStory: FC = () => {
    const dispatch = useAppDispatch()
    const storyRef = useRef(null)
    const {urlVideo} = useAppSelector(storySelect)
    const closeModal = () => {
        dispatch(hideModal())
    }
    return (
        <div className={styles.background} onClick={closeModal}>
            <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
                <ReactPlayer
                    autoFocus={true}
                    ref={storyRef}
                    controls={true}
                    playing
                    volume={0.1}
                    className={styles.video}
                    url={urlVideo}
                    width={427}
                    height={588}
                />
            </div>
        </div>
    );
};

export default ModalStory;