import React, {useState} from 'react';
import sortIcon from '../../../images/sort-icon.svg'
import classes from './style.module.scss'
import {useDispatch} from "react-redux";
import {sortAction} from "../../../Store/taskReducer";

const SortButton = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const className = `${classes.dropdownContent} ${show ? classes.dropdownContentVisible : ''}`

    return (
        <div className={classes.container}>
            <div onClick={() => setShow(!show)} className={classes.dropdownButton}>
                <img src={sortIcon} alt="sortIcon"/>
                <p>Sorting</p>
            </div>
            <div className={className}>
                <div>
                    <h2>Порядок сортировки</h2>
                </div>
                <button onClick={() => dispatch(sortAction(1))}>По важности</button>
                <button onClick={() => dispatch(sortAction(2))}>По дате создания</button>
                <button onClick={() => dispatch(sortAction(3))}>По дате выполнения</button>
            </div>
        </div>
    );
};

export default SortButton;