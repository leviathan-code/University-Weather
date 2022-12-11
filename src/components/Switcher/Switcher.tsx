import React from 'react';
import classes from './Switcher.module.scss'

export default function Switcher() {
    return (
        <div>
            <label className={classes.body}>
                    <div className={classes.slider}>
                            <div className={classes.Forecast}>
                                <div className={classes.text}>Forecast</div>
                            </div>
                            <div className={classes.Air_quality}>
                                <span>
                                    Air quality
                                </span>
                            </div>
                    </div>
            </label>
        </div>
    );
};

