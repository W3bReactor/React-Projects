import React, {FC, useEffect} from 'react';
import Title from "../../../utils/Title";
import {fetchPosts, postSelect} from "../../../store/slices/postSlice";
import ContentLoader from "react-content-loader";
import Post from "../../Posts/Post";
import styles from './Search.module.scss'
import {useAppDispatch, useAppSelector} from "../../../store";

const Search: FC = () => {
    const {items, status, searchValue} = useAppSelector(postSelect)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchPosts({searchValue}))
    }, [searchValue])

    return (
        <div>
            <Title>Поиск по "{searchValue.length === 0 ? " " : searchValue}"</Title>
            {status === 'error' ? 'Ошибка!' :
                status === 'loading' ?
                    (
                        [...new Array(3)].map((_, index) =>
                            <ContentLoader
                                key={index}
                                speed={2}
                                width={600}
                                height={300}
                                viewBox="0 0 600 300"
                                backgroundColor="#000000"
                                foregroundColor="#383838"
                            >
                                <rect x="0" y="317" rx="10" ry="10" width="280" height="90"/>
                                <rect x="25" y="15" rx="15" ry="15" width="550" height="200"/>
                                <rect x="25" y="245" rx="15" ry="15" width="175" height="30"/>
                            </ContentLoader>
                        ))
                    :
                    items.length > 0 ? (items.map(post =>
                        <Post
                            date={post.layoutDate}
                            image={post.image}
                            title={post.title}
                            id={post.id}
                            key={post.id}
                            text={post.text}
                        />
                    )) : <h2 className={styles.error}>Не найдено постов!</h2>

            }
        </div>
    );
};

export default Search;