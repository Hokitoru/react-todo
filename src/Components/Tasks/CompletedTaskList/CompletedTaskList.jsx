import React, {useState} from 'react';
import classes from './style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import Check from "../../Shared/Check/Check";
import dayjs from "dayjs";
import Star from "../../Shared/Star/Star";
import Arrow from "../../Shared/Arrow/Arrow";
import {changeCurrentTaskAction, changeImportantTaskAction, completeTaskAction} from "../../../Store/taskReducer";

const CompletedTaskList = ({taskInfoSwitcher, onClick}) => {
    const dispatch = useDispatch();
    const search = new RegExp(useSelector(state => state.task.search), 'i');
    const sort = useSelector(state => state.task.sort);
    const [taskListSwitcher, setTaskListSwitcher] = useState(false);
    const currentTaskId = useSelector(state => state.task.currentTask.id);
    let taskList = useSelector(state => state.task.task).filter(task => task.completed === true && search.test(task.taskText));

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

    if(sort === 1){
        taskList = sortImportance();
    }else if(sort === 2){
        taskList = sortCreateDate();
    }else if(sort === 3){
        taskList = sortCompleteDate();
    }

    const changeSwitcher = () =>{
        setTaskListSwitcher(!taskListSwitcher);
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

    return <div className={classes.container}>
        {
            taskList.length !== 0 ?
                <div className={classes.taskListContainer}>
                    <div className={!taskListSwitcher ? classes.taskListBorder : null}>
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
                                        <div key={task.id} className={classes.completedTaskListItem} onClick={() => {
                                            if(task.id === currentTaskId){
                                                onClick(!taskInfoSwitcher);
                                            }else{
                                                changeCurrentTask(task.id);
                                                onClick(true);
                                            }
                                        }}>
                                            <div>
                                                <Check completed={task.completed} onClick={(e) => changeComplete(task.id, e)}></Check>
                                                <div>
                                                    <div>
                                                        <h3>{task.taskText}</h3>
                                                        {
                                                            task.date === null ? 'Задачи' : dayjs(task.date).format('dddd, D MMMM')
                                                        }
                                                    </div>
                                                    <Star importance={task.important} onClick={(e) => changeImportant(task.id, e)}/>
                                                </div>
                                            </div>
                                        </div>)
                                }
                            </div> :
                            null
                    }
                </div> : null
        }
    </div>;
};

export default CompletedTaskList;