import React, {useState} from 'react';
import dummydata from "../dummydatas/data";
import App from "../App";
function Products(props) {

    return (
        <div className="container">
            <div className="row">



                {
                   props.shoes.map((a, i) => (
                        <div className="col-md-4" key={i}>
                            <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%" alt={`Shoe ${i}`} />

                            <h4>{a.title}</h4>
                            <p>{a.content}</p>
                            <p>{a.price}</p>
                        </div>
                    ))
                }










            </div>
        </div>
    );
}

export default Products;
