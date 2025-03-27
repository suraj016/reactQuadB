import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      dispatch(addTask({ id: Date.now(), text: task, priority, completed: false }));
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task..."
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">🔥 High</option>
        <option value="Medium">⚡ Medium</option>
        <option value="Low">✅ Low</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
