import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../action';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: taskText, completed: false }));
      setTaskText('');
    }
  };

  return (
    <div className="add-form">
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskForm;
