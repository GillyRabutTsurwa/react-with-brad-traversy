import React from "react";
import PropTypes from "prop-types";

class CurrentTodo extends React.Component {
	render() {
		//NEW: Une méthode pour intégrer les styles. Créer un objet juste ici.
		// On peut probablement faire le styling conditionel ici, mais je préfère ne pas le faire
		let myStyles = {
			color: "forestgreen",
			textTransform: "uppercase"
		};

		return <h4 style={myStyles}>{this.props.todoProp.title}</h4>;
	}
}

CurrentTodo.propTypes = {
	todoProp: PropTypes.object.isRequired
};

export default CurrentTodo;
