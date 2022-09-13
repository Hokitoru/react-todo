import React, {useState} from 'react';
import okay from '../../../images/okay.svg'
import classes from './style.module.scss'

const Check = () => {

    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <div>
            {
                !isCompleted ? <div onClick={() => setIsCompleted(!isCompleted)} className={classes.circle}></div> : <div onClick={() => setIsCompleted(!isCompleted)} className={classes.complete}></div>
            }
        </div>
    );
};

export default Check;