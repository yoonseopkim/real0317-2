import list from "./List";
function Modal(props){
    return (
        <div className="modal">
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default Modal