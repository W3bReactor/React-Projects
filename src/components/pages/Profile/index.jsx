import React, {useEffect} from 'react';
import styles from './Profile.module.scss'
import InputField from "../../../utils/InputField";
import Send from "../../../utils/Send";
import {LazyLoadImage} from "react-lazy-load-image-component";
import avatar from '../../../assets/images/avator-not-logged.png'
const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.inner}>
            <h2 className={styles.title}>Профиль</h2>
            <div className={styles.content}>
                <div className={styles.form}>
                    <InputField placeholder="Имя" value="Дмитрий Ефремов" type="text"/>
                    <InputField placeholder="E-Mail" value="vaironfop@Mail.ru" type="email"/>
                    <InputField placeholder="Новый пароль" type="password"/>
                    <InputField placeholder="Подтвердите пароль" type="password"/>
                    <Send>Сохранить</Send>
                </div>
                <div className={styles.selectImage}>
                    <LazyLoadImage src={avatar} width={150} height={150} alt="avatar"/>
                    <input type="file" name="file" id="input__file" className={styles.file}/>
                    <label className={styles.selectFile} htmlFor="input__file">выбрать  аватар</label>
                </div>
            </div>

        </div>
    );
};

export default Profile;