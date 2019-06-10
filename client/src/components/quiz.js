import React, { Component } from 'react'
import axios from 'axios';
import './quiz.scss';

class Quiz extends Component {

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
					}
				]
			}
		],
		answerCount: {
			isatphone: 0,
			iridiumGo: 0,
			iridium9555: 0,
			iridium9575: 0
		},
		result: '',
	};

	componentDidMount() {
		axios
			.get('http://localhost:8080/data')
			.then(response => {
				this.setState({
					QuizQuestions: response.data
				});
			})
			.catch(error => {
				console.log(error)
			})
	}

	onSubmitHandler = (event, question) => {
		event.preventDefault();
		question.answerKey.forEach(option => {
			if (option.choice) {
				option.phones.forEach(phone => {
					this.setState({
						answerCount: {
							[phone]: this.state[phone] + 1
						}
						
					})
				})
			}
		})
	}
	

	render() {
		console.log(this.state.QuizQuestions);
		return <form className="quiz-form">
			{this.state.QuizQuestions.map(item => (
				<div key={item.name} className="quiz-mainComponent">
					<div className="quiz-formatDiv">
						<div className="quiz-questionNum">
							<h2>{item.name}</h2>
						</div>
						<div className="quiz-question">
							{item.question}
						</div>
						<div className="quiz-answerOptions" onSubmit={this.onSubmitHandler}>
							<div className="quiz-answer">
								<input type="radio" name="answer1" value={this.state.answerKey} />
								<label htmlFor="answer1">{this.state.answerKey}</label>
							</div>
							<div className="quiz-answer">
								<input type="radio" name="answer2" value={this.state.answerKey} />
								<label htmlFor="answer2">{this.state.answerKey}</label>
							</div>
							<button className="questionBttn" type="button" >SUBMIT</button>
						</div>
					</div>
				</div>
			))}
		</form>
	}
}

export default Quiz;