import style from './style.css'

const searchBtn = document.getElementById('search-btn')
const weatherTemp = document.getElementById('temp')
const searchInpt = document.getElementById('search-bar')



async function getData() {
    //wait for promise from Fetch to resolve
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=1d189a7a6ae4d6c654959a31a08f2075`, {mode: 'cors'});
    //wait for .json() to return promise
    const weatherData = await response.json();
    return weatherData;
}




async function displayTemp() {
    weatherTemp.innerText = '';
    //wait for kevlin variable to return promise and Data. 
    const kelvin =  await getData();
    let convert = Math.round((kelvin.main.temp - 273.15) * 9 /5 + 32);
    weatherTemp.innerText = `It is ${convert}'s degrees Farenheight in Chicago`;
    
};

searchBtn.addEventListener('click',displayTemp)



