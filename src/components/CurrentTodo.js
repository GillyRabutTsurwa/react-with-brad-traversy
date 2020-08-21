import React from "react";
import PropTypes from "prop-types";

class CurrentTodo extends React.Component {
	constructor(props) {
		super(props);
		this.markComplete = this.markComplete.bind(this);
	}

	getStyle() {
		const styleObj = {
			backgroundColor: "rgba(40, 44, 52, 0.3)",
			borderBottom: "1px dotted #CCC",
			padding: "1rem",
			textDecoration: this.props.todoProp.completed ? "line-through" : "none"
		};
		return styleObj;
	}

	//NEW: Method for the change checkbox event
	//markComplete(e) {
	//console.log(this); // prints out undefined
	//console.log(this.props); // prints an error that reads along the lines of "can't read property props of undefined"
	// NOTE:This is because when it comes for events, the method does not know what this is. It doesn't point to the component. To solve this, we need to bind our method to the React Component Object..
	//NOTE: This function will be commented out and recreated below. Read these notes if you need to refresh.
	//}

	markComplete(e) {
		console.log(this);
		this.props.todoProp.completed = !this.props.todoProp.completed;
	}

	render() {
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.markComplete} />
					{this.props.todoProp.title}
				</p>
			</div>
		);
	}
}

CurrentTodo.propTypes = {
	todoProp: PropTypes.object.isRequired
};

export default CurrentTodo;
