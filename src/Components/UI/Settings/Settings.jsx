import React from 'react';
import settingsIcon from '../../../images/settings.png'
import classes from './style.module.scss'

const Settings = () => {
    return (
        <div>
            <img className={classes.settingsIcon} src={settingsIcon} alt="Settings"/>
        </div>
    );
};

export default Settings;