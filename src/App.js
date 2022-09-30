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

function App() {
    
  return (
      <div>
          <Nav></Nav>
          <Time></Time>
          <TaskAdder></TaskAdder>
          <TaskList></TaskList>
          <CompletedTaskList></CompletedTaskList>
      </div>
  );
}
// task, id: generateId(), date, completed: false, createTime, important
export default App;

//TODO стили
//TODO поиск таск
//TODO Настройки
//TODO сортировка