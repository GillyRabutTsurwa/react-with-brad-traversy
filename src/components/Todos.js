import React from "react";
import CurrentTodo from "./CurrentTodo";

class Todos extends React.Component {
	render() {
		console.log(this.props.todosProp);
		return this.props.todosProp.map((currentTodo) => {
			// NEW: My favourite thing to do with JS frameworks. Vue, React, Svelte, all of them: rendering components through a loop
			// key property is like v-bind:key in Vue
			return <CurrentTodo key={currentTodo.id} titleProp={currentTodo.title} />;
		});
	}
}

export default Todos;
