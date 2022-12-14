import React, {useState} from 'react';
import CalendarComp from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import calendarIcon from '../../../images/calendar.png'
import classes from './style.module.scss'

const Calendar = ({setTaskInfo, date, setDate}) => {
    const [showCalendar, setShowCalendar] = useState(false);


    const changeDate = (event) => {
        setDate(event);
        setShowCalendar(false);
        setTaskInfo({date: event});
    }

    return (
        <div className={classes.container}>
            <img onClick={() => setShowCalendar(!showCalendar)} className={classes.calendarIcon} src={calendarIcon} alt="calendar"/>
            {
                showCalendar ? <div className={classes.calendarBlock}><CalendarComp onChange={event => changeDate(event)} value={date} minDate={new Date()}/></div> : ''
            }
        </div>
    );
};

export default Calendar;