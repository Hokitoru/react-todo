import React, {useState} from 'react';
import sortIcon from '../../../images/sort-icon.svg'
import classes from './style.module.scss'

const SortButton = () => {
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
                <br/>
                <button>По важности</button>
                <button>По дате создания</button>
                <button>По дате выполнения</button>
            </div>
        </div>
    );
};

export default SortButton;