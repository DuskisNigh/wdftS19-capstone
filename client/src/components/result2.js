import React, { Component } from 'react';
import img2 from "../assets/photo/IridiumGO.png";

class Result2 extends Component {
   render() {
      return (
         <div>
            <div></div>
				<div>
					<div>
						<img src={img2} alt="iridium go"/>
					</div>
					<div></div>
				</div>
            <div>
               <button type="button" className="resultBttn">Add to Cart</button>
            </div>   
         </div>
      )
   }
}

export default Result2;