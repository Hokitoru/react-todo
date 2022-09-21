import React from 'react';
import classes from './style.module.scss';
import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";
import Check from "../UI/Check/Check";
import star from '../../../src/images/star.svg'

const TaskList = () => {
    const dispatch = useDispatch();
    const taskList = useSelector(state => state.task.task);
    console.log(taskList);


    return (
        <div className={classes.container}>
            {
                <div className={classes.taskList}>
                    {
                        taskList.map(elem => <div className={classes.taskListItem} key={elem.id}>
                            <div>
                                <Check></Check>
                                <div>
                                    <div>
                                        <h3>{elem.taskText}</h3>
                                        {
                                            elem.date === null ? 'Задачи' : elem.date
                                        }
                                    </div>
                                    <img src={star} alt="star"/>
                                </div>
                            </div>
                            {/*Сюда вставить дату*/}
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