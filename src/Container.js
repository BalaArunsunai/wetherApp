import React, { useEffect, useState } from "react";
import { CityWeather } from './Components/CityWeather/CityWeather';
import { CityForecast } from './Components/CityForecast/CityForecast';
import { getDataWithUrl } from "./Api/getDataWithUrl";
import { ApiKey } from './common.js';
const cityList = require('./cities-fr.json');

export const Container = () => {
    const [selectedCity, setSelectedCity] = useState(cityList[0]);
    const [isLoading, setIsLoading] = useState(true);
    const [weatherData, setWeatherData] = useState();
    const [forecastData, setForecastData] = useState();

    useEffect(() => {
        setIsLoading(true);
        const { lat, lon } = selectedCity;
        getDataWithUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`).then(result1 => {
            setWeatherData(result1.data);
            getDataWithUrl(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}`).then(result2 => {
                const { list } = result2.data;
                let dayOne = [], dayTwo = [], dayThree = []
                list.map(data => {
                    let date = new Date(data.dt_txt).toLocaleDateString();
                    const currentDate = new Date()
                    let dateOne = new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString()
                    let dateTwo = new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString()
                    let dateThree = new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString()
                    let dateFour = new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString()
                    switch (date) {
                        case dateOne:
                            dayOne.push(data);
                            break;
                        case dateTwo:
                            dayTwo.push(data);
                            break;
                        case dateThree:
                            dayThree.push(data);
                            break;
                        case dateFour:
                            return;
                        default: break;
                    }
                })
                dayOne = dayOne.sort((a, b) => b.main.temp - a.main.temp)
                dayTwo = dayTwo.sort((a, b) => b.main.temp - a.main.temp)
                dayThree = dayThree.sort((a, b) => b.main.temp - a.main.temp)
                setForecastData({ dayOne, dayTwo, dayThree });
                setIsLoading(false);
            })
        })
    }, [selectedCity]);

    const onCityChange = e => {
        const selected = cityList.filter(list => list.nm === e.target.value)[0];
        setSelectedCity(selected);
    }

    return <>
    <legend>Select City</legend>
        <select
            id="all-languages-filter"
            className="event-remove-border"
            defaultValue={cityList[0].nm}
            value={selectedCity.nm}
            onChange={e => onCityChange(e)}>
            {cityList.map(city => {
                return <option key={city.id}>{city.nm}</option>;
            })}
        </select>
        {isLoading ? <div><img width='10%' height='10%' src={require('./loader.png')} /></div> :
            <>
                <CityWeather weatherData={weatherData} />
                <CityForecast forecastData={forecastData} />
            </>}
    </>
}