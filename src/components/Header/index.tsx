import React, {FC, FormEvent, useCallback, useEffect, useState} from 'react';
import styles from './Header.module.scss'
import {LazyLoadImage} from "react-lazy-load-image-component";
import polygon from '../../assets/images/polygon.svg'
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {postSelect, setSearchValue} from "../../store/slices/postSlice";
import debounce from 'lodash.debounce'
import {authSelect} from "../../store/slices/authSlice";
import {useAppDispatch, useAppSelector} from "../../store";

const Header: FC = () => {
    const isAuth = useSelector(authSelect)
    const [value, setValue] = useState('')
    const {searchValue} = useAppSelector(postSelect)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateSearchValue(value)
    }
    const updateSearchValue = useCallback(
        debounce((value: string) => {
            navigate('/search')
            dispatch(setSearchValue(value))
        }, 250), [])
    useEffect(() => {
        setValue(searchValue)
    }, [searchValue])
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/">Главная</Link></li>
                    <li className={`${styles.navItem} ${styles.subNav}`}>
                        <span className={styles.navLink}>
                            Статьи <LazyLoadImage width={10} height={6} effect="blur" src={polygon}/>
                        </span>
                        <ul className={styles.subNavList}>
                            <li className={styles.subNavItem}>
                                <a className={styles.subNavLink} href="#">Создание сайтов</a>
                            </li>
                            <li className={styles.subNavItem}>
                                <a className={styles.subNavLink} href="#">Интернет-маркетинг</a>
                            </li>
                            <li className={styles.subNavItem}>
                                <a className={styles.subNavLink} href="#">Продвижение видео</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/about">Обо мне</Link></li>
                </ul>
            </nav>
            <div className={styles.content}>
                {isAuth &&
                    <div className={styles.item}>
                        <Link className={styles.profileLink} to="/profile">Профиль</Link>
                    </div>
                }
                <form onSubmit={onSubmitSearch}>
                    <input value={value} onChange={(e) => setValue(e.target.value)} className={styles.search}
                           type="text" placeholder="Поиск по блогу"/>
                    <input className={styles.submit} type="submit"/>
                </form>
            </div>
        </header>
    );
};

export default Header;