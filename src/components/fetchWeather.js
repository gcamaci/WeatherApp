import { getSearchInpt } from "./utils";
//fetches data by city. 
async function getData() {
    try{
        let cityName = getSearchInpt();
        let response;
        if (cityName) {
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=1d189a7a6ae4d6c654959a31a08f2075`, {mode: 'cors'});
        }else{
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=1d189a7a6ae4d6c654959a31a08f2075`, {mode: 'cors'});
        }
        //wait for promise from Fetch to resolve
        //wait for .json() to return promise
        const weatherData = await response.json();
        return weatherData;

    } catch (error){
        console.error(error)
    }
};

export{
    getData
}