import { PropTypes } from "prop-types";

function Button(props) {
    const { text, colour = "crimson" } = props;
    return (
        <button style={{ backgroundColor: colour }} className="btn">
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    colour: PropTypes.string,
};

export default Button;
