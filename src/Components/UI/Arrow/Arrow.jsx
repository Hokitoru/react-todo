import React, {useState} from 'react';
import classes from './style.module.scss';
import arrow from '../../../images/arrow.png'

const Arrow = () => {
    const [arrowSwitcher, setArrowSwitcher] = useState(false);

    const changeArrow = () => {
        setArrowSwitcher(!arrowSwitcher);
    }

    return (
        <div className={classes.container}>
            <img onClick={changeArrow} className={arrowSwitcher === false ? classes.arrow : classes.arrowActive} src={arrow} alt="arrow"/>
        </div>
    );
};

export default Arrow;