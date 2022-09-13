import Nav from "./Components/Nav/Nav";
import Time from "./Components/Time/Time";
import React, {useState} from "react";
import dayjs from "dayjs";
import {addTaskAction, completeTaskAction, removeTaskAction} from "./Components/Store/taskReducer";
import {useDispatch, useSelector} from "react-redux";
import Search from "./Components/UI/Search/Search";
import SortButton from "./Components/UI/SortButton/SortButton";
import Settings from "./Components/UI/Settings/Settings";
import classes from './style.module.scss'
import Check from "./Components/UI/Check/Check";
import Calendar from "./Components/UI/Calendar/Calendar";

function App() {
    // const dispatch = useDispatch();
    // const taskList = useSelector(state => state.task);
    //
    // const [task, setTask] = useState('');
    //
    // const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);
    //
    // const createTask = () => {
    //         dispatch(addTaskAction({task, id: generateId(), date, completed: false}));
    // }
    //
    // const removeTask = (elem) => {
    //     dispatch(removeTaskAction(elem));
    // }
    //
    // const completeTask = (elem) => {
    //     dispatch(completeTaskAction(elem));
    // }
    //
    // const addTask = (event) => {
    //     setTask(event);
    // }
    //
    // const getDate = (event) => {
    //     setDate(event);
    // }
    //
    // const renderTaskList = () => {
    //     return (
    //         <div>
    //         {
    //             taskList.task.map(
    //                 elem => elem.completed === false ?
    //                     <div key={elem.id}>
    //                     <button onClick={() => completeTask(elem)}>Выполнено</button>
    //                     <div>
    //                         <div>{elem.task}</div>
    //                         <div>{elem.date === '' ? '' : dayjs(elem.date).format('D MMMM')}</div>
    //                     </div>
    //                     <button onClick={() => removeTask(elem)}>Удалить</button>
    //                 </div> : null
    //             )
    //         }
    //         </div>
    //     )
    // }

  return (
      // <div>
      //     <Nav></Nav>
      //     <div>
      //         <h2>My day</h2>
      //         <button>Сортировка</button>
      //     </div>
      //     <div>
      //         <input type="text" placeholder={'Добавить задачу'} onChange={event => addTask(event.target.value)}/>
      //         <div>
      //             <Calendar minDate={new Date()} onChange={event => getDate(event)}/>
      //             <button onClick={() => createTask(task)}>Добавить</button>
      //         </div>
      //     </div>
      //     {taskList.task.length > 0 ? renderTaskList()  : null}
      //     {
      //         taskList.task.map(elem => elem.completed === true ?
      //             <div key={elem.id}>
      //             <button onClick={() => completeTask(elem)}>Выполнено</button>
      //             <div>
      //                 <div>{elem.task}</div>
      //                 <div>{elem.date === '' ? '' : dayjs(elem.date).format('D MMMM')}</div>
      //             </div>
      //             <button onClick={() => removeTask(elem)}>Удалить</button>
      //         </div> : null)//TODO сделать отрисовку выполненных таск
      //     }
      // </div>
      <div className={classes.container}>
          <Calendar></Calendar>
      </div>
  );
}

export default App;

//TODO стили
//TODO поиск таск
//TODO Настройки
//TODO сортировка