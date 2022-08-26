import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import styles from "./Read.module.scss";
import ReadItem from "./ReadItem";
import {useSelector} from "react-redux";
import {postSelect} from "../../store/slices/postSlice";
import {convert} from "../../helpers/convertToDate";

interface ReadProps {
    id: string
}

export interface postDate {
    layoutDate: number | Date | string,
    id: string,
    title: string,
    text: string,
    image?: string
}


const Read: FC<ReadProps> = ({id}) => {
    const {items} = useSelector(postSelect)
    const [filterPosts, setFilterPosts] = useState<postDate[]>([])
    const getCheckedDates = (postsConvertedDates: postDate[]) => {
        let result: postDate[] = []
        for (let i = 0; i < 1; i++) {
            result = postsConvertedDates.filter(post => {
                return post.layoutDate >= postsConvertedDates[i].layoutDate;
            })
        }
        if (result.length > 4) {
            const difference: number = result.length - 4
            return result.slice(difference)
        }
        return result
    }


    const calculatePostByDate = () => {
        let filteredArrays: postDate[] = []
        let filterDates: postDate[] = []
        const postsReversedDates = items.map(post => ({
            ...post,
            layoutDate: post.layoutDate.split(".").reverse().join(".")
        }))
        console.log(items)
        const postsConvertedDates = postsReversedDates.map((post) => ({
            ...post,
            layoutDate: convert(post.layoutDate)
        })).filter(post => post.image).filter(post => !(post.id === id))
        if (postsConvertedDates.length >= 4) {
            for (let i = 0; i < 3; i++) {
                if (filteredArrays.length < 4) {
                    filterDates = postsConvertedDates.filter(post => {
                        return !filteredArrays.includes(post);
                    })
                    filteredArrays = [...filteredArrays, ...getCheckedDates(filterDates)]
                }
            }
        } else {
            if (filteredArrays.length < 4) {
                for (let i = 0; i <= postsConvertedDates.length - 1; i++) {
                    if (filteredArrays.length < 4) {
                        filterDates = postsConvertedDates.filter(post => {
                            return !filteredArrays.includes(post);
                        })
                        filteredArrays = [...filteredArrays, ...getCheckedDates(filterDates)]
                    }
                }
            }
        }
        return filteredArrays
    }

    useEffect(() => {
        setFilterPosts(calculatePostByDate())
    }, [])

    return (
        <div className={styles.read}>
            <h2 className={styles.readTitle}>Интересно почитать</h2>
            <div className={styles.readWrapper}>
                {filterPosts.length === 0 ? <h3 className={styles.error}>Нечего почитать :(</h3> :
                    filterPosts.reverse().map((post, index) =>
                        <ReadItem key={index} post={post}/>
                    )}
            </div>
        </div>
    );
};

export default Read;