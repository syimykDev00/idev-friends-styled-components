import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/home/home";
import About from "./page/about/about";
import Contact from "./page/contact/contact";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;