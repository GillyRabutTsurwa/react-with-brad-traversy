import Task from "./Task";
function Tasks(props) {
    const { tasks } = props;
    return (
        <>
            {tasks.map((currentTask) => {
                return <Task key={currentTask.id} task={currentTask} />;
            })}
        </>
    );
}

export default Tasks;
