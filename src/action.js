export const addTask = (task) => ({
    type:'ADD_TASK',
    payload: task
    
})
export const toggleTask = taskId => ({
    type: 'TOGGLE_TASK',
    payload: taskId
  });

export const removeTask = taskId => ({
    type: 'REMOVE_TASK',
    payload: taskId
  });

export const updateTask = task => ({
    type: 'UPDATE_TASK',
    payload: task
  });