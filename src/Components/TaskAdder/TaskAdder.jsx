import React, {useContext, useState} from 'react';
import classes from './style.module.scss'
import Check from "../UI/Check/Check";
import Calendar from "../UI/Calendar/Calendar";
import AddButton from "../UI/AddButton/AddButton";
import {useDispatch, useSelector} from "react-redux";
import {addTaskAction} from "../Store/taskReducer";
import {store} from "../Store";


const TaskAdder = () => {
    const dispatch = useDispatch();
    const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

    const [taskText, setTaskText] = useState('');
    const [taskInfo, setTaskInfo] = useState({});

    const createTask = () => {
        if(taskInfo.hasOwnProperty('date')){
            dispatch(addTaskAction({...taskInfo, taskText, createTime: new Date(), id: generateId(), completed: false, important: false,}));
        }else{
            dispatch(addTaskAction({taskText, createTime: new Date(), id: generateId(), completed: false, important: false, date: null}));
        }
    }


    return (
        <div className={classes.container}>
            <div className={classes.inputTask}>
                <input onChange={event => setTaskText(event.target.value)} placeholder={'Add Task'} type="text"/>
            </div>
            <div className={classes.optionsBackground}>
                <div className={classes.options}>
                    <Calendar taskInfo={taskInfo} setTaskInfo={setTaskInfo}></Calendar>
                    <AddButton onClick={createTask}></AddButton>
                </div>
            </div>
        </div>
    );
};

export default TaskAdder;