import React, {useState} from 'react';
import classes from "../Star/style.module.scss";
import star from '../../../images/star.svg'
import emptyStar from '../../../images/empty-star.svg'

const Star = ({importance, onClick}) => {


    return (
        <div className={classes.container}>
            {
                importance === false ? <img src={emptyStar} alt='emptyStar' onClick={() => onClick()} className={classes.star}></img> : <img src={star} alt='star' onClick={() => onClick()} className={classes.important}></img>
            }
        </div>
    );
};

export default Star;