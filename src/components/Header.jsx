import Button from "./Button";
function Header(props) {
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button />
        </header>
    );
}

export default Header;
