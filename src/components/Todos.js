import React from "react";
import CurrentTodo from "./CurrentTodo";
import PropTypes from "prop-types";

class Todos extends React.Component {
	render() {
		return this.props.todosProp.map((currentTodo) => {
			// NEW: Instead of passing a string as a prop, I'm passing in the whole object
			return <CurrentTodo key={currentTodo.id} todoProp={currentTodo} />;
		});
	}
}

// We use propTypes to configure our props, similar to the props array or object in VueJS.
// Don't forget to import it up top
// Syntaxe (that I know of so far)
/**
 * {ComponentName}.propTypes = {
 * 		{propName}: Proptypes.{typeOfProp}.isRequired
 * }
 * is required is like required: true in Vue, indicating we must have this prop in the component
 */

// Good practise for strictening your props
Todos.propTypes = {
	todosProp: PropTypes.array.isRequired
};

export default Todos;
