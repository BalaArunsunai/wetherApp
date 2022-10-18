import React from 'react';
import { kelvinToCelcius } from '../../common';
export const CityWeather = props => {
    const { weatherData } = props
    console.log("weatherData", weatherData)
    const {name, weather, main} = weatherData
    return <div>
        <h2>{name}</h2>
        {/* Icons can also be used from the local files by using below code
            <i className={`wi-icon-${weather[0].id}`} /> */}
        <img alt='weather-icon' src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
        <h1>{kelvinToCelcius(main.temp)} &#8451;</h1>
    </div>
}