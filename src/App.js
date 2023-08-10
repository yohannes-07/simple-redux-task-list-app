import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './state';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Task List</h1>
        <TaskForm />
        <TaskList />
    </div>
    </Provider>
  );
}

export default App;
