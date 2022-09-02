import React from 'react';
import dayjs from "dayjs";

const time = dayjs().format('dddd, D MMMM');

const Date = () => {
    return (
        <div>
            {time}
        </div>
    );
};

export default Date;