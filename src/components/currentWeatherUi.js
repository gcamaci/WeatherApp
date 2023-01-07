import { getData } from "./fetchWeather";
import { getFarenheight} from "./utils";


const displayWeather = async (str) => {
    const weather = await getData();
    displayCurrent(weather)

};

const displayCurrent = (weather) => {
    const headContainer = document.getElementById('current_weather_data')
    const weatherTag = document.getElementById('weather_tag')
    const cityTitle = document.getElementById('city_title')
    const clock = document.getElementById('clock')
    let temp = getFarenheight(weather.main.temp);
    let cityName = weather.name;
    
    //let time = updateTime(`America/${weather.name}`)
    cityTitle.innerText =`${weather.name}`
    weatherTag.innerText = `${weather.weather[0].main}`
    

    console.log(weather);
    console.log(cityName);
    console.log(temp)
    console.log(weather.main.humidity)
    console.log(weather.main.pressure)
    console.log(weather.wind.speed)
    console.log(`${weather.name}`)
    
};


export{
    displayWeather
}