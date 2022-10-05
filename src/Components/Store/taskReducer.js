const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const CHANGE_IMPORTANT = "CHANGE_IMPORTANT";
const CHANGE_CURRENT_TASK = "CHANGE_CURRENT_TASK";
const CHANGE_DATE = "CHANGE_DATE";
const CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION";

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
            const unimportantTasks = state.task.filter(task => task.id !== action.payload)
            const importantTask = {...state.task.find(task => task.id === action.payload)};
            importantTask.important = !importantTask.important;
            return {...state, task: [...unimportantTasks, importantTask]};
        case CHANGE_CURRENT_TASK:
            return {...state, task: [...state.task], currentTask: state.task.find(task => task.id === action.payload)}
        case CHANGE_DATE:
            const changeDateTask = {...state.task.find(task => task.id === state.currentTask.id)};
            const constTasks = [...state.task.filter(task => task.id !== state.currentTask.id)];
            changeDateTask.date = action.payload;
            return {...state, task: [...constTasks, changeDateTask], currentTask: changeDateTask}
        case CHANGE_DESCRIPTION:
            console.log(action.payload);
            const changeDescriptionTask = {...state.task.find(task => task.id === state.currentTask.id)};
            const constTasksDescription = [...state.task.filter(task => task.id !== state.currentTask.id)]
            changeDescriptionTask.description = action.payload.description;
            return {...state, task: [...constTasksDescription, changeDescriptionTask], currentTask: changeDescriptionTask}
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

export const changeCurrentTaskAction = (payload) => {
    return {type: CHANGE_CURRENT_TASK, payload}
}

export const changeDateAction = (payload) => {
    return {type: CHANGE_DATE, payload}
}

export const changeDescriptionAction = (payload) => {
    return {type: CHANGE_DESCRIPTION, payload}
}
const defaultState = {
    task: [],
    currentTask: {},
}