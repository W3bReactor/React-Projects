import "./root.scss"
import React from "react";
import Home from "./components/pages/Home";
import {Route, Routes} from "react-router-dom";
import PostInfo from "./components/pages/PostInfo";
import Works from "./components/pages/Works";
import Profile from "./components/pages/Profile";
import About from "./components/pages/About";
import WithSidebar from "./utils/WithSidebar";
import WithoutSidebar from "./utils/WithoutSidebar";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ModalStory from "./components/ModalStory";
import {useSelector} from "react-redux";
import ModalImage from "./components/ModalImage";
import Search from "./components/pages/Search";

function App() {
    const showModal = useSelector(state => state.story.showModal)
    const isAuth = useSelector(state => state.auth.isAuth)
    const imageModal = useSelector(state => state.post.imageModal)
    return (
        <div className={`App ${showModal === true ? 'block' : ''}`}>
            {showModal &&
                <ModalStory/>
            }
            {imageModal &&
                <ModalImage/>
            }
            {isAuth ?
(                <Routes>
                    <Route path={'*'} element={
                        <WithSidebar>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/post/:postId'} element={<PostInfo/>}/>
                            <Route path={'/works'} element={<Works/>}/>
                            <Route path={'/profile'} element={<Profile/>}/>
                            <Route path={'/search'} element={<Search/>}/>
                        </WithSidebar>}>
                        <Route path={'home'} element={<Home/>}/>
                        <Route path={'post/:postId'} element={<PostInfo/>}/>
                        <Route path={'works'} element={<Works/>}/>
                        <Route path={'profile'} element={<Profile/>}/>
                        <Route path={'search'} element={<Search/>}/>
                    </Route>
                    <Route path={'*'} element={
                        <WithoutSidebar>
                            <Route path={'/about'} element={<About/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                            <Route path={'/register'} element={<Register/>}/>
                        </WithoutSidebar>}>
                        <Route path={'about'} element={<About/>}/>
                        <Route path={'login'} element={<Login/>}/>
                        <Route path={'register'} element={<Register/>}/>
                    </Route>
                </Routes>)
                : (
                    <Routes>
                        <Route path={'*'} element={
                            <WithSidebar>
                                <Route path={'/'} element={<Home/>}/>
                                <Route path={'/post/:postId'} element={<PostInfo />}/>
                                <Route path={'/works'} element={<Works/>}/>
                                <Route path={'/search'} element={<Search/>}/>
                            </WithSidebar>}>
                            <Route path={'home'} element={<Home/>}/>
                            <Route path={'post/:postId'} element={<PostInfo/>}/>
                            <Route path={'works'} element={<Works/>}/>
                            <Route path={'search'} element={<Search/>}/>
                        </Route>
                        <Route path={'*'} element={
                            <WithoutSidebar>
                                <Route path={'/about'} element={<About/>}/>
                            </WithoutSidebar>}>
                            <Route path={'about'} element={<About/>}/>
                        </Route>
                    </Routes>
                )
            }


        </div>
    );
}




export default App;
