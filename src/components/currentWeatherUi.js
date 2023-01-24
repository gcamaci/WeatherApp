
import {fetchWeatherData} from "./fetchWeather";
import { getFarenheight,capitalize, getWeatherForcast} from "./utils";
import moment from 'moment'
import { calculateTime,clockDisplay} from "./clock";
import clear_sky from '../Images/clear-sky.png'
import few_clouds from '../Images/few-clouds.png'
import scattered_clouds from '../images/scat-clouds.png'
import broken_clouds from '../Images/broken-clouds.png'
import shower_rain from '../Images/shower-rain.png'
import rain from '../images/rain.png'
import thunderstorm from '../Images/thunder.png'
import snow_img from '../Images/snowflakes.png'

const displayWeather = async () => {
    const weatherData  = await fetchWeatherData();
    

    //display current weather info
    displayGeneralInfo(
        weatherData.city_info.name,
        weatherData.current_description,
        weatherData.current_temps.temp
    );
    displayCurrentWeather(weatherData.current_temps,weatherData.current_wind_speed);
    displayForcast(weatherData.week_forecast);
    
    clockDisplay.setOffset(weatherData.city_offset);
    
    console.log(weatherData.current_weater_icon)
    console.log(chooseIcon(weatherData.current_weater_icon))
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
    

}

const displayForcast = (forcastList) => {
    const dailyContainers = document.querySelectorAll('.daily') 
    const forecastData = forcastList.filter(day => day.dt_txt.split(' ')[1] === '12:00:00');

    forecastData.forEach((day,index) => {
        let forcastCard = dailyContainers[index]
        forcastCard.innerHTML = ''
        let date = moment(day.dt_txt)
        let dayOfWeek = date.format('dddd' );
       
        const dateTagContainer = document.createElement('div')
        dateTagContainer.classList.add('flex')
        const dayWeekTag = document.createElement('p');
        dayWeekTag.innerText = dayOfWeek;
        dateTagContainer.appendChild(dayWeekTag)

        const weatherIcon = document.createElement('img');
        weatherIcon.src = `${chooseIcon(day.weather[0].icon)}`
        weatherIcon.classList.add('forecast-img')

        const tempContainer = document.createElement('div');
        const highContainer = document.createElement('div');
        highContainer.classList.add('flex', 'flex-col', 'items-center')
        

        const highIcon = document.createElement('p');
        highIcon.innerText = `${day.weather[0].description}`
        const highTag = document.createElement('p');
        highTag.innerText = getFarenheight(day.main.temp_max)
        highContainer.append(highIcon,highTag)
        tempContainer.appendChild(highContainer)
        forcastCard.append(dateTagContainer,weatherIcon,tempContainer)

        console.log(day.weather[0].icon)
       
    });
    
};


function chooseIcon(icon_code) {
    switch(icon_code){
        case "01n":
        case "01d":
            return clear_sky;
            break;
        case "02n":
        case "02d":
            return few_clouds;
            break
        case "03n":
        case "03d":
            return scattered_clouds;
            break;
        case "04n":
        case "04d":
            return broken_clouds;
            break;
        case "09n":
        case "09d":
            return shower_rain;
            break;
        case "10n":
        case "10d":
            return rain;
            break;
        case "11d":
        case "11n":
            return thunderstorm;
            break;
        case "13n":
        case "13d":
            return snow_img
            break;
        case "50n":
        case "50d":
            return clear_s;
            break;
        default:
            return clear_sky   
    }
}
export{
    displayWeather
}