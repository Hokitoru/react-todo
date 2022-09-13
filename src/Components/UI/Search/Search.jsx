import React from 'react';
import searchIcon from '../../../images/search.svg'
import classes from './style.module.scss'

const Search = () => {
    return (
        <div className={classes.container}>
            <img className={classes.searchIcon} src={searchIcon} alt="Search"/>
            <input placeholder={'Search'} className={classes.searchInput} type="text"/>
        </div>
    );
};

export default Search;