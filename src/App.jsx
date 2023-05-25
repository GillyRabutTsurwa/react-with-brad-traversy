import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
const myTasks = [
    {
        id: 1,
        text: "Doc's Appointment",
        day: "who cares",
        reminder: true,
    },
    {
        id: 2,
        text: "Weekend Tings",
        day: "who cares",
        reminder: true,
    },
    {
        id: 3,
        text: "Take the bin out",
        day: "who cares",
        reminder: true,
    },
];

function App() {
    const [tasks, setTasks] = useState(myTasks);
    return (
        <>
            <Header title="Task Tracker" />
            <Tasks tasks={tasks} />
        </>
    );
}

export default App;
