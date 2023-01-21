let moment = require('moment-timezone')

const calculateTime = (offset) => {
let timezone = moment().utcOffset(offset).format('h:mm:ss a')
console.log(timezone)
};

export {
    calculateTime
}