import React from 'react'
import classes from './Graphic.module.scss'
import { ResponsiveBar } from "@nivo/bar";


export default function GraphicPie({ data }: any) {
  return (
    <div className={classes.chart}>
    <h3>UV Index</h3>
    <div className={classes.pie}>
        <ResponsiveBar
            data={data}
            maxValue={4}
      padding={0.6}
      margin={{
        top: 10,
        right: 10,
        bottom: 36,
        left: 36
      }}
      indexBy="x"
      enableLabel={false}
      colors='#bd7a0f'
      borderRadius={2}
      axisLeft={{
        tickValues: 7
      }}
    />
    </div>
</div>
)
}
