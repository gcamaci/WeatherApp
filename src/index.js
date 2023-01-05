import style from './style.css'

const key = '1d189a7a6ae4d6c654959a31a08f2075';

const searchBtn = document.getElementById('search-btn')
const weatherTemp = document.getElementById('temp')
const searchInpt = document.getElementById('search-bar')

function secondRequest(str){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${str}&APPID=${key}`, {mode: 'cors'})
    .then((response) => {
        return response.json();
    })
    .then((response)=>{
        console.log(response)
        displayTemp(response.main.temp, response.name)
    });

}



function displayTemp(n,m){
    weatherTemp.innerText = '';
    let convert = Math.round((n - 273.15) * 9 /5 + 32);
    weatherTemp.innerText = `In ${m}, It is ${convert} Farenheight`
    
    console.log(Math.round(convert))
}

searchBtn.addEventListener('click', () => {
    secondRequest(searchInpt.value);
});


