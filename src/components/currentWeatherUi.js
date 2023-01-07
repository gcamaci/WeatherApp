import { fetchCurrent, fetchForcast} from "./fetchWeather";
import { getFarenheight} from "./utils";


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
    //create a util function to format weatherTag
    weatherTag.innerText = weather.weather[0].description
    
    //weather desc
    console.log(weather.weather[0].description) 
   
    
};


export{
    displayWeather
}