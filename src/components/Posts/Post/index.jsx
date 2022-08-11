import React from 'react';
import styles from './Post.module.scss'
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";

const Post = ({image, id, title}) => {
    return (
        <div className={styles.inner}>
            {image &&
                <LazyLoadImage className={styles.image} src={image} effect="blur"/>
            }
            <div className={styles.content}>
                {title &&
                    <h3 className={styles.title}>{title}</h3>
                }
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci
                    turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt
                    arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas
                    ornare vel volutpat.</p>
                <div className={styles.bottom}>
                    <time className={styles.time}>21.06.2020</time>
                    {image &&
                        <Link className={styles.read} to={`/post/${id}`}>читать</Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Post;