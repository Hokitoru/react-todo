const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";

export const taskReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_TASK:
            return {...state, task: [...state.task, action.payload]};
        case REMOVE_TASK:
            return {...state, task: [...state.task.filter(elem => elem.id !== action.payload.id)]};
        case COMPLETE_TASK:
            const newState = {...state,}
            const taskIndex = newState.task.findIndex(task => task.id === action.payload.id);
            newState.task[taskIndex].completed = true;
            return newState;
        default:
            return state;
    }
}

export const addTaskAction = (payload) => {
    return {type: ADD_TASK, payload}
}

export const removeTaskAction = (payload) => {
    return {type: REMOVE_TASK, payload}
}

export const completeTaskAction = (payload) => {
    return {type: COMPLETE_TASK, payload}
}

const defaultState = {
    task: [],
}