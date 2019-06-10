import React, { Component } from 'react';
// import axios from 'axios';
import QuizModal from './quizModal';
import { Link } from 'react-router-dom';
import './main.scss';

class Main extends Component {

	state = {
		QuizQuestions: [
			{
				name: "",
				question: "",
				answerKey: [
					{
						phones: [],
						text: "",
						choice: false
					},
				]
			}
		],
		answersCount: {
			isatphone: 0,
			iridiumGo: 0,
			iridium9555: 0,
			iridium9575: 0
		},
		result: '',
		isShowing: false,
		name: '',
	};

	onSubmitHandler = event => {
		event.preventDefault();
		this.setState({ 
			name: event.target.name_input.value,
			isShowing: true
		}, () => {
			console.log(this.state)
		});

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
					<input name="name_input" className="name-input" type="text" placeholder="Please Enter Your Name" />
					<button className="form-submitBttn" type="submit">OK</button>
				</form>
				<div className={modalShowHide}>
					<QuizModal className="modal" show={this.state.isShowing}>
						<div className="modal-content">
							<div className="content-div1">
								<div className="modal-header">
									<h1 className="modal-header-h1 animated zoomIn">You're On Your Way</h1>
								</div>
								<h2 className="quizStart-title">Hello {this.state.name}!</h2>
							</div>
							<div className="content-div2">
								<Link className="quizStart-link" to="./quiz">
									<div>Click Here to begin your journey to find the best product for you</div>
								</Link>
							</div>
						</div>
					</QuizModal>
				</div>
			</div>
		)
	}
}

export default Main;