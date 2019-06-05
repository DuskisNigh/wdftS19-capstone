import React from "react";
import PropTypes from "prop-types";

function Questions(props) {

	return (
      <h2 className="question">{props.content}</h2>
   );
}

Questions.propTypes = {
  content: PropTypes.string.isRequired
};

export default Questions;
