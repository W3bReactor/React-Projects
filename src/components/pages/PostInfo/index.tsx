import React, {FC, useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import styles from './PostInfo.module.scss'
import {LazyLoadImage} from "react-lazy-load-image-component";
import Read from "../../Read";
import Comments from "../../Comments";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {fetchPosts, postSelect} from "../../../store/slices/postSlice";
import ContentLoader from "react-content-loader";
import PostText from "./PostText";
import {useAppDispatch, useAppSelector} from "../../../store";
import {Status} from "../../../store/common/enums";


const PostInfo: FC = () => {
        const params = useParams()
        const dispatch = useAppDispatch()
        const {items, status} = useAppSelector(postSelect)
        const post = items.find(item => item.id === params.postId)
        const [firstTextHalf, setFirstTextHalf] = useState<string>('')
        const [secondTextHalf, setSecondTextHalf] = useState<string>('')
        const location = useLocation()
        const check = () => {
            const target: string = "\n";
            let pos: number = 0
            let result: number[] = []
            if (localStorage.getItem('chart') === null && post) {
                while (true) {
                    let foundPos = post.text.indexOf(target, pos);
                    if (foundPos === -1) break;
                    result = [...result, foundPos]
                    pos = foundPos + 1; // продолжаем со следующей позиции
                }
                localStorage.setItem('chart', String(result))
            }
            textHalf(result)
        }
        const textHalf = (r: number[]) => {
            if (localStorage.getItem('text') === null && post) {
                const first = Math.ceil(r.length / 2)
                const textFirstHalf: string = post.text.slice(0, r[first - 1])
                const textSecondHalf: string = post.text.slice(r[first - 1], r[first + 1])
                if (textFirstHalf !== textSecondHalf) {
                    const text = `${textFirstHalf} ${textSecondHalf}`
                    localStorage.setItem('text', text)
                    setFirstTextHalf(textFirstHalf)
                    setSecondTextHalf(textSecondHalf)
                } else {
                    localStorage.setItem('text', textFirstHalf)
                    setFirstTextHalf(textFirstHalf)
                    setSecondTextHalf('')
                }
            } else {
                const localStore = (localStorage.getItem('text') as string).split(",\n").map(item => String(item))
                setFirstTextHalf(localStore[0])
                setSecondTextHalf(localStore[1])
            }
        }

        useEffect(() => {
            const fetchAllPosts = async () => {
                await dispatch(fetchPosts({}))
                check()
            }
            fetchAllPosts()
            window.scrollTo(0, 0)
            return () => {
                delete localStorage.chart
                delete localStorage.text
            }
        }, [location])
        if (post?.id && status === Status.SUCCESS) {
            return (
                <div className={styles.inner}>
                    <div>
                        <Link className={styles.back} to="/">вернуться назад</Link>
                    </div>
                    <h1 className={styles.title}>{post.title}</h1>
                    <time className={styles.time}>{post.layoutDate}</time>
                    <div className={styles.content}>
                        {firstTextHalf &&
                            <PostText text={firstTextHalf}/>
                        }
                        <LazyLoadImage
                            className={styles.image}
                            src={post.image}
                            width={550}
                            height={229}
                            effect="blur"
                        />
                        {secondTextHalf &&
                            <PostText text={secondTextHalf}/>
                        }
                    </div>
                    <Read id={post.id}/>
                    <Comments id={post.id}/>
                </div>
            );
        }
        return (
            <div className={styles.inner}>
                <ContentLoader
                    speed={2}
                    width={600}
                    height={1000}
                    viewBox="0 0 600 1000"
                    backgroundColor="#000000"
                    foregroundColor="#383838"
                >
                    <rect x="0" y="82" rx="5" ry="5" width="62" height="14"/>
                    <rect x="0" y="15" rx="5" ry="5" width="93" height="14"/>
                    <rect x="0" y="46" rx="5" ry="5" width="175" height="21"/>
                    <rect x="0" y="129" rx="5" ry="5" width="550" height="147"/>
                    <rect x="0" y="330" rx="5" ry="5" width="550" height="84"/>
                    <rect x="0" y="445" rx="15" ry="15" width="550" height="229"/>
                    <rect x="0" y="716" rx="15" ry="15" width="550" height="84"/>
                    <rect x="0" y="829" rx="0" ry="0" width="550" height="1"/>
                    <rect x="0" y="849" rx="5" ry="5" width="156" height="19"/>
                    <rect x="0" y="890" rx="15" ry="15" width="544" height="85"/>
                </ContentLoader>
            </div>
        )
    }
;


export default PostInfo;