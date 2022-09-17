import React from 'react';
import classes from './style.module.scss'
import Check from "../UI/Check/Check";
import Calendar from "../UI/Calendar/Calendar";
import AddButton from "../UI/AddButton/AddButton";

const TaskAdder = () => {
    return (
        <div className={classes.container}>
            <div className={classes.inputTask}>
                <Check></Check>
                <input type="text"/>
            </div>
            <div className={classes.optionsBackground}>
                <div className={classes.options}>
                    <Calendar></Calendar>
                    <AddButton></AddButton>
                </div>
            </div>
        </div>
    );
};

export default TaskAdder;