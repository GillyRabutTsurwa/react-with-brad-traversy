import React from "react";
import CurrentTodo from "./CurrentTodo";
import PropTypes from "prop-types";

class Todos extends React.Component {
	render() {
		// Unecessary but for learning, sa va
		let topMarge = {
			marginTop: "2rem"
		};
		return (
			<div style={topMarge}>
				{this.props.todosProp.map((currentTodo) => {
					return <CurrentTodo key={currentTodo.id} todoProp={currentTodo} />;
				})}
			</div>
		);
	}
}

// Good practise for strictening your props
Todos.propTypes = {
	todosProp: PropTypes.array.isRequired
};

export default Todos;
