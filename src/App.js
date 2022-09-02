import Nav from "./Components/Nav/Nav";
import Time from "./Components/Time/Time";
import React, {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import dayjs from "dayjs";

function App() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [date, setDate] = useState('');
    const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

    const renderTask = () => {
        if(task !== {}){
            setTaskList([...taskList, {task, id: generateId(), date}]);
        }
    }

    const addTask = (event) => {
        setTask(event);
    }

    const getDate = (event) => {
        setDate(event);
    }

  return (
      <div>
          <Nav></Nav>
          <div>
              <h2>My day</h2>
              <button>Сортировка</button>
          </div>
          <div>
              <input type="text" placeholder={'Добавить задачу'} onChange={event => addTask(event.target.value)}/>
              <div>
                  <Calendar minDate={new Date} onChange={event => getDate(event)}/>
                  <button onClick={() => renderTask(task)}>Добавить</button>
              </div>
          </div>
          {
              taskList.length > 0 ? <div>{taskList.map(elem => <div key={elem.id}><button>Выполнено</button><div><div>{elem.task}</div><div>{dayjs(elem.date).format('D MMMM')}</div></div><button>Удалить</button></div>)}</div> : ''
          }
      </div>
  );
}

export default App;
