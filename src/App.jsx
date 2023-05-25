import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
    return (
        <>
            <Header title="Task Tracker" />
            <Tasks />
        </>
    );
}

export default App;
