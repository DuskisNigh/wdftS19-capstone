import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
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
		answersCount: null,
		result: null,
		phonePageMapping: {
			isatphone: "/result1",
			iridiumGo: "/result2",
			iridium9555: "/result3",
			iridium9575: "/result4"
		}
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

		const phones = answers
			.map(answer => answer.phones)
			.flat()
			.reduce((accumulator, curr, i, arr) => {
				accumulator[curr] = arr.filter(phone => phone === curr).length
				return accumulator
			}, {})
		

		const values = Object.values(phones)
		const productRecommendation = Math.max(...values)
		const result = Object.entries(phones)
			.find(([key, value]) => value === productRecommendation)[0]

			this.setState({result})

		console.log({values, productRecommendation, result})

		
	}

	componentDidUpdate() {
		if(this.state.result || !this.state.answersCount) {
			return;
		}
		console.log(this.state.answersCount);
	}

	updateAnswer = (event, answer) => {
		answer.choice = event.target.checked;
	}


	render() {

		if (this.state.result) {
			return <Redirect to={this.state.phonePageMapping[this.state.result]} />
		}

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
										name={item.name}
										value={item.name}
										id={`${item.name}${answerIndex}`} />
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