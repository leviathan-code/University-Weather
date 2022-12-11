import React from 'react'
import classes from './Graphic.module.scss'
import { ResponsiveBump } from '@nivo/bump'

export default function Graphic3({ data }: any) {
  return (
    <div className={classes.chart}>
    <h3>Temperature for 5 days</h3>
    <div className={classes.bump}>
        <ResponsiveBump
            data={data}
            colors={{ scheme: 'pink_yellowGreen' }}
            lineWidth={3}
            activePointSize={10}
            inactivePointSize={0}
            pointColor={{ theme: 'background' }}
            inactiveLineWidth={5}
            inactiveOpacity={0.15}
            endLabel={false}
            pointSize={7}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            pointBorderColor={{ from: 'serie.color' }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            margin={{ top: 0, right: 30, bottom: 35, left: 30 }}
            axisRight={null}
        />
    </div>
</div>
)
}
