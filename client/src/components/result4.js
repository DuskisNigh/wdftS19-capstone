import React, { Component } from 'react';
import img4 from '../assets/photo/iridium9575.jpg';
import { Link } from 'react-router-dom';
import './results.scss';

class Result4 extends Component {
   render() {
      return (
         <div className="results-mainDiv">
            <div className="result-title">RESULT</div>
				<div className="product-infoDiv">
					<div className="product-imgDiv">
						<img className="product-img" src={img4} alt="iridium 9575"/>
					</div>
               <div className="product-info">
                  <h3 className="product-title">Iridium 9575 Extreme</h3>
                  <p className="product-price">$1295.00 USD</p>
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

export default Result4;