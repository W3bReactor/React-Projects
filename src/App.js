import Sidebar from "./components/Sidebar";
import "./root.scss"
import Header from "./components/Header";
import React from "react";
import Home from "./components/pages/Home";
import {Routes, Route} from "react-router-dom";
import PostInfo from "./components/pages/PostInfo";
import Works from "./components/pages/Works";
import Profile from "./components/pages/Profile";
import About from "./components/pages/About";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={
                    <WithSidebar>
                        <Route path={''} element={<Home/>}/>
                        <Route path={'post/:postId'} element={<PostInfo/>}/>
                        <Route path={'works'} element={<Works/>}/>
                        <Route path={'profile'} element={<Profile/>}/>
                    </WithSidebar>}>
                    <Route path={'home'} element={<Home/>}/>
                    <Route path={'post/:postId'} element={<PostInfo/>}/>
                    <Route path={'works'} element={<Works/>}/>
                    <Route path={'profile'} element={<Profile/>}/>
                </Route>
                <Route path={'/about'} element={
                    <WithoutSidebar>
                        <Route path={''} element={<About/>}/>
                    </WithoutSidebar>}>
                    <Route path={''} element={<About/>}/>
                </Route>
            </Routes>

        </div>
    );
}

const WithSidebar = ({children}) => {
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
const WithoutSidebar = ({children}) => {
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

export default App;
