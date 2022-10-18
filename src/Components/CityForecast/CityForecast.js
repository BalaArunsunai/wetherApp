import React from 'react';
import { getDay } from '../../common';
import { kelvinToCelcius } from '../../common';
import './CityForecast.css'
export const CityForecast = props => {
    const { forecastData } = props;
    const { dayOne, dayTwo, dayThree } = forecastData
    return <div className='forecastContainer'>
        <table className='forecastTable'>
            <tr>
                <th>{getDay(dayOne[0]?.dt_txt)}</th>
                <th>{getDay(dayTwo[0]?.dt_txt)}</th>
                <th>{getDay(dayThree[0]?.dt_txt)}</th>
            </tr>
            <tr>
                {/* Icons can also be used from the local files  by using the below code 
                 <td><i className={`wi-icon-${dayOne[0]?.weather[0].id}`} /></td>
                 <td><i className={`wi-icon-${dayTwo[0]?.weather[0].id}`} /></td>
                <td><i className={`wi-icon-${dayThree[0]?.weather[0].id}`} /></td> */}
                <td><img alt='weather-icon' src={`http://openweathermap.org/img/wn/${dayOne[0].weather[0].icon}.png`} /></td>
                <td><img alt='weather-icon' src={`http://openweathermap.org/img/wn/${dayTwo[0].weather[0].icon}.png`} /></td>
                <td><img alt='weather-icon' src={`http://openweathermap.org/img/wn/${dayThree[0].weather[0].icon}.png`} /></td>
            </tr>
            <tr>
                <td>{kelvinToCelcius(dayOne[0]?.main.temp_max)} &#8451;</td>
                <td>{kelvinToCelcius(dayTwo[0]?.main.temp_max)} &#8451;</td>
                <td>{kelvinToCelcius(dayThree[0]?.main.temp_max)} &#8451;</td>
            </tr>
            <tr>
                <td>{kelvinToCelcius(dayOne[dayOne.length - 1]?.main.temp_min)} &#8451;</td>
                <td>{kelvinToCelcius(dayTwo[dayTwo.length - 1]?.main.temp_min)} &#8451;</td>
                <td>{kelvinToCelcius(dayThree[dayTwo.length - 1]?.main.temp_min)} &#8451;</td>
            </tr>
        </table>
    </div>
}