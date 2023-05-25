import Button from "./Button";
function Header(props) {
    const subHeaderStyles = {
        color: "gold",
        textTransform: "uppercase",
    };

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button text="Hello" colour="green" />
            <Button text="Hola" colour="lightcoral" />
            <Button text="Salut" colour="cornflowerblue" />
            <Button text="Yo" />
        </header>
    );
}

export default Header;
