import React, {useState} from 'react';
import classes from './style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import Check from "../UI/Check/Check";
import dayjs from "dayjs";
import Star from "../UI/Star/Star";
import {changeCurrentTaskAction, changeImportantTaskAction, completeTaskAction} from "../Store/taskReducer";
import CalendarButton from "../UI/CalendarButton/CalendarButton";

const TaskInfo = () => {
    const dispatch = useDispatch();
    const currentTask = useSelector(state => state.task.currentTask)

    const changeComplete = (id) => {
        dispatch(completeTaskAction(id));
    }

    const changeImportant = (id) => {
        dispatch(changeImportantTaskAction(id));
    }

    const changeCurrentTask = (id) => {
        dispatch(changeCurrentTaskAction(id));
    }


    return (
        <div className={classes.container}>
            <div className={classes.currentTask} key={currentTask.id} onClick={() => changeCurrentTask(currentTask.id)}>
                <div>
                    <Check completed={currentTask.completed} onClick={() => changeComplete(currentTask.id)}></Check>
                    <div>
                        <div>
                            <h3>{currentTask.taskText}</h3>
                        </div>
                        <Star onClick={() => changeImportant(currentTask.id)}/>
                    </div>
                </div>
                <CalendarButton date={currentTask.date}></CalendarButton>
            </div>
        </div>
    );
};

export default TaskInfo;