import React, {useState} from 'react';
import classes from './style.module.scss'
import Calendar from '../../../images/calendar.png'
import dayjs from "dayjs";
import CalendarComp from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {changeDateAction} from "../../../Store/taskReducer";
import {useDispatch, useSelector} from "react-redux";

const CalendarButton = () => {
    const dispatch = useDispatch();
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentDate, setCurrentDate] = useState(useSelector(state => state.task.currentTask.date));


    const changeDate = (event) => {
        setShowCalendar(!showCalendar);
        setCurrentDate(event);
        dispatch(changeDateAction(event));
    }

    return (
        <div>
            {
                !showCalendar ?
                    <button onClick={() => setShowCalendar(!showCalendar)} className={classes.container}><img src={Calendar} alt="Calendar"/>{currentDate === null ? 'Добавить дату выполнения' : dayjs(currentDate).format('dddd, D MMMM')}</button> : <CalendarComp onChange={event => changeDate(event)} value={currentDate} minDate={new Date()}></CalendarComp>
            }
        </div>
    );
};

export default CalendarButton;