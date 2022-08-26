import React, {ChangeEvent, FC, useRef, useState} from 'react';
import styles from './Textarea.module.scss'
import {addPost, postSelect, setImageModal, setLinkImage} from "../../store/slices/postSlice";
import {useAppDispatch, useAppSelector} from "../../store";
import {getDate} from "../../helpers/getDate";

const Textarea: FC = () => {
    const [text, setText] = useState<string>(``)
    const dispatch = useAppDispatch()
    const fileRef = useRef<HTMLButtonElement>(null)
    const {linkImage} = useAppSelector(postSelect)
    const [title, setTitle] = useState('')
    const data = getDate()
    const checkText = async () => {
        dispatch(addPost({title: title, text: text, layoutDate: data, image: linkImage}))
        setTitle('')
        setText('')
        dispatch(setLinkImage(''))
    }
    return (
        <div className={styles.inner}>
            <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                value={title}
                className={styles.textarea}
                type="text"
            />
            {title.length > 10 &&
                <div className={styles.textareaInner}>
                    <textarea
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                        value={text}
                        className={styles.textarea}
                    />
                    <button
                        onClick={() => dispatch(setImageModal(true))}
                        ref={fileRef}
                        className={styles.selectFile}
                        id={"file"}
                    />
                    <button
                        onClick={checkText}
                        className={styles.sendBtn}
                    />
                </div>
            }
        </div>
    );
};

export default Textarea;