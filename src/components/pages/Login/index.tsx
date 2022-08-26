import React, {FC} from 'react';
import InputField from "../../../utils/InputField";
import Send from "../../../utils/Send";
import styles from './Login.module.scss'
import Title from "../../../utils/Title";
import {Link} from "react-router-dom";

const Login: FC = () => {
    return (
        <div className={styles.inner}>
            <Title>Вход</Title>
            <InputField type="email" placeholder="E-Mail"/>
            <InputField type="password" placeholder="Password"/>
            <Send>Войти</Send>
            <div className={styles.links}>
                <a className={styles.link} href="#">восстановить</a>
                <Link className={styles.link} to="/register">регистрация</Link>
            </div>
        </div>
    );
};

export default Login;