import React, {FC} from 'react';
import avatar from '../../assets/images/dev-haski.jpg'
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './Sidebar.module.scss'
import Social from "../../utils/Social";
import SidebarBtn from "../../utils/SidebarBtn";
import sidebarBackground from '../../assets/images/background-sidebar.jpg'

const Sidebar: FC = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.fixed}>
                <LazyLoadImage
                    className={styles.backgroundSidebar}
                    src={sidebarBackground}
                    effect="blur" width={300}
                    height={180}
                    alt="background"
                />
                <div className={styles.sidebarInner}>
                    <LazyLoadImage
                        className={styles.icon}
                        effect="blur"
                        height={100}
                        width={100}
                        src={avatar}
                        alt="avatar"
                    />
                    <h2 className={styles.name}>Дмитрий Ефремов</h2>
                    <p className={styles.info}>блог front-end разработчика</p>
                    <Social/>
                    <p className={styles.desc}>
                        Front-end разработчик. Создаю сайты.
                        Стараюсь делать всё качественно, иначе говоря до Best Practices.
                    </p>
                    <div className={styles.buttons}>
                        <SidebarBtn color="red">Мои работы</SidebarBtn>
                        <SidebarBtn color="blue">Написать мне</SidebarBtn>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;