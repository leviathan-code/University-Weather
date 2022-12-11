import React from 'react'
import classes from './Map.module.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MyMap({ weather }: any) {
  const mapState = {
    center: [weather.location.lat, weather.location.lon],
    zoom: 5,
  };

    return (
      <div className={classes.body}>
        <YMaps>
          <Map state={mapState} style={{width: '386%', height: '170%'}}>

            <Placemark
              geometry={{
                coordinates: mapState.center,
              }}
             
            />
          </Map>
        </YMaps>    
      </div>
  )
}
