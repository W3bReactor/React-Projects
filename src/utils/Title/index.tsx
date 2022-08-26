import React, {FC} from 'react';
import styles from './Title.module.scss'

interface TitleProps {
    children: React.ReactNode
}

const Title: FC<TitleProps> = ({children}) => {
    return (
        <h1 className={styles.title}>{children}</h1>
    );
};

export default Title;