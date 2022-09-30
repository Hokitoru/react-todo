import React, {useState} from 'react';
import classes from './style.module.scss'
import Calendar from "../UI/Calendar/Calendar";
import AddButton from "../UI/AddButton/AddButton";
import {useDispatch} from "react-redux";
import {addTaskAction} from "../Store/taskReducer";


const TaskAdder = () => {
    const dispatch = useDispatch();
    const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

    const [taskText, setTaskText] = useState('');
    const [taskInfo, setTaskInfo] = useState({});
    const [date, setDate] = useState(null);

    const createTask = () => {
        if(taskInfo.hasOwnProperty('date')){
            dispatch(addTaskAction({...taskInfo, taskText, createTime: new Date(), id: generateId(), completed: false, important: false, description: null,}));
        }else{
            dispatch(addTaskAction({taskText, createTime: new Date(), id: generateId(), completed: false, important: false, date: null, description: null,}));
        }

        setDate(null);
        setTaskInfo({});
    }

    return (
        <div className={classes.container}>
            <div className={classes.inputTask}>
                <input onChange={event => setTaskText(event.target.value)} placeholder={'Add Task'} type="text"/>
            </div>
            <div className={classes.optionsBackground}>
                <div className={classes.options}>
                    <Calendar setTaskInfo={setTaskInfo} date={date} setDate={setDate}></Calendar>
                    <AddButton onClick={createTask}></AddButton>
                </div>
            </div>
        </div>
    );
};

export default TaskAdder;