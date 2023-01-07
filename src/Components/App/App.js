import Nav from "../Shared/Nav/Nav";
import Time from "../Shared/Time/Time";
import React, {useState} from "react";
import SortButton from "../Shared/SortButton/SortButton";
import classes from './style.module.scss'
import TaskAdder from "../Tasks/TaskAdder/TaskAdder";
import TaskList from "../Tasks/TaskList/TaskList";
import CompletedTaskList from "../Tasks/CompletedTaskList/CompletedTaskList";
import TaskInfo from "../Tasks/TaskInfo/TaskInfo";


function App() {
    const [taskInfoSwitcher, setTaskInfoSwitcher] = useState(false);

    return (
        <div className={classes.container}>
            <Nav/>
            <div>
                <div>
                    <div>
                        <div>
                            <Time/>
                            <SortButton/>
                        </div>
                        <TaskAdder/>
                    </div>
                    <div>
                        <TaskList taskInfoSwitcher={taskInfoSwitcher} onClick={(bool) => setTaskInfoSwitcher(bool)}/>
                        <CompletedTaskList taskInfoSwitcher={taskInfoSwitcher} onClick={(bool) => setTaskInfoSwitcher(bool)}/>
                    </div>
                </div>
                <div className={taskInfoSwitcher ? classes.taskInfoVisible : classes.taskInfo}>
                    <TaskInfo/>
                </div>
            </div>
        </div>
    );
}
export default App;
