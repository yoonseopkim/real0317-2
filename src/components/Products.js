import React, {useState} from 'react';
import dummydata from "../dummydatas/data";
function Products() {
    const [shoes, setShoes] = useState(dummydata); // 상태와 상태를 업데이트하는 함수를 받음
    return (
        <div className="container">
            <div className="row">



                {
                    shoes.map((a, i) => (
                        <div className="col-md-4" key={i}>
                            <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%" alt={`Shoe ${i}`} />

                            <h4>{a.title}</h4>
                            <p>{a.content}</p>
                        </div>
                    ))
                }










            </div>
        </div>
    );
}

export default Products;
