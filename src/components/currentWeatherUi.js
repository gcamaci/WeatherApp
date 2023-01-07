import { fetchCurrent, fetchForcast} from "./fetchWeather";
import { getFarenheight,capitalize} from "./utils";


const displayWeather = async () => {
    const currentWeather = await fetchCurrent()
    const forcastWeather = await fetchForcast
    displayCurrent(currentWeather)

};

const displayCurrent = (weather) => {
    const headContainer = document.getElementById('current_weather_data')
    const cityTitle = document.getElementById('city_title')
    const weatherTag = document.getElementById('weather_tag')
    const mainTempTag = document.getElementById('main_temp_display')
    const clock = document.getElementById('clock')
    cityTitle.innerText = weather.name
    weatherTag.innerText = capitalize(weather.weather[0].description)
    mainTempTag.innerText = getFarenheight(weather.main.temp)
    

    console.log(weather.main.temp)

    
    
   
    
};


export{
    displayWeather
}