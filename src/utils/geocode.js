const request = require('request')

const geocode = (address, callback) => {
    const geoCodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)  + '.json?access_token=pk.eyJ1IjoibmJrMTk5NyIsImEiOiJjbGJtd2F5NHIwMzlwM29wZ3M3bDIxa3VhIn0.lRU1Ndu9D8NFic7ZedXS6g'
    request({url: geoCodingUrl, json:true}, (err, { body}) => {
        if(err)
            callback('Unable to connect to location service!')
        else if (body.features.length === 0)
            callback('Unable to find location. Try another search')
        else 
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
    })
}

module.exports = geocode