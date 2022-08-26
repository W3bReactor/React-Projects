import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './Comments.module.scss'
import Send from "../../utils/Send";
import Comment from "./Comment";
import {useSelector} from "react-redux";
import {addComment, commentSelect, fetchComments} from "../../store/slices/commentSlice";
import ContentLoader from "react-content-loader";
import avatar from '../../assets/images/avator-not-logged.png'
import avatarLogged from '../../assets/images/dev-haski.jpg'
import {useAppDispatch, useAppSelector} from "../../store";
import {getDate} from "../../helpers/getDate";
import {authSelect} from "../../store/slices/authSlice";

interface CommentsProps {
    id: string
}

const Comments: FC<CommentsProps> = ({id, ...props}) => {
    const dispatch = useAppDispatch()
    const {items, status} = useSelector(commentSelect)
    const {isAuth} = useAppSelector(authSelect)
    const inputRef = useRef<HTMLInputElement>(null)
    const fetchAllComments = async () => {
        dispatch(fetchComments(id))
    }
    const [value, setValue] = useState('')
    useEffect(() => {
        fetchAllComments()
    }, [])
    const data = getDate() // Получение даты
    const onClickSend = async () => {
        dispatch(addComment({
            id,
            text: value,
            layoutDate: data,
            avatar: isAuth ? avatarLogged : avatar,
            author: isAuth ? 'Дмитрий Ефремов' : 'Аноним'
        }))
        setValue('')
    }
    const onClickReply = (name: string) => {
        setValue(`@${name} ${value}`)
        inputRef.current?.focus()
    }
    return (
        <div className={styles.inner}>
            <h4 className={styles.title}>Обсуждение</h4>
            <div className={styles.send}>
                <input ref={inputRef} onChange={(e) => setValue(e.target.value)} value={value} className={styles.input}
                       type="text" placeholder="Текст комментария"/>
                <Send onClickSend={onClickSend}>Отправить</Send>
            </div>
            <div className={styles.comments}>
                {status === 'loading' ?
                    ([...new Array(3)].map((_, index) => <ContentLoader
                            key={index}
                            speed={2}
                            width={550}
                            height={95}
                            viewBox="0 0 550 95"
                            backgroundColor="#000000"
                            foregroundColor="#383838"
                            {...props}
                        >
                            <rect x="61" y="28" rx="5" ry="5" width="89" height="14"/>
                            <rect x="0" y="46" rx="5" ry="5" width="550" height="28"/>
                            <rect x="0" y="79" rx="5" ry="5" width="50" height="14"/>
                            <circle cx="24" cy="24" r="20"/>
                            <rect x="61" y="8" rx="5" ry="5" width="89" height="14"/>
                        </ContentLoader>
                    ))
                    : items.length === 0 ?
                        <h2 className={styles.error}>Комментариев не найдено!</h2> : items.map((comment, index) =>
                            <Comment onClickReply={onClickReply} comment={comment} key={index}/>
                        )}
            </div>
        </div>
    );
};

export default Comments;