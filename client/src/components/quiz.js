import React from "react";
import Questions from "./questions";
import QuestionCount from "./questionCount";
import AnswerOptions from "./answerOptions";

function Quiz(props) {

	function renderAnswerOptions(key) {
    	return (
      	<AnswerOptions
        		key={key.content}
        		answerContent={key.content}
        		answerType={key.type}
        		answer={props.answer}
        		questionId={props.questionId}
        		onAnswerSelected={props.onAnswerSelected}
      	/>
    	);
  	}

	return (
		<div>
			<div className="quiz">
				<QuestionCount counter={props.questionId} total={props.questionTotal} />
				<Questions content={props.question} />
				<ul className="answerOptions">
					{props.answerOptions.map(renderAnswerOptions)}
				</ul>
			</div>
		</div>
  	);
}

export default Quiz;