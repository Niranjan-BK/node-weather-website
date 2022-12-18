const request = require('request')

const forecast = (lattitude, longitude, callback) => {
    const forecastUrl = `http://api.weatherstack.com/current?access_key=7426d6512a72c1094a6e8e2dfae22ad5&query=${lattitude},${longitude}`
    request({url: forecastUrl, json:true}, (err, { body }) => {
        if(err)
            callback('Unable to connect to weather service!')
        else if (body.error)
            callback('Unable to find location. Try another search')
        else 
            callback(undefined, 
                `Its is currently ${body.current.temperature} degrees out. There is a ${body.current.precip}% chance of rain.`)
    })
}

module.exports = forecast