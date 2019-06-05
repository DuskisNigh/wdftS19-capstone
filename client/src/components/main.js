import React, { Component } from 'react';
import './main.scss';

class Main extends Component {

   onSubmitHandler = event => {
      event.preventDefault();
   }

   render() {
      return (
         <div className="form-containerDiv">
            <form className="mainPage-form" onSubmit={this.onSubmitHandler}>
               <input className="form-input" type="text" placeholder="Please Enter Your Name" />
               <button className="form-submitBttn" type="submit">OK</button>
         	</form>
         </div>
      )
   }
}

export default Main;