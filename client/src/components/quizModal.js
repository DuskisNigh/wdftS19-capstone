import React from 'react';

const QuizModal = ({ children }) => {
	return (
		<div className="modal-wrapper">
			<div className="modal-form-wrapper">
				<div className="modal-header">
					<h1 className="modal-header-h1">You're on your way!</h1>
				</div>
				<div className="modal-body">
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default QuizModal;