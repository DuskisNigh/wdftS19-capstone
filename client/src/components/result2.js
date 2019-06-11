import React, { Component } from 'react';
import img2 from "../assets/photo/IridiumGO.png";
import "./results.scss";

class Result2 extends Component {
   render() {
      return (
         <div className="results-mainDiv">
            <div className="result-title">RESULT</div>
				<div className="product-infoDiv">
					<div className="product-imgDiv">
						<img className="product-img" src={img2} alt="iridium GO"/>
					</div>
               <div className="product-info">
                  <h3 className="product-title">Iridium GO</h3>
                  <p className="product-price">$770.00 USD</p>
               </div>
				</div>
            <div className="result-bttnDiv">
               <button type="button" className="resultBttn">Add to Cart</button>
            </div>   
         </div>
      )
   }
}

export default Result2;