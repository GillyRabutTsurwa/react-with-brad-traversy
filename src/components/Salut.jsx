import { PropTypes } from "prop-types";

function Salut() {
    return (
        <>
            <div>Salut</div>
            <p>Je m'appelle Gilbert et je suis developpeur</p>
        </>
    );
}

Salut.propTypes = {
    message: PropTypes.string, //NOTE: si message n'est pas une chaîne, une erreur se fera
};

export default Salut;
