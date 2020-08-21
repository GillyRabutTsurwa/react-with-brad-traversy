import React from "react";
import PropTypes from "prop-types";

class CurrentTodo extends React.Component {
	//NEW: Voici ma meilleure méthode. Utiliser une méthod que l'on va appeler dans parmi notre code JSX
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

	render() {
		return <h4 style={this.getStyle()}>{this.props.todoProp.title}</h4>;
	}
}

// Look at Todos.js for useful comments on prop-types and how to use them

CurrentTodo.propTypes = {
	todoProp: PropTypes.object.isRequired
};

export default CurrentTodo;
