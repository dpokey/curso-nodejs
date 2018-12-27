//  Definimos el API_KEY para consumir el API de Darksky
const API_KEY_DARKSKY = '7ed09689d34081b66da9cb66c54b4b19'

//  Cargamos los modulos
const request = require('request')

var getWeather = (latitude, longitude, callback) => {
    request({
        // indica lo que vamos a solicitar
        url: `https://api.darksky.net/forecast/${API_KEY_DARKSKY}/${latitude},${longitude}`,
        // indica que los datos que vienen de vuelta van a ser json, y debe convertirlo a un objeto
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather.')
        }
    
    })
}

module.exports = {
    getWeather
}

