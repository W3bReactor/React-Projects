import React, {FC} from 'react';
import styles from './Send.module.scss'

interface SendProps {
    children: React.ReactNode
    onClickSend?: () => void
}

const Send: FC<SendProps> = ({children, onClickSend}) => {
    const onClick = () => {
        if (onClickSend) {
            onClickSend()
        }
    }
    return (
        <button onClick={onClick} className={styles.btn}>{children}</button>
    );
};

export default Send;