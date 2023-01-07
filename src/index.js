import { displayWeather } from './components/currentWeatherUi';
import style from './style.css'
const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click',displayWeather)


window.onload = () =>{
    displayWeather();
}
