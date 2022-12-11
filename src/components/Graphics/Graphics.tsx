import React from 'react'
import classes from './Graphic.module.scss'
import { ForecastdayInterface, Weather } from './../../types'
import GraphicPie from './GraphicPie'
import GraphicBar from './GraphicBar'
import GraphicBump from './GraphicBump'

interface Props{
  weather: Weather
}

export default function Graphics({ weather }: Props) {
  let days:ForecastdayInterface[] = weather.forecast.forecastday
  const BumpData = []
  const PieData = []

  for (let i = 1; i < days.length; i++) {
    BumpData.push(
        {
            "id": days[i].date[0],
            "data": [
                {
                    "x": '03:00',
                    "y": Math.ceil(days[i].hour[3].temp_c)
                },
                {
                    "x": '09:00',
                    "y": Math.ceil(days[i].hour[9].temp_c)
                },
                {
                    "x": '15:00',
                    "y": Math.ceil(days[i].hour[15].temp_c)
                },
                {
                    "x": '21:00',
                    "y": Math.ceil(days[i].hour[21].temp_c)
                },
            ]
        },
    )
    PieData.push(
        {
            "id": days[i].date[0],
            "label": days[i].date,
            "value": days[i].day.uv,
            "color": `hsl(${56+i*10}, 70%, 50%)`
        }
    )
}
const BarData = []

for (let i = 0; i < days.length-2; i++) {
  BarData.push(
        {
            "id": days[i].date[0],
            "data": [
                {
                    "x": "CO",
                    "y": Math.ceil(days[i].day.air_quality.co)
                },
                {
                    "x": "NO2",
                    "y": Math.ceil(days[i].day.air_quality.no2)
                },
                {
                    "x": "SO2",
                    "y": Math.ceil(days[i].day.air_quality.so2)
                }
            ]
        }
    )
}

  return (
    <div className={classes.graphic}>
      <GraphicPie data={PieData}/>
      <GraphicBar data={BarData}/>
      <GraphicBump data={BumpData}/>
    </div>
)
}
