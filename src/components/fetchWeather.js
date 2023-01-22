import { calculateTime } from "./clock";
import { getSearchInpt } from "./utils";
//fetches data by city. 
async function fetchWeatherData() {
    try{
        let cityName = getSearchInpt();
        let currentResponse;
        if (cityName) {
            currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=1d189a7a6ae4d6c654959a31a08f2075`, {mode: 'cors'});
        }else{
            currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=1d189a7a6ae4d6c654959a31a08f2075`, {mode: 'cors'});
        }
        const currentData = await currentResponse.json();
        const coords = currentData.coord
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=1d189a7a6ae4d6c654959a31a08f2075`, {mode:'cors'});
        const forecastData = await forecastResponse.json();
        //returns response
        
        return {
           city_info: forecastData.city,
           city_offset: calculateTime(currentData.timezone),
           current_temps: currentData.main,
           current_wind_speed: currentData.wind.speed,
           current_description: currentData.weather[0].description,
           current_weater_icon: currentData.weather[0].icon,
           week_forecast: forecastData.list
        };
    } catch (error){
        console.error(error)
    }
};
export{
    fetchWeatherData
}