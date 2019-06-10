import React, { Component } from 'react';
import img3 from "../assets/photo/iridium9555.jpg";

class Result3 extends Component {
   render() {
      return (
         <div>
            <div></div>
				<div>
					<div>
						<img src={img3} alt="iridium 9555"/>
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

export default Result3;