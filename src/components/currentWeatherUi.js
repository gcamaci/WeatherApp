
import {fetchWeatherData} from "./fetchWeather";
import { getFarenheight,capitalize, getWeatherForcast} from "./utils";
import moment from 'moment'

const displayWeather = async () => {
    const weatherData  = await fetchWeatherData();
    console.log(weatherData)
    //display current weather info
    displayGeneralInfo(
        weatherData.city_info.name,
        weatherData.current_description,
        weatherData.current_temps.temp
    );
    displayCurrentWeather(weatherData.current_temps,weatherData.current_wind_speed);
    displayForcast(weatherData.week_forecast);

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

const displayForcast = (forcastList) => {
    let time;
    
    const dailyContainers = document.querySelectorAll('.daily') 
    const forecastData = forcastList.filter(day => day.dt_txt.split(' ')[1] === '12:00:00');

    forecastData.forEach((day,index) => {
        let forcastCard = dailyContainers[index]
        forcastCard.innerHTML = ''
        let date =moment(day.dt_txt)
        let dayOfWeek = date.format('dddd' );
       
        const dateTagContainer = document.createElement('div')
        dateTagContainer.classList.add('flex')
        const dayWeekTag = document.createElement('p');
        dayWeekTag.innerText = dayOfWeek;
        dateTagContainer.appendChild(dayWeekTag)

        const weatherIcon = document.createElement('img');
        weatherIcon.src = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`

        const tempContainer = document.createElement('div');
        const highContainer = document.createElement('div');
        const lowContainer = document.createElement('div')

        const highIcon = document.createElement('p');
        highIcon.innerText = "H"
        const lowIcon = document.createElement('p');
        lowIcon.innerText = "L"

        const highTag = document.createElement('p');
        const lowTag = document.createElement('p');
        highTag.innerText = getFarenheight(day.main.temp_max)
        lowTag.innerText = getFarenheight(day.main.temp_min)

        highContainer.append(highIcon,highTag)
        lowContainer.append(lowIcon,lowTag)

        tempContainer.append(highContainer,lowContainer)

        
        forcastCard.append(dateTagContainer,weatherIcon,tempContainer)
       
    });
    console.log(forecastData)
};



export{
    displayWeather
}