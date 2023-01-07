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

export{
    getSearchInpt,
    getFarenheight,
  
    
}