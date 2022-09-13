import React, {useState} from 'react';
import CalendarComp from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import calendarIcon from '../../../images/calendar.png'
import classes from './style.module.scss'

const Calendar = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState(null);

    return (
        <div>
            {
                showCalendar ? <div><CalendarComp minDate={new Date()}/></div> : <img onClick={() => setShowCalendar(!showCalendar)} className={classes.calendarIcon} src={calendarIcon} alt="calendar"/>
            }
        </div>
    );
};


// onChange={event => getDate(event);
export default Calendar;