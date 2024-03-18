import App from "../App";
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {useEffect, useState} from "react";
import {Nav} from "react-bootstrap";
function Detail(props) {
    let {id} = useParams()
    let 찾은상품 = props.shoes.find(x => parseInt(x.id) === parseInt(id));
    let YellowBox = styled.div`
    padding: 30px;
      color: yellowgreen;
    `
    let [탭, 탭변경] = useState(0)
    let [alert,setAlert] = useState(true)
    useEffect(() => {
     let timer1 =     setTimeout( ()=>{ setAlert(false) }, 2000)
        return()=>{
            clearTimeout(timer1)
        }
    }, []);
    let [count, setCount] = useState(0)
return(
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            {alert == true
                ? <div className="alert alert-warning">
                    2초이내 구매시 할인
                </div>
                : null}

            <div className="col-md-6">
                {찾은상품 ? (
                    <div className="col-md-6">
                        <h4 className="pt-5">{찾은상품.title}</h4>
                        <p>{찾은상품.content}</p>
                        <p>{찾은상품.price}</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                ) : (
                    <div>상품을 찾을 수 없습니다.</div>
                )}
                <button className="btn btn-danger">주문하기</button>
                <YellowBox>hello woooooooo</YellowBox>
                <button onClick={()=>{ setCount(count+1) }}>버튼</button>


            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent 탭={탭}/>


        </div>
    </div>
)
}
function TabContent({탭}){

    return (
        <div className="start end">
            { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
        </div>
    );
}

export default Detail;