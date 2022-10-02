import React from 'react';
import classes from './style.module.scss';
import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";
import Check from "../UI/Check/Check";
import {changeCurrentTaskAction, changeImportantTaskAction, completeTaskAction} from "../Store/taskReducer";
import Star from "../UI/Star/Star";

const TaskList = ({onClick}) => {
    const dispatch = useDispatch();
    const taskList = useSelector(state => state.task.task).filter(elem => elem.completed === false);

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
            {
                <div>
                    {
                        taskList.map(elem => <div className={classes.taskListItem} key={elem.id} onClick={() => {changeCurrentTask(elem.id); onClick()}}>
                            <div>
                                <Check completed={elem.completed} onClick={() => changeComplete(elem.id)}></Check>
                                <div>
                                    <div>
                                        <h3>{elem.taskText}</h3>
                                        {
                                            elem.date === null ? 'Задачи' : dayjs(elem.date).format('dddd, D MMMM')
                                        }
                                    </div>
                                    <Star onClick={() => changeImportant(elem.id)}/>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            }
        </div>
    );
};

export default TaskList;