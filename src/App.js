import React, {useState} from 'react';
import './App.css'
import Detail from "./pages/Detail";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import List from "./components/List"
import detail from "./pages/Detail";

function App(props) {

    return (
        <div className="App">
            <div><Navbar></Navbar></div>


            <List/>





            <BrowserRouter>
                <Routes>
                    <Route path='/detail' component={detail}/>
                    <Route path='/' component={<div>홈</div>}/>
                </Routes>
                <Link to='/'>홈</Link>
                <Link to='/detail'>디테일</Link>
            </BrowserRouter>


            {/*//어지간한거 이 위에다가 해야함*/}
        </div>
    );
}

export default App;
