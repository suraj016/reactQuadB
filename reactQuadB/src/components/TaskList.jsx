import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/slices/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {tasks.length === 0 ? <p>No tasks added yet! 🎯</p> : null}
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.text} ({task.priority})
          </span>
          <button onClick={() => dispatch(deleteTask(task.id))}>❌</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
