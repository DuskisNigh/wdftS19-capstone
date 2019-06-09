import React from 'react';
import './main.scss';

const QuizModal = ({ children }) => {
	return (
		<div className="modal-wrapper">
			<div className="modal-form-wrapper">
				<div className="modal-body">
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default QuizModal;