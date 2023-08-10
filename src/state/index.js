import { createStore } from "redux";

const intialState = {
    tasks:[]
}

const taskReducer = (state=intialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
            case 'TOGGLE_TASK':
                return {
                  ...state,
                  tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                  )
                };
            case 'REMOVE_TASK':
                return {
                  ...state,
                  tasks: state.tasks.filter(task => task.id !== action.payload)
                };

            case 'UPDATE_TASK':
                return {
                    ...state,
                    tasks: state.tasks.map((task) => (
                        task.id === action.payload.id ? action.payload:task
                    ))
                };
            default:
                return state
        }
}

const store = createStore(taskReducer)
export default store;