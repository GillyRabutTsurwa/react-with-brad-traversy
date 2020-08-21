import React from "react";
import PropTypes from "prop-types";

class CurrentTodo extends React.Component {
	//NEW: Voici ma meilleure méthode. Utiliser une méthod que l'on va appeler dans parmi notre code JSX
	getStyle() {
		const styleObj = {
			backgroundColor: "rgba(40, 44, 52, 0.3)",
			borderBottom: "1px dotted #CCC",
			padding: "1rem",
			textDecoration: this.props.todoProp.completed ? "line-through" : "none"
		};
		return styleObj;
	}

	render() {
		return <h4 style={this.getStyle()}>{this.props.todoProp.title}</h4>;
	}
}

CurrentTodo.propTypes = {
	todoProp: PropTypes.object.isRequired
};

export default CurrentTodo;
