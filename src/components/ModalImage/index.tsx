import React, {FC, FormEvent, useState} from 'react';
import {setImageModal, setLinkImage} from "../../store/slices/postSlice";
import styles from './ModalImage.module.scss'
import {getValidUrl} from "../../helpers/getValidUrl";
import {useAppDispatch} from "../../store";

const ModalImage: FC = () => {
    const dispatch = useAppDispatch()
    const [link, setLink] = useState('')
    const closeModal = () => {
        dispatch(setImageModal(false))
    }
    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(getValidUrl(link)){
            dispatch(setLinkImage(link))
            closeModal()
        }
    }
    return (
        <div className={styles.background} onClick={closeModal}>
            <form onSubmit={onFormSubmit} className={styles.inner} onClick={(e) => e.stopPropagation()}>
                <span>Введите ссылку</span>
                <input value={link} onChange={(e) => setLink(e.target.value)} type="text"/>
                <input className={styles.enter} type="submit"/>
            </form>
        </div>
    );
};
export default ModalImage;

