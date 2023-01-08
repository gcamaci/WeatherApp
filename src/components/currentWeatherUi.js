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
    displayCurrentWeather(weatherData.current_temps)

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

const displayCurrentWeather = (currentTemps) => {
    console.log(currentTemps)

}





export{
    displayWeather
}