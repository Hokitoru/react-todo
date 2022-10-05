import React, {useState} from 'react';
import classes from './style.module.scss';
import arrow from '../../../images/arrow.png'

const Arrow = ({onClick}) => {
    const [arrowSwitcher, setArrowSwitcher] = useState(false);

    console.log(arrowSwitcher);

    const changeArrow = () => {
        setArrowSwitcher(!arrowSwitcher);
    }

    return (
        <div onClick={() => {changeArrow(); onClick()}} className={classes.container}>
            <img className={arrowSwitcher === false ? classes.arrow : classes.arrowActive} src={arrow} alt="arrow"/>
        </div>
    );
};

export default Arrow;