import React from 'react'
import classes from './Graphic.module.scss'
import { ResponsiveRadialBar } from '@nivo/radial-bar'

export default function GraphicBar({ data }: any) {
  return (
    <div className={classes.chart}>
        <h3>Air quality</h3>
        <ResponsiveRadialBar
            data={data}
            valueFormat=">-.2f"
            cornerRadius={2}
            margin={{ top: 25, right: 25, bottom: 0, left: 25 }}
            borderWidth={1}
            startAngle={-90}
            endAngle={90}
            padding={0.4}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'brighter',
                        1
                    ]
                ]
            }}
            enableTracks={false}
            tracksColor="#242424"
            circularAxisOuter={{ tickSize: 5, tickPadding: 8, tickRotation: 0 }}
        />
    </div>
)
}
