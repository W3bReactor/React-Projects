import React, {FC} from 'react';
import styles from "./Work.module.scss";
import {LazyLoadImage} from "react-lazy-load-image-component";
import work from '../../../../assets/images/work-1.jpg'
import 'react-lazy-load-image-component/src/effects/blur.css';
import Send from "../../../../utils/Send";

const Work: FC = () => {
    return (
        <div className={styles.item}>
            <LazyLoadImage effect="blur" src={work} width={310} height={552}/>
            <div className={styles.content}>
                <h3 className={styles.title}>altermono.com</h3>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci
                    turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at
                    tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat
                    massa. Egestas ornare vel volutpat.
                </p>
                <a className={styles.link} href="#">
                    <Send>Перейти на сайт</Send>
                </a>
            </div>
        </div>
    );
};

export default Work;