import React, {useState} from 'react';
import classes from './style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import Check from "../UI/Check/Check";
import dayjs from "dayjs";
import Star from "../UI/Star/Star";
import Arrow from "../UI/Arrow/Arrow";
import {changeImportantTaskAction, completeTaskAction} from "../Store/taskReducer";

const CompletedTaskList = () => {
    const dispatch = useDispatch();

    const taskList = useSelector(state => state.task.task).filter(task => task.completed === true);
    const [taskListSwitcher, setTaskListSwitcher] = useState(false);

    const changeSwitcher = () =>{
        setTaskListSwitcher(!taskListSwitcher);
    }

    const changeComplete = (id) => {
        dispatch(completeTaskAction(id));
    }

    console.log(taskList);

    const changeImportant = (id) => {
        dispatch(changeImportantTaskAction(id));
    }

    return <div className={classes.container}>
        {
            taskList.length !== 0 ?
                <div className={classes.taskListContainer}>
                    <div>
                        <div>
                            <Arrow onClick={() => changeSwitcher()}></Arrow>
                            <p>Выполнено {taskList.length}</p>
                        </div>
                    </div>
                    {
                        taskListSwitcher === true ?
                            <div className={classes.completedTaskList}>
                                {
                                    taskList.map(task =>
                                        <div className={classes.completedTaskListItem}>
                                            <div>
                                                <Check onClick={() => changeComplete(task.id)}></Check>
                                                <div>
                                                    <div>
                                                        <h3>{task.taskText}</h3>
                                                        {
                                                            task.date === null ? 'Задачи' : dayjs(task.date).format('dddd, D MMMM')
                                                        }
                                                    </div>
                                                    <Star onClick={() => changeImportant(task.id)}/>
                                                </div>
                                            </div>
                                        </div>)
                                }
                            </div> :
                            ''
                    }
                </div> : ''
        }
    </div>;
};

export default CompletedTaskList;