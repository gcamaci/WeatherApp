import {fetchWeatherData} from "./fetchWeather";
import { getFarenheight,capitalize, getWeatherForcast} from "./utils";

const displayWeather = async () => {
    const weatherData  = await fetchWeatherData();
    console.log(weatherData)
    //display current weather info
    displayGeneralInfo(
        weatherData.city_info.name,
        weatherData.current_description,
        weatherData.current_temps.temp
    );
    displayCurrentWeather(weatherData.current_temps,weatherData.current_wind_speed)

};


const displayGeneralInfo = (name,weather,temp) => {
    const cityTitle = document.getElementById('city_title')
    const weatherTag = document.getElementById('weather_tag')
    const mainTempTag = document.getElementById('main_temp_display')
    const weatherImg = document.getElementById('main_temp_img')
    
    cityTitle.innerText = name;
    weatherTag.innerText = capitalize(weather);
    mainTempTag.innerText = getFarenheight(temp);

};

const displayCurrentWeather = (currentTemps,wind) => {
    const feelImg = document.getElementById('')
    const feelTag = document.getElementById('feels_tag')
    const humidImg = document.getElementById('')
    const humidTag = document.getElementById('humidity-tag')
    const highImg = document.getElementById('')
    const highTag = document.getElementById('high-tag')
    const lowImg = document.getElementById('')
    const lowTag = document.getElementById('low-tag')
    const windImg = document.getElementById('')
    const windTag = document.getElementById('wind-speed')


    feelTag.innerText = getFarenheight(currentTemps.feels_like)
    humidTag.innerText = `${currentTemps.humidity}%`;
    highTag.innerText = getFarenheight(currentTemps.temp_max)
    lowTag.innerText = getFarenheight(currentTemps.temp_min)
    windTag.innerText = `${wind}MPH`
    console.log(currentTemps)

}





export{
    displayWeather
}