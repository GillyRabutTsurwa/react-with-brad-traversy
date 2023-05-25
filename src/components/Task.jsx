import { FaTimes } from "react-icons/fa";
function Task(props) {
    const { task } = props;
    const { text, day } = task; //NOTE: task is an object
    return (
        <div className="task">
            <h3>
                <span>{text}</span>
                <FaTimes style={{ color: "red", cursor: "pointer" }} />
            </h3>
            <p>{day}</p>
        </div>
    );
}

export default Task;
