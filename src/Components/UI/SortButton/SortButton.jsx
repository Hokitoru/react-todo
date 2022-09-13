import React from 'react';
import sortIcon from '../../../images/sort-icon.svg'
import classes from './style.module.scss'

const SortButton = () => {
    return (
        <div className={classes.container}>
            <img className={classes.sortIcon} src={sortIcon} alt="sortIcon"/>
            <p className={classes.sortText}>Sorting</p>
        </div>
    );
};

export default SortButton;