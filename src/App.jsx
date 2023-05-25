import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Salut from "./components/Salut";

function App() {
    return (
        <>
            <img src={reactLogo} className="logo" />
            <img src={viteLogo} className="logo" />
            <Header title="Yo. The Greeting component below has a default prop" />
            <Greeting />
            <Greeting message="Un prop défini. Je m'affiche au lieu du prop defaut" />
            <Salut message="J'utilise PropTypes pour verifier les props" />
        </>
    );
}

export default App;
