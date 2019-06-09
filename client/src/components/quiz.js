import React, { Component } from 'react'
import axios from 'axios';

class Quiz extends Component {

	state = {
		QuizQuestions: [
			{
				type: "",
				name: "",
				question: "",
				choices: [
					{
						value1: [],
						text1: ""
					},
					{
						value2: [],
						text2: ""
					}
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

	

	render() {
		return this.state.QuizQuestions.map(() => (
			<div className="quiz-mainComponent">
				<div className="quiz-questionNum">
					<h2>{this.state.QuizQuestions.name}</h2>
				</div>
				<div className="quiz-question">
					{this.state.QuizQuestions.question}
				</div>
				<div className="quiz-answerOptions">
					<div className="quiz-answer">
						<input type="radio" value={this.state.QuizQuestions.value1} />{this.state.QuizQuestions.text1}
					</div>
					<div className="quiz-answer">
						<input type="radio" value={this.state.QuizQuestions.value2} />{this.state.QuizQuestions.text2}
					</div>
				</div>
				<button type="button" >SUBMIT</button>
			</div>
		));
	}
}

export default Quiz;