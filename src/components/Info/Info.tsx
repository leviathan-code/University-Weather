import React from 'react'
import Day from '../Day/Day'
import Today from '../Today/Today'
import MyMap from '../Map/Map'
import classes from './Info.module.scss'
import { Weather} from './../../types'
import Switcher from '../Switcher/Switcher'


interface Props{
    weather: Weather
}

export default function Info({ weather }: Props) {
    let days = []
    for (let i = 1; i < weather.forecast.forecastday.length; i++)
        days.push(weather.forecast.forecastday[i])

    return (
        <div className={classes.body}>
            <div className={classes.tabs}>
                <ul className={classes.list}>
                    <li className={classes.listLi}>Today</li>
                    <li className={classes.listLi}>Tomorrow</li>
                    <li className={ classes.active}>Next 5 days</li>
                </ul>
            <div className={classes.switcher}>
                    <Switcher/>
            </div>

            </div>
            <div className={classes.days}>
                <Today weather={weather.current}/>
                {days.map(data => <Day key={data.date_epoch} day={data}/>)}
            </div>
            <div className={classes.map_body} >
                <div>Global map</div>
                <button className={classes.map_btn}>View wide</button>
            </div>
            <div className={classes.map}>
                <MyMap weather={weather}/>
            </div>
        </div>
    );
};
