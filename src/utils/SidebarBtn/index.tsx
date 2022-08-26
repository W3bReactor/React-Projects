import React, {FC} from 'react';
import styles from './SidebarBtn.module.scss'
import {Link} from "react-router-dom";

interface SidebarBtnProps {
    color: 'red' | 'blue';
    children: React.ReactNode
}


const SidebarBtn: FC<SidebarBtnProps> = ({color, children}) => {
    return (
        <>
            { color === 'red' ?
                    <Link to='/works' className={`${styles.red} ${styles.btn}`}>{children}</Link>
                :
                <button className={`${styles.blue} ${styles.btn}`}>{children}</button>
            }

        </>
    );
};

export default SidebarBtn;