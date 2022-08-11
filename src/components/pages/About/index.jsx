import React from 'react';
import styles from './About.module.scss'
import {LazyLoadImage} from "react-lazy-load-image-component";
import avatar from '../../../assets/images/avator-not-logged.png'
import Social from "../../../utils/Social";
import background from '../../../assets/images/backgroud-about.jpg'
const About = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.imageInner}>
                <LazyLoadImage className={styles.background} wrapperClassName={styles.background} src={background} height={250} effect="blur"/>
            </div>
            <h1 className={styles.title}>Обо мне</h1>
            <div className={styles.content}>
                <LazyLoadImage effect="blur" src={avatar} width={150} height={150}/>
                <div className={styles.info}>
                    <h2 className={styles.name}>Дмитрий Ефремов</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Язык программирования: <span>Javascript</span></li>
                        <li className={styles.listItem}>Фреймворк: <span>React</span></li>
                        <li className={styles.listItem}>Библиотеки: <span>Redux, Redux Toolkit, React-Router-Dom, Node-Sass</span></li>
                        <li className={styles.listItem}>Ищу работу: <span>Нет</span></li>
                    </ul>
                </div>
            </div>
            <div className={styles.inner}>
                <h3 className={styles.subTitle}>Описание:</h3>
                <p className={styles.desc}>Front-end разработчик. Практик верстки сайтов.
                    Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов
                    в создании сайтов различной сложности.</p>
            </div>
            <Social/>
        </div>
    );
};

export default About;