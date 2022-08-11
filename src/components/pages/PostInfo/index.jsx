import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import styles from './PostInfo.module.scss'
import {LazyLoadImage} from "react-lazy-load-image-component";
import postImage from '../../../assets/images/post-image.jpg'
import Read from "../../Read";
import Comments from "../../Comments";
import 'react-lazy-load-image-component/src/effects/blur.css';

const PostInfo = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.inner}>
            <div>
                <Link className={styles.back} to="/">вернуться назад</Link>
            </div>
            <h1 className={styles.title}>Как создавать сайты легко</h1>
            <time className={styles.time}>21.06.2020</time>
            <div className={styles.content}>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et
                    vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
                    Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel
                    volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis
                    urna.
                    Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu
                    egestas.
                    Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel
                    volutpat.
                </p><br/>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et
                    vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
                    Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel
                    volutpat.
                </p>
                <LazyLoadImage className={styles.image} src={postImage} width={550} height={229} effect="blur"/>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et
                    vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
                    Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel
                    volutpat.
                </p>
            </div>
            <Read/>
            <Comments/>
        </div>
    );
};

export default PostInfo;