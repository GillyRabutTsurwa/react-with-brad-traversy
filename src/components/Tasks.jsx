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

function Tasks() {
    const [tasks, setTasks] = useState(myTasks);
    return (
        <>
            {tasks.map((currentTask) => {
                return <h3 key={currentTask.id}>{currentTask.text}</h3>;
            })}
        </>
    );
}

export default Tasks;
