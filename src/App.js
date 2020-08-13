import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
	state = {
		name: "Gilbert"
	};

	logInfo() {
		console.log(this);
	}

	componentDidMount() {
		this.logInfo();
	}

	// Render is a lifecycle method
	// Only required lifecycle method as it is needed to render component to browser
	// This render component returns JSX. Looks like HTML, but it isn't. Looks a bit like Vue (as for as binding an displaying js variables).
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Voici l'application débutant de React.</p>
					<h3>Hello, my name is {this.state.name}</h3>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
