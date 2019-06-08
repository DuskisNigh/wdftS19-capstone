import React, { Component } from 'react';
import './main.scss';

class Main extends Component {

	state = 
		{
			counter: 0,
			question: '',
			answerOptions: [],
			answer: '',
			answersCount: {
				isatphone: 0,
				iridiumGo: 0,
				iridium9555: 0,
				iridium9575: 0
			},
			result: '',
			isShowing: false
	};

   onSubmitHandler = event => {
		event.preventDefault();
		// this.setState({ value: event.target.value });

	}
	
	openModalHandler = () => {
		this.setState({
			isShowing: true
		});
	};

	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	};

   render() {
		const modalShowHide = this.state.isShowing ? "modal-wrapper-show" : "modal-wrapper-hide";
      return (
         <div className="form-containerDiv">
				<form className="mainPage-form" onSubmit={this.onSubmitHandler}>
					<input className="name-input"  type="text" placeholder="Please Enter Your Name" />
               <button className="form-submitBttn" type="submit">OK</button>
				</form>
				<div className={modalShowHide}>
					
				</div>
         </div>
      )
   }
}

export default Main;