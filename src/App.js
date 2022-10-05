import Nav from "./Components/Nav/Nav";
import Time from "./Components/Time/Time";
import React, {createContext, useContext, useState} from "react";
import dayjs from "dayjs";
import {addTaskAction, completeTaskAction, removeTaskAction} from "./Components/Store/taskReducer";
import {Provider, useDispatch, useSelector} from "react-redux";
import Search from "./Components/UI/Search/Search";
import SortButton from "./Components/UI/SortButton/SortButton";
import Settings from "./Components/UI/Settings/Settings";
import classes from './style.module.scss'
import Check from "./Components/UI/Check/Check";
import Calendar from "./Components/UI/Calendar/Calendar";
import TaskAdder from "./Components/TaskAdder/TaskAdder";
import AddButton from "./Components/UI/AddButton/AddButton";
import taskInfo from '../src/Components/UI/Calendar/Calendar'
import {store} from "./Components/Store";
import TaskList from "./Components/TaskList/TaskList";
import CompletedTaskList from "./Components/CompletedTaskList/CompletedTaskList";
import Arrow from "./Components/UI/Arrow/Arrow";
import TaskInfo from "./Components/TaskInfo/TaskInfo";
import Scrollbar from 'react-scrollbars-custom'

function App() {
    const [taskInfoSwitcher, setTaskInfoSwitcher] = useState(false);


  return (
      <div className={classes.container}>
          <Nav></Nav>
          <div>
              <div>
                  <div>
                      <Time></Time>
                      <TaskAdder></TaskAdder>
                  </div>
                  <div>
                      <TaskList onClick={() => setTaskInfoSwitcher(!taskInfoSwitcher)}></TaskList>
                      <CompletedTaskList onClick={() => setTaskInfoSwitcher(!taskInfoSwitcher)}></CompletedTaskList>
                  </div>
              </div>
              <div className={taskInfoSwitcher ? classes.taskInfoVisible : classes.taskInfo}>
                  <TaskInfo></TaskInfo>
              </div>
          </div>
      </div>
  );
}
export default App;
