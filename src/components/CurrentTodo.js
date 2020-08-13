import React from "react";
import PropTypes from "prop-types";

class CurrentTodo extends React.Component {
	render() {
		return <h4>{this.props.titleProp}</h4>;
	}
}

// Look at Todos.js for useful comments on prop-types and how to use them

CurrentTodo.propTypes = {
	titleProp: PropTypes.string.isRequired
};

export default CurrentTodo;
