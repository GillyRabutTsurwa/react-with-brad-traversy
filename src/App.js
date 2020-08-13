import React, { Component } from "react";
import Todos from "./components/Todos";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
	state = {
		name: "Gilbert"
	};

	logInfo() {
		console.log(this);
	}

	componentDidMount() {
		this.logInfo();
	}

	render() {
		return (
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />
				<Todos />
				<h2>I will make more components in this branch</h2>
			</div>
		);
	}
}
