import React, { Component } from 'react';
import './main.scss';

class Main extends Component {

	state = {
		counter: 0,
		questionId: 1,
		question: '',
		answerOptions: [],
		answer: '',
		answersCount: {
			isatphon: 0,
			iridiumGo: 0,
			iridium9555: 0,
			iridium9575: 0
		},
		result: ''
	};

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