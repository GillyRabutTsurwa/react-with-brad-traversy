import Button from "./Button";
function Header(props) {
    const cliquer = (e) => {
        const { target } = e;
        console.log("cliqué");
        console.log(e);
        console.log(target);
    };
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button btnPress={cliquer} />
        </header>
    );
}

export default Header;
