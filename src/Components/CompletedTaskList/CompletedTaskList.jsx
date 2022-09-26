import React from 'react';
import classes from './style.module.scss'
import {useSelector} from "react-redux";
import Check from "../UI/Check/Check";
import dayjs from "dayjs";
import Star from "../UI/Star/Star";
import Arrow from "../UI/Arrow/Arrow";

const CompletedTaskList = () => {
    const taskList = useSelector(state => state.task.task).filter(task => task.completed === true);
    const [taskListSwitcher, setTaskListSwitcher] = false;

    const changeSwitcher = () =>{
        setTaskListSwitcher(!taskListSwitcher);
    }



    return <div className={classes.container}>
        {
            taskList.length !== 0 ?
                <div className={classes.taskListContainer}>
                    <div>
                        <div>
                            <Arrow></Arrow>
                            <p>Выполнено {taskList.length}</p>
                        </div>
                    </div>
                    {
                        taskListSwitcher === true ?
                            <div className={classes.completedTaskList}>

                            </div> : ''
                    }
                </div> : ''
        }
    </div>;
};

export default CompletedTaskList;