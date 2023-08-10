import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, updateTask, removeTask } from '../action';
import '../App.css'; 

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleToggle = taskId => {
    dispatch(toggleTask(taskId));
  };

  const handleEdit = (taskId, newText) => {
    dispatch(updateTask({ id: taskId, text: newText }));
  };

  const handleRemove = taskId => {
    dispatch(removeTask(taskId));
  };

  return (
    <ul className="task-list">
      {tasks && (tasks.map(task => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <span>{task.text}</span>
          <button onClick={() => handleEdit(task.id, prompt('Edit task:', task.text))}>Edit</button>
          <button onClick={() => handleRemove(task.id)}>Delete</button>
        </li>
      )))}
    </ul>
  );
};

export default TaskList;
