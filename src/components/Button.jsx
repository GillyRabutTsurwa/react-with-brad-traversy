import { PropTypes } from "prop-types";

function Button(props) {
    const { text = "Add", colour = "crimson", btnPress } = props;
    return (
        <button onClick={btnPress} style={{ backgroundColor: colour }} className="btn">
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    colour: PropTypes.string,
    btnPress: PropTypes.func.isRequired,
};

export default Button;
