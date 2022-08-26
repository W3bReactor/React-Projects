import React, {FC} from 'react';
import Header from "../../components/Header";
import {Routes} from "react-router-dom";

interface WithoutSidebarProps {
    children: React.ReactNode
}

const WithoutSidebar: FC<WithoutSidebarProps> = ({children}) => {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <section className="content">
                    <Routes>
                        {children}
                    </Routes>
                </section>
            </div>
        </>
    )
}

export default WithoutSidebar;