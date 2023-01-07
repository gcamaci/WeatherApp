const moment = require('moment-timezone')
const getFarenheight = (data) => Math.round((data - 273.15) * 9 /5 + 32);

const getSearchInpt = () => {
    const searchInput = document.getElementById('city-input').value.trim()
    if (searchInput !== '') {
        return searchInput
      } else {
        return false
    }
}
//function that gets the weather.list and returns 5 day forecast;
//loop through and if weather.list.[n] ===list[+1] pop it out of list. 
// should return the object back with only 5 list items/ each day

const getWeatherForcast = (weather) => {

};


export{
    getSearchInpt,
    getFarenheight,
  
    
}