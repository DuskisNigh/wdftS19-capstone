import React, { Component } from 'react';
import img3 from "../assets/photo/iridium9555.jpg";
import "./results.scss";

class Result3 extends Component {
   render() {
      return (
         <div className="results-mainDiv">
            <div className="result-title">RESULT</div>
				<div className="product-infoDiv">
					<div className="product-imgDiv">
						<img className="product-img" src={img3} alt="iridium 9555"/>
					</div>
               <div className="product-info">
                  <h3 className="product-title">Iridium 9555</h3>
                  <p className="product-price">$1095.00 USD</p>
               </div>
				</div>
            <div className="result-bttnDiv">
               <button type="button" className="resultBttn">Add to Cart</button>
            </div>   
         </div>
      )
   }
}

export default Result3;