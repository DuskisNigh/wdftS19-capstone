import React, { Component } from 'react'
import axios from 'axios';
import update from 'immutability-helper';
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
				console.log(error);
			});
	};

	onSubmitHandler = (event) => {
		event.preventDefault();
		const answers = this.state.QuizQuestions
			.map(question => question.answerKey)
			.flat()
			.filter(answer => answer.choice);

		// answers.forEach((e,i) => {
		// 	e.phones = answers[i].phones
		// 	console.log(answers[i].phones);
		// });
		
		console.log(answers);
	}

	setUserAnswer(answer) {
		const updatedAnswersCount = update(this.state.answersCount, {
			[answer]: { $apply: (currentValue) => currentValue + 1 }
		});

		this.setState({
			answersCount: updatedAnswersCount,
		});
	}

	updateAnswer = (event, answer) => {
		answer.choice = event.target.checked;
	}


	render() {
		return <form className="quiz-form" onSubmit={this.onSubmitHandler}>
			{this.state.QuizQuestions.map((item, index) => (
				<div key={item.name} className="quiz-mainComponent">
					<div className="quiz-formatDiv">
						<div className="quiz-questionNum">
							<h2>{item.name}</h2>
						</div>
						<div className="quiz-question">
							{item.question}
						</div>
						<div className="quiz-answerOptions">
							{item.answerKey.map((answer, answerIndex) => (
								<div key={answerIndex} className="quiz-answer">
									<input
										onChange={e => this.updateAnswer(e, answer)}
										type="radio"
										name={`${item.name}${answerIndex}`}
										value={item.name} />
									<label htmlFor={`${item.name}${answerIndex}`}>{answer.text}</label>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
			<button className="questionBttn" type="submit" >SUBMIT</button>
		</form>
	}
}

export default Quiz;