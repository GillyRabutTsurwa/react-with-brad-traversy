import React, { Component } from "react";
import Todos from "./components/Todos";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
	// NOTE: C'est comme "data" en Vue.
	state = {
		todos: [
			{
				id: 1,
				title: "Take out the rubbish",
				completed: false
			},
			{
				id: 2,
				title: "Buy groceries",
				completed: false
			},
			{
				id: 3,
				title: "Fix the roof",
				completed: false
			}
		]
	};

	render() {
		//NOTE: I get it. the return section is for JSX only.
		// stuff inside the render and outside the return is where you can do console.log(), declare variables for your state, etc etc etc.
		console.log(this.state.todos);
		return (
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />
				<Todos />
				<h2>Play around with state if needed</h2>
			</div>
		);
	}
}
