import React, {useState} from 'react';
import classes from "../Star/style.module.scss";
import star from '../../../images/star.svg'
import emptyStar from '../../../images/empty-star.svg'

const Star = ({onClick}) => {
    const [isImportant, setIsImportant] = useState(false);

    return (
        <div className={classes.container}>
            {
                !isImportant ? <img src={emptyStar} alt='emptyStar' onClick={() => setIsImportant(!isImportant)} className={classes.star}></img> : <img src={star} alt='star' onClick={() => setIsImportant(!isImportant)} className={classes.important}></img>
            }
        </div>
    );
};

export default Star;