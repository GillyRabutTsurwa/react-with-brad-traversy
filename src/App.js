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
		return (
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />
				{/* NEW: Props. Just like Vue */}
				<Todos todosProp={this.state.todos} />
				<h2>Play around with state if needed</h2>
			</div>
		);
	}
}
