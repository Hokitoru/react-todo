import React, {useEffect} from 'react';
import classes from './style.module.scss';
import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";
import Check from "../UI/Check/Check";
import star from '../../../src/images/star.svg'
import {changeImportantTaskAction, completeTaskAction} from "../Store/taskReducer";
import Star from "../UI/Star/Star";

const TaskList = () => {
    const dispatch = useDispatch();
    const taskList = useSelector(state => state.task.task).filter(elem => elem.completed === false);

    const changeComplete = (id) => {
        dispatch(completeTaskAction(id));
    }

    console.log(taskList);

    const changeImportant = (elem) => {
        dispatch(changeImportantTaskAction(elem));
    }

    return (
        <div className={classes.container}>
            {
                <div>
                    {
                        taskList.map(elem => <div className={classes.taskListItem} key={elem.id}>
                            <div>
                                <Check onClick={() => changeComplete(elem.id)}></Check>
                                <div>
                                    <div>
                                        <h3>{elem.taskText}</h3>
                                        {
                                            elem.date === null ? 'Задачи' : dayjs(elem.date).format('dddd, D MMMM')
                                        }
                                    </div>
                                    <Star onClick={() => changeImportant(elem)}/>
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

{/*<p>*/}
{/*    {*/}
{/*        elem.date === null ? '' : elem.date*/}
{/*    }*/}
{/*</p>*/}