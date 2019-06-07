import React from "react";
import PropTypes from "prop-types";

function Questions(props) {

	return (
      <h2 className="question">{props.content}</h2>
   );
}

// got the below code from the react docs, the PropTypes define the type of prop and what props are required.
Questions.propTypes = {
	content: PropTypes.string.isRequired
};

export default Questions;
