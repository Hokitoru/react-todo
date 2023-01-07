import React, {useState} from 'react';
import okay from '../../../images/okay.svg'
import classes from './style.module.scss'

const Check = ({onClick, completed}) => {


    return (
        <div>
            {
                completed === false ? <div onClick={onClick} className={classes.circle}></div> : <div onClick={onClick} className={classes.complete}></div>
            }
        </div>
    );
};

export default Check;