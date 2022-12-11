import React from 'react'
import classes from './Day.module.scss'
import { ForecastdayInterface } from './../../types'

interface Props {
    day: ForecastdayInterface
}

export default function Day({ day }:Props) {


    function converter(day: string): string {
        const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']

        let date = new Date(day)
        let i = date.getDay()
        return days[i]    
    }

    return (
        <div className={classes.body}>
            <div className={classes.content}>
                <div className={classes.day}>
                    {converter(day.date)}
                </div>
                <hr className={classes.hr} />
                <div className={classes.icon}>
                    <img src={day.day.condition?.icon} alt=""/>
                </div>
                <div className={classes.degree}>
                    {Math.ceil(day.day.avgtemp_c)}°
                </div>
            </div>
        </div>
    );
};
