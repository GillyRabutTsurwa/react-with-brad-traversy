function Header(props) {
    const subHeaderStyles = {
        color: "gold",
        textTransform: "uppercase",
    };

    return (
        <>
            <header>
                <h1 style={{ color: "cornflowerblue" }}>{props.title}</h1>
                <h2 style={subHeaderStyles}>SubHeading Tings</h2>
            </header>
        </>
    );
}

export default Header;
