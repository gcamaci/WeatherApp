import {fetchWeatherData} from "./fetchWeather";
import { getFarenheight,capitalize, getWeatherForcast} from "./utils";

const displayWeather = async () => {
    const weatherData  = await fetchWeatherData();
    console.log(weatherData)
    /*
    displayCurrent(currentWeather)
    getWeatherForcast(forcastWeather)
    */

};


const displayCurrent = (currentWeather) => {
    const headContainer = document.getElementById('current_weather_data')
    const cityTitle = document.getElementById('city_title')
    const weatherTag = document.getElementById('weather_tag')
    const mainTempTag = document.getElementById('main_temp_display')
    const weatherImg = document.getElementById('main_temp_img')
    const clock = document.getElementById('clock')
    cityTitle.innerText = currentWeather.name
    weatherTag.innerText = capitalize(currentWeather.weather[0].description)
    mainTempTag.innerText = getFarenheight(currentWeather.main.temp)
    
    
    weatherImg.src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`

    
    //humidity
    //feels_like
    //wind Speed
    //high/low

    //icons

    
    
};


export{
    displayWeather
}