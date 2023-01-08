import { getSearchInpt } from "./utils";
//fetches data by city. 
const weatherInfo = {}
async function fetchCurrent() {
    try{
        let cityName = getSearchInpt();
        let response;
        if (cityName) {
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=1d189a7a6ae4d6c654959a31a08f2075`, {mode: 'cors'});
        }else{
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=1d189a7a6ae4d6c654959a31a08f2075`, {mode: 'cors'});
        }
        const weatherData = await response.json();
        console.log(weatherData)
        
        //returns response
        return weatherData;

    } catch (error){
        console.error(error)
    }
};


const fetchForcast = async () => {
    const data = await fetchCurrent()
    const coords = data.coord

    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=1d189a7a6ae4d6c654959a31a08f2075`, {mode:'cors'});
        const weatherData = await response.json()
        console.log(weatherData)
        return weatherData
    }catch (error){
        console.log(error)
    }
};
export{
    fetchCurrent,
    fetchForcast
}