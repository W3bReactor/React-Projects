import React, {FC} from 'react';
import Title from "../../../utils/Title";
import InputField from "../../../utils/InputField";
import Send from "../../../utils/Send";
import styles from './Register.module.scss'
import {Link} from "react-router-dom";
const Register: FC = () => {
    return (
        <div className={styles.inner}>
            <Title>Регистрация</Title>
            <InputField type="text" placeholder="Login"/>
            <InputField type="email" placeholder="E-Mail"/>
            <InputField type="password" placeholder="Password"/>
            <Send>Зарегистрироваться</Send>
            <div className={styles.links}>
                <span>Уже есть аккаунт?</span>
                <Link className={styles.link} to="/login">войти</Link>
            </div>
        </div>
    );
};

export default Register;