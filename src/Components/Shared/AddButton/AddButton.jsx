import React from 'react';
import classes from './style.module.scss'

const AddButton = ({onClick}) => {
    return (
        <div>
            <button onClick={onClick} className={classes.addButton}>Add</button>
        </div>
    );
};

export default AddButton;