function Tasks(props) {
    const { tasks } = props;
    return (
        <>
            {tasks.map((currentTask) => {
                return <h3 key={currentTask.id}>{currentTask.text}</h3>;
            })}
        </>
    );
}

export default Tasks;
