let moment = require('moment-timezone')

const calculateTime = (timezone) => timezone = (timezone/60)/60;
    
    

const clockDisplay = (()=>{
    const clock = document.getElementById('clock');
    let offset;


    const setOffset = (offsetValue) => offset = offsetValue;

    const updateClock = () => {
        clock.innerText = '';
        const timezone = moment().utcOffset(offset).format('h:mm:ss a');
        clock.innerText = `${timezone}`
    }
    return {
        setOffset,
        updateClock
    }

})();  



export {
    calculateTime,
    clockDisplay
}
