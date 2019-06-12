import React, { Component } from 'react';
import img1 from '../assets/photo/Isatphone2.jpg';
import { Link } from "react-router-dom";
import './results.scss';

class Result1 extends Component {
   render() {
      return (
         <div className="results-mainDiv">
            <div className="result-title">RESULT</div>
				<div className="product-infoDiv">
					<div className="product-imgDiv">
						<img className="product-img" src={img1} alt="isatphone 2"/>
					</div>
               <div className="product-info">
                  <h3 className="product-title">Inmarsat IsatPhone 2</h3>
                  <p className="product-price">$750.00 USD</p>
               </div>
				</div>
            <div className="result-bttnDiv">
               <Link className="resultBttn" to="/cart">
                  <button type="button">Add to Cart</button>
               </Link>
            </div>   
         </div>
      )
   }
}

export default Result1;
