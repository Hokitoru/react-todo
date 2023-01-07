import React from 'react';
import dayjs from "dayjs";
import classes from './style.module.scss'

const time = dayjs().format('dddd, D MMMM');

const Date = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>My Day</h2>
            <p className={classes.time}>{time}</p>
        </div>
    );
};

export default Date;