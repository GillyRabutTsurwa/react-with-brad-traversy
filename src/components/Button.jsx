import { PropTypes } from "prop-types";

const cliquer = (e) => {
    const { target } = e;
    console.log("cliqué");
    console.log(e);
    console.log(target);
};

function Button(props) {
    const { text = "Add", colour = "crimson" } = props;
    return (
        <button onClick={cliquer} style={{ backgroundColor: colour }} className="btn">
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    colour: PropTypes.string,
};

export default Button;
