import React, {useState} from 'react';
import searchIcon from '../../../images/search.svg'
import classes from './style.module.scss'
import {searchAction} from "../../../Store/taskReducer";
import {useDispatch} from "react-redux";

const Search = () => {
    const dispatch = useDispatch();

    const setSearch = (text) =>{
        dispatch(searchAction(text));
    }

    return (
        <div className={classes.container}>
            <img className={classes.searchIcon} src={searchIcon} alt="Search"/>
            <input onChange={event => setSearch(event.target.value)} placeholder={'Search'} className={classes.searchInput} type="text"/>
        </div>
    );
};

export default Search;