import React, { Component } from 'react';
import img4 from "../assets/photo/iridium9575.jpg";

class Result4 extends Component {
   render() {
      return (
         <div>
            <div></div>
				<div>
					<div>
						<img src={img4} alt="iridium 9575"/>
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

export default Result4;