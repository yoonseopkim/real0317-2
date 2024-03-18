import React, {useState} from 'react';
import './App.css'
import Detail from "./pages/Detail";
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"
import Modal from "./components/Modal";
import List from "./components/List"
import Lists from "./pages/Lists";
import lists from "./pages/Lists";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import NavbarComponent from "./components/NavbarComponent";
import bg from './bg.png'
import Products from "./components/Products";
import About from "./pages/About";
function App(props) {
    let navigate = useNavigate()
    return (
        <div className="App">
            <NavbarComponent />

            <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>


<Products></Products>









    <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/" element={<div>홈</div>} />
        <Route path="*" element={ <div>없는페이지임</div> } />

        <Route path="/about" element={ <About/> } >
            <Route path="member" element={ <div>멤버들</div> } />
            <Route path="location" element={ <div>회사위치</div> } />
        </Route>
    </Routes>

    <Link to='/'>홈</Link>
    <Link to='/lists'>리스트</Link>
    <Link to='/detail'>디테일</Link>




            {/*//어지간한거 이 위에다가 해야함*/}
        </div>
    );
}

export default App;
