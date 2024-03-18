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
import dummydata from "./dummydatas/data";
import axios from "axios";
import Cart from "./pages/Cart";
function App(props) {
    let navigate = useNavigate()
    const [shoes, setShoes] = useState(dummydata); // 상태와 상태를 업데이트하는 함수를 받음
    const [loading, setLoading] = useState(false); // 로딩 상태를 위한 상태 변수 추가
    const addData = () => {
        setLoading(true); // 로딩 시작
        axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((response) => {
                // 기존 상품 데이터에 새로운 상품 데이터를 추가
                setShoes([...shoes, ...response.data]);
                setLoading(false); // 로딩 완료
            })
            .catch(() => {
                console.log('데이터 로드 실패');
                setLoading(false); // 로딩 실패로도 간주, 로딩 상태 해제
            });
    };
    return (
        <div className="App">
            <NavbarComponent />
            <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>


            <Products shoes={shoes} />
            {loading && <div>로딩중입니다...</div>} {/* 로딩 상태일 때 메시지 표시 */}
            <button onClick={addData}>더 보기</button>












    <Routes>
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/detail" element={<Detail shoes={shoes}/>} />
        <Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>
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
