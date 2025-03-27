
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/slices/authSlice";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import WeatherInfo from "./components/WeatherInfo";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      {isAuthenticated ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <h1>To-Do List</h1>
          <TaskInput />
          <TaskList />
          <WeatherInfo city="Delhi" />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
