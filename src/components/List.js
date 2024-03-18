import React, {useState} from "react";
import App from "../App";
import Modal from "./Modal";

function List(props) {

    let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
    let [좋아요개수, 좋아요변경] = useState([0, 0, 0])
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [입력값, 입력값변경] = useState('');
    return (
        <div>


            {
                글제목.map(function (value, index) {
                    return (
                        <div className="list" key={index}>


                            <h4 onClick={() => {
                                setModal(true);
                                setTitle(index);
                            }}> {value} <span onClick={(e) => {
                                e.stopPropagation();
                                let copy = [...좋아요개수];
                                copy[index] = copy[index] + 1;
                                좋아요변경(copy);
                            }}>👍</span> {좋아요개수[index]} </h4>
                            <p>2월 17일 발행</p>

                            <div>
                                <button onClick={() => {
                                    let copy = [...글제목];
                                    copy[0] = '여자코트 추천';
                                    글제목변경(copy)
                                }}>글수정버튼
                                </button>

                                <button onClick={() => {
                                    let copy = [...글제목];
                                    let 정렬된글제목 = copy.sort()

                                    글제목변경(정렬된글제목)
                                }}>가나다정렬
                                </button>
                                <button onClick={()=>{
                                    let copy = [...글제목];
                                    copy.splice(index, 1);
                                    글제목변경(copy);
                                }}
                                >글삭제</button>


                            </div>


                        </div>
                    )
                })
            }

            {/*{modal && <Modal 글제목={글제목} title={title} />}*/}
            {
                modal == true ? <Modal 글제목={글제목} title={title}/> : null

            }


            <input onChange={(e)=>{
                입력값변경(e.target.value)

            }} />
<button onClick={()=>{
    let copy = [...글제목];
    copy.unshift(입력값);
    글제목변경(copy)
}}>
    글작성
</button>



        </div>
    )
}

export default List

