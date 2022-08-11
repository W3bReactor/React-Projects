import React from 'react';
import styles from './Header.module.scss'
import {LazyLoadImage} from "react-lazy-load-image-component";
import polygon from '../../assets/images/polygon.svg'
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/">Главная</Link></li>
                    <li className={`${styles.navItem} ${styles.subNav}`}>
                        <span className={styles.navLink}>Статьи <LazyLoadImage width={10} height={6} effect="blur" src={polygon}/></span>
                        <ul className={styles.subNavList}>
                            <li className={styles.subNavItem}><a className={styles.subNavLink} href="#">Создание сайтов</a> </li>
                            <li className={styles.subNavItem}><a className={styles.subNavLink} href="#">Интернет-маркетинг</a></li>
                            <li className={styles.subNavItem}><a className={styles.subNavLink} href="#">Продвижение видео</a></li>
                        </ul>
                    </li>
                    <li className={styles.navItem}><Link  className={styles.navLink} to="/about">Обо мне</Link></li>
                </ul>
            </nav>
            <div className={styles.content}>
                <div className={styles.item}>
                    <Link className={styles.profileLink} to="/profile">Профиль</Link>
                </div>
                <input className={styles.search} type="text" placeholder="Поиск по блогу" />
            </div>
        </header>
    );
};

export default Header;