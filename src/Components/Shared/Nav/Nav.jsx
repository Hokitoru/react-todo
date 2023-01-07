import React from 'react';
import Search from "../Search/Search";
import Settings from "../Settings/Settings";
import classes from './style.module.scss'

const Nav = () => {
    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <a className={classes.title} href="src/Components/Shared/Nav#">To Do</a>
                <Search></Search>
                <Settings></Settings>
            </div>
        </div>
    );
};

export default Nav;