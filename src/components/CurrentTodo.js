import React from "react";
import PropTypes from "prop-types";

class CurrentTodo extends React.Component {
	//NEW: Styling. many ways, voici une très bonne.
	getStyle() {
		console.log(this.props);
		if (this.props.todoProp.completed) {
			return {
				textDecoration: "line-through"
			};
		}
		else {
			return {
				textDecoration: "none"
			};
		}
	}

	componentDidMount() {
		this.getStyle();
	}

	render() {
		return <h4 style={this.getStyle()}>{this.props.todoProp.title}</h4>;
	}
}

// Look at Todos.js for useful comments on prop-types and how to use them

CurrentTodo.propTypes = {
	todoProp: PropTypes.object.isRequired
};

export default CurrentTodo;
