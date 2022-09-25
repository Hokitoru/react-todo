const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const CHANGE_IMPORTANT = "CHANGE_IMPORTANT";

export const taskReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_TASK:
            return {...state, task: [...state.task, action.payload]};
        case REMOVE_TASK:
            return {...state, task: [...state.task.filter(elem => elem.id !== action.payload.id)]};
        case COMPLETE_TASK:
            const uncompletedTasks = state.task.filter(task => task.id !== action.payload);
            const completedTask = {...state.task.find(task => task.id === action.payload)};
            completedTask.completed = !completedTask.completed;
            return {...state, task: [...uncompletedTasks, completedTask]};
        case CHANGE_IMPORTANT:
            const importantChanger = {...state,};
            const importantIndex = importantChanger.task.findIndex(task => task.id === action.payload.id);
            importantChanger.task[importantIndex].important = !importantChanger.task[importantIndex].important;
            return importantChanger;
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

export const changeImportantTaskAction = (payload) => {
    return {type: CHANGE_IMPORTANT, payload}
}

const defaultState = {
    task: [],
}