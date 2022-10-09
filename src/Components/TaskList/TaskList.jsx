import React from 'react';
import classes from './style.module.scss';
import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";
import Check from "../UI/Check/Check";
import {changeCurrentTaskAction, changeImportantTaskAction, completeTaskAction} from "../Store/taskReducer";
import Star from "../UI/Star/Star";

const TaskList = ({onClick}) => {
    const dispatch = useDispatch();
    const search = new RegExp(useSelector(state => state.task.search), 'i');
    const sort = useSelector(state => state.task.sort);
    let taskList = useSelector(state => state.task.task).filter(elem => elem.completed === false && search.test(elem.taskText));

    const sortImportance = () => {
        const importantTasks = taskList.filter(task => task.important === true);
        const unimportantTasks = taskList.filter(task => task.important === false)
        return [...importantTasks, ...unimportantTasks];
    }

    const sortCreateDate = () => {
        return [...taskList.sort((a, b) => {return a.createTime - b.createTime})]
    }

    const sortCompleteDate = () => {
        const taskWithDate = taskList.filter(task => task.date !== null);
        const taskWithoutDate = taskList.filter(task => task.date === null);
        return [...taskWithDate.sort((a, b) => {return a.date - b.date}), ...taskWithoutDate]
    }

    const changeComplete = (id, e) => {
        dispatch(completeTaskAction(id));
        e.stopPropagation();
    }

    const changeImportant = (id, e) => {
        dispatch(changeImportantTaskAction(id));
        e.stopPropagation();
    }

    const changeCurrentTask = (id) => {
        dispatch(changeCurrentTaskAction(id));
    }

    if(sort === 1){
        taskList = sortImportance();
    }else if(sort === 2){
        taskList = sortCreateDate();
    }else if(sort === 3){
        taskList = sortCompleteDate();
    }

    return (
        <div className={classes.container}>
            {
                <div>
                    {
                        taskList.map(elem => <div className={classes.taskListItem} key={elem.id} onClick={() => {changeCurrentTask(elem.id); onClick()}}>
                            <div>
                                <Check completed={elem.completed} onClick={(e) => changeComplete(elem.id, e)}></Check>
                                <div>
                                    <div>
                                        <h3>{elem.taskText}</h3>
                                        {
                                            elem.date === null ? 'Задачи' : dayjs(elem.date).format('dddd, D MMMM')
                                        }
                                    </div>
                                    <Star importance={elem.important} onClick={(e) => changeImportant(elem.id, e)}/>
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