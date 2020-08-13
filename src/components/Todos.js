import React from "react";

class Todos extends React.Component {
	render() {
		// NEW: Unlike Vue, we don't declare a props property with the name of our prop in the child component. Under the hood, the props are just there and we have access to them. Très sous-entendu, pas comme Vue.
		// we can also put this.props.todosProp in its own variable if needed
		// we can also put all this logic in its own variable and just render the variable. We can do many tings
		console.log(this.props.todosProp);
		return this.props.todosProp.map((currentTodo) => {
			return <span key={currentTodo.id}>{currentTodo.title}</span>;
		});
	}
}

export default Todos;
