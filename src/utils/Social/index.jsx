import React from 'react';
import instagram from '../../assets/images/inst.svg'
import vk from '../../assets/images/vk.svg'
import pinterest from '../../assets/images/pint.svg'
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './Social.module.scss'
const Social = () => {
    return (
        <ul className={styles.social}>
            <li className={styles.item}><a href="#" target="_blank"><LazyLoadImage effect="blur" src={instagram}/></a> </li>
            <li className={styles.item}><a href="#" target="_blank"><LazyLoadImage effect="blur" src={vk}/></a></li>
            <li className={styles.item}><a href="#" target="_blank"><LazyLoadImage effect="blur" src={pinterest}/></a></li>
        </ul>
    );
};

export default Social;