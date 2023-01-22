import { displayWeather } from './components/currentWeatherUi';
import style from './style.css'
import { clockDisplay } from './components/clock';
const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click',displayWeather)


window.onload = () =>{
    displayWeather()
    
}
setInterval(clockDisplay.updateClock, 1000)