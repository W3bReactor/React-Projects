import React, {FC} from 'react';
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import {Routes} from "react-router-dom";

interface WithSidebar {
    children: React.ReactNode
}

const WithSidebar: FC<WithSidebar> = ({children}) => {
    return (
        <>
            <Sidebar/>
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

export default WithSidebar;