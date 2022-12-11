import React from 'react';
import classes from './Today.module.scss'
import { CurrentInterface } from './../../types'

interface Props{
    weather: CurrentInterface
}

export default function Today ({ weather }: Props) {

    return (
        <div className={classes.body}>
            <div className={classes.content}>
                <div className={classes.top_line}>
                    <div className={classes.time}>
                        {weather.last_updated.slice(-5)}
                    </div>
                </div>
                <hr />
                <div className={classes.main}>
                    <div className={classes.temperature}>
                    {Math.ceil(weather.temp_c)}°
                    </div>
                    <div className={classes.icon}>
                    <img src={weather.condition?.icon} alt=""/>
                    </div>
                </div>
                <div className={classes.info}>
                    <div className={classes.real_feel}>
                    Real Feel {Math.ceil(weather.feelslike_c)}°
                    </div>
                    <div className={classes.wind}>
                    Wind: {weather.wind_dir}, {Math.ceil(weather.wind_kph)} km/h
                    </div>
                    <div className={classes.footer}>
                        <div className={classes.pressure}>
                            {weather.pressure_mb}
                        </div>
                        <div className={classes.humidity}>
                            {weather.humidity}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};